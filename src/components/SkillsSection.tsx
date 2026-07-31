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
    short: "Responsive Web",
    full: "Responsive Web Development",
    description:
      "Semantic markup and modern styling — flexbox, grid, responsive layouts, transitions and accessible, well-structured pages across every screen.",
    icon: FileCode,
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
    <section id="skills" className="py-24 bg-gradient-skills">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">
            What I Bring
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground">Skills</h2>
          <p className="font-body text-secondary-foreground/60 mt-4 max-w-xl mx-auto">
            Tap any skill to view its certificate.
          </p>
        </motion.div>

        {/* Compact skill grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
          {journey.map((skill, i) => (
            <motion.button
              key={skill.short}
              type="button"
              onClick={() => setActive(skill)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="group relative bg-skill-card border border-secondary-foreground/15 rounded-sm p-4 text-left hover:border-primary/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* subtle accent wash on hover */}
              <span className="pointer-events-none absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />

              <div className="relative flex items-center justify-between mb-2">
                <skill.icon
                  size={18}
                  className="text-primary group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-primary/80 font-medium">
                  {skill.short}
                </span>
              </div>

              <h3 className="relative font-heading text-sm md:text-base font-semibold text-secondary-foreground/90 leading-snug">
                {skill.full}
              </h3>

              <span className="relative inline-flex items-center gap-1.5 mt-2.5 font-body text-[0.6rem] font-medium uppercase tracking-wider text-secondary-foreground/50 group-hover:text-primary transition-colors">
                <Award size={11} />
                Certificate
              </span>
            </motion.button>
          ))}
        </div>

        {/* Personal strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold text-secondary-foreground text-center mb-8">
            Personal Strengths
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {personalStrengths.map((strength, i) => (
              <motion.div
                key={strength.name}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.4 + i * 0.06 }}
                className="flex items-center gap-2.5 bg-skill-card border border-secondary-foreground/15 px-4 py-2.5 rounded-sm hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group"
              >
                <strength.icon
                  size={16}
                  className="text-primary group-hover:scale-110 transition-transform"
                />
                <p className="font-body text-sm font-medium text-secondary-foreground/90">{strength.name}</p>
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
