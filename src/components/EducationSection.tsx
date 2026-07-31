import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Laptop } from "lucide-react";

const milestones = [
  {
    year: "2025",
    title: "Completed 10th Standard",
    description: "Achieved 82% — building the academic foundation.",
    icon: GraduationCap,
  },
  {
    year: "2026",
    title: "Transition Year",
    description: "Initially pursued 11th grade, later chose the Diploma path for a more focused career trajectory.",
    icon: BookOpen,
  },
  {
    year: "2026 — Onwards",
    title: "Diploma in Computer Engineering",
    description: "Commencing April 2026 — diving deep into programming, data analysis, and technology.",
    icon: Laptop,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">My Path</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Education</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 mt-2" />

              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                <div className="bg-card p-6 rounded-sm shadow-lg border border-border">
                  <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <item.icon size={18} className="text-primary" />
                    <span className="text-xs tracking-widest uppercase text-primary font-body font-semibold">{item.year}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
