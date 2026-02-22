import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">Get To Know</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <img src={profileImg} alt="Parth Der" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-sm -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Parth Der</span> 👋, a motivated Computer Science diploma student based in Ahmedabad, India. I completed my 10th standard with <span className="text-foreground font-semibold">82%</span> in 2025 and I'm now embarking on my Diploma journey starting April 2026 🎓.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              I'm passionate about technology 💻, sports, networking, and global exposure. As an avid tennis and football player ⚽, I've developed discipline, teamwork, and a competitive spirit that I bring to everything I do.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              My long-term vision includes becoming a <span className="text-foreground font-semibold">Data Analyst</span> 📊, building successful businesses, studying abroad 🌍, and traveling the world. I thrive on meeting ambitious, like-minded individuals and believe in the power of connections and continuous growth 🚀.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Location", value: "Ahmedabad, India" },
                { label: "Focus", value: "Data Analysis" },
                { label: "Sports", value: "Tennis & Football" },
                { label: "Mindset", value: "Global Vision" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-primary pl-4">
                  <p className="text-xs tracking-wider uppercase text-primary font-body font-medium">{item.label}</p>
                  <p className="font-body text-foreground font-medium text-sm mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
