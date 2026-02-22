import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mx-auto">
            <img
              src={profileImg}
              alt="Parth Der"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-4"
        >
          Aspiring Data Analyst • Diploma in Computer Science
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
        >
          Parth Der
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-heading italic text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
        >
          "Building my future with code, ambition, and global vision."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#about"
            className="px-8 py-3.5 bg-secondary text-secondary-foreground font-body text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-secondary/90 transition-colors duration-300"
          >
            Explore My Journey
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border-2 border-secondary text-secondary font-body text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
          >
            Connect With Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
