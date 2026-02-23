import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Code2, Rocket } from "lucide-react";

const projects = [
  { icon: BarChart3, title: "Data Analysis Projects", desc: "Exploring datasets, building dashboards, and extracting insights." },
  { icon: Code2, title: "Web Development", desc: "Creating responsive, modern websites and applications." },
  { icon: Rocket, title: "Business Ventures", desc: "Entrepreneurial ideas transforming into real-world solutions." },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">In The Works</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Future Projects</h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
            Coming Soon — Building My Portfolio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border rounded-sm p-8 text-center relative overflow-hidden group hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.4)] hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-primary/[0.02] group-hover:bg-primary/[0.05] transition-colors duration-500" />
              <div className="relative z-10">
                <project.icon size={36} className="text-primary mx-auto mb-5" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-5">{project.desc}</p>
                <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase font-body font-semibold text-primary border border-primary/30 rounded-full">
                  Under Development
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
