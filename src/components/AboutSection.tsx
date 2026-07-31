import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HighlightWord = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block cursor-default group">
    <span className="relative z-10 font-semibold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
      {children}
    </span>
    <span className="absolute inset-0 -mx-1 -my-0.5 px-1 py-0.5 bg-primary/0 group-hover:bg-primary rounded-sm scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300" />
  </span>
);

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            I'm <HighlightWord>Parth Der</HighlightWord> 👋, a motivated <HighlightWord>Computer Engineering</HighlightWord> <HighlightWord>diploma</HighlightWord> student based in Ahmedabad, India. I completed my 10th standard with <HighlightWord>82%</HighlightWord> in 2025 and I'm now embarking on my <HighlightWord>Diploma</HighlightWord> journey starting April 2026 🎓. I've always been drawn to understanding how technology works behind the scenes, and choosing <HighlightWord>Computer Engineering</HighlightWord> felt like the natural next step to turning that curiosity into a career.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            I'm passionate about <HighlightWord>technology</HighlightWord> 💻, sports, networking, and global exposure. As an avid tennis and football player ⚽, I've developed discipline, teamwork, and a competitive spirit that I bring to everything I do. Whether it's on the field or behind a screen, I believe in giving my best and constantly pushing boundaries.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            My long-term vision includes becoming a <HighlightWord>Data Analyst</HighlightWord> 📊, building successful businesses, studying abroad 🌍, and traveling the world. I'm fascinated by how data can tell stories and drive decisions, and I'm committed to mastering the tools and skills needed to excel in this field. I thrive on meeting ambitious, like-minded individuals and believe in the power of connections and continuous growth 🚀.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
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
    </section>
  );
};

export default AboutSection;
