import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Floating decorative orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-[15%] w-64 h-64 rounded-full bg-primary/8 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 left-[10%] w-80 h-80 rounded-full bg-primary/6 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] left-[60%] w-40 h-40 rounded-full bg-caramel-light/10 blur-2xl"
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/20 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/20 hidden md:block" />

      <div className="container mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center relative z-10">
        {/* Profile image with layered ring effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 relative"
        >
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
          />
          {/* Static accent ring */}
          <div className="absolute -inset-2 rounded-full border border-primary/10" />
          
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.3)] ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
            <img
              src={profileImg}
              alt="Parth Der"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-body font-semibold px-3 py-1.5 rounded-full shadow-lg"
          >
            CS Student
          </motion.div>
        </motion.div>

        {/* Subtitle with decorative lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-4 mb-5"
        >
          <span className="h-px w-8 md:w-12 bg-primary/40" />
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-primary font-body font-medium">
            Aspiring Data Analyst • Diploma in Computer Science
          </p>
          <span className="h-px w-8 md:w-12 bg-primary/40" />
        </motion.div>

        {/* Name with staggered letter reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-3 leading-[0.9] tracking-tight"
        >
          Parth{" "}
          <span className="text-gradient-caramel">Der</span>
        </motion.h1>

        {/* Decorative underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-8 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-heading italic text-lg md:text-xl text-muted-foreground max-w-lg mb-12"
        >
          "Building my future with code, ambition, and global vision."
        </motion.p>

        {/* CTA buttons with refined styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#about"
            className="group relative px-10 py-4 bg-secondary text-secondary-foreground font-body text-sm font-semibold tracking-wider uppercase rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(var(--secondary)/0.5)]"
          >
            <span className="relative z-10">Explore My Journey</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="group px-10 py-4 border-2 border-secondary text-secondary font-body text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_10px_30px_-10px_hsl(var(--secondary)/0.3)]"
          >
            Connect With Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
