import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, MessageSquare, Users, Dumbbell, Brain, Trophy } from "lucide-react";

const technicalSkills = [
  { name: "HTML", level: 70 },
  { name: "CSS", level: 60 },
  { name: "JavaScript", level: 45 },
  { name: "Data Analysis", level: 30, label: "Learning" },
];

const personalStrengths = [
  { name: "Communication", icon: MessageSquare },
  { name: "Teamwork", icon: Users },
  { name: "Hardworking", icon: Dumbbell },
  { name: "Growth Mindset", icon: Brain },
  { name: "Leadership", icon: Trophy },
  { name: "Adaptability", icon: Code },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">What I Bring</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="font-body text-xs text-muted-foreground">{skill.label || `${skill.level}%`}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">Personal Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {personalStrengths.map((strength, i) => (
                <motion.div
                  key={strength.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="bg-card border border-border p-5 rounded-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <strength.icon size={22} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-body text-sm font-medium text-foreground">{strength.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
