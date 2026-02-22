import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Globe, Briefcase, Plane } from "lucide-react";

const goals = [
  { icon: Target, title: "Data Analyst", desc: "Master the art of transforming data into actionable insights." },
  { icon: Globe, title: "Study Abroad", desc: "Gain global education and international perspective." },
  { icon: Briefcase, title: "Entrepreneurship", desc: "Build businesses that create real impact." },
  { icon: Plane, title: "Travel the World", desc: "Explore cultures, connect with ambitious minds globally." },
];

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-heading text-[12rem] md:text-[18rem] font-bold text-cream/[0.03] tracking-widest">
          VISION
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">Looking Ahead</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream">Vision & Goals</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading italic text-xl md:text-2xl text-caramel-light text-center max-w-2xl mx-auto mb-16"
        >
          "The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them."
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="text-center p-6 border border-cream/10 rounded-sm hover:border-primary/40 transition-all duration-300 group"
            >
              <goal.icon size={32} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-bold text-cream mb-2">{goal.title}</h3>
              <p className="font-body text-sm text-cream/60">{goal.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
