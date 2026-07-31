import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Palette,
  FileCode,
  Cpu,
  Network,
  ShieldCheck,
  MessageSquare,
  Users,
  Dumbbell,
  Brain,
  Trophy,
  Award,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Skill = {
  short: string;
  full: string;
  description: string;
  icon: typeof Code2;
  certificate?: string;
};

const journey: Skill[] = [
  {
    short: "HTML",
    full: "HyperText Markup Language",
    description:
      "The structural foundation of the web — semantic markup, accessible documents and well-formed page architecture.",
    icon: FileCode,
  },
  {
    short: "CSS",
    full: "Cascading Style Sheets",
    description:
      "Layout, responsive design and visual craft — flexbox, grid, transitions and modern styling systems.",
    icon: Palette,
  },
  {
    short: "JavaScript",
    full: "JavaScript (ECMAScript)",
    description:
      "Bringing pages to life with logic, interactivity, DOM manipulation and asynchronous programming.",
    icon: Code2,
  },
  {
    short: "Hardware",
    full: "Computer Hardware & Assembly",
    description:
      "Understanding, assembling and troubleshooting physical systems — components, peripherals and diagnostics.",
    icon: Cpu,
  },
  {
    short: "Networking",
    full: "Computer Networking Fundamentals",
    description:
      "How machines talk — topologies, the OSI model, IP addressing, switching and routing essentials.",
    icon: Network,
  },
  {
    short: "CCNA",
    full: "Cisco Certified Network Associate",
    description:
      "Enterprise-grade networking — routing and switching, network access, IP services and security fundamentals.",
    icon: ShieldCheck,
  },
];

const personalStrengths = [
  { name: "Communication", icon: MessageSquare },
  { name: "Teamwork", icon: Users },
  { name: "Hardworking", icon: Dumbbell },
  { name: "Growth Mindset", icon: Brain },
  { name: "Leadership", icon: Trophy },
  { name: "Adaptability", icon: Sparkles },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<Skill | null>(null);

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">
            What I Bring
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            A learning journey, step by step. Select any milestone to view its certificate.
          </p>
        </motion.div>

        {/* Journey timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ul className="space-y-10">
            {journey.map((skill, i) => {
              const alignRight = i % 2 === 1;
              return (
                <motion.li
                  key={skill.short}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  className="relative pl-16 md:pl-0"
                >
                  {/* Node */}
                  <span className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  </span>

                  <div
                    className={`md:w-1/2 ${
                      alignRight ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(skill)}
                      className="w-full text-left bg-card border border-border rounded-sm p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          alignRight ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        <skill.icon
                          size={22}
                          className="text-primary shrink-0 group-hover:scale-110 transition-transform"
                        />
                        <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                          Step {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        {skill.full}
                      </h3>
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mt-1">
                        {skill.short}
                      </p>
                      <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                        {skill.description}
                      </p>
                      <span
                        className={`inline-flex items-center gap-2 mt-4 font-body text-xs font-medium uppercase tracking-wider text-primary ${
                          alignRight ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        <Award size={14} />
                        View certificate
                      </span>
                    </button>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Personal strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mt-24"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Personal Strengths
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {personalStrengths.map((strength, i) => (
              <motion.div
                key={strength.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="bg-card border border-border p-5 rounded-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <strength.icon
                  size={22}
                  className="text-primary mb-3 group-hover:scale-110 transition-transform"
                />
                <p className="font-body text-sm font-medium text-foreground">{strength.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{active?.full}</DialogTitle>
            <DialogDescription className="font-body">{active?.description}</DialogDescription>
          </DialogHeader>
          {active?.certificate ? (
            <img
              src={active.certificate}
              alt={`${active.full} certificate`}
              className="w-full rounded-sm border border-border"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 border border-dashed border-border rounded-sm py-14 text-center">
              <Award size={28} className="text-primary" />
              <p className="font-body text-sm text-muted-foreground">
                Certificate coming soon — it will appear here once uploaded.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SkillsSection;
