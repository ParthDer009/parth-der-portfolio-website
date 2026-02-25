import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Instagram, Github, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_ACCESS_KEY = "64b97dc1-92ca-4132-841d-6e16abf2b1c4";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:parth@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/parth-der-6760a63b3/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/parth_der09/" },
  { icon: Github, label: "GitHub", href: "https://github.com/ParthDer009" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Portfolio Contact from ${formData.name}`,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Contact</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              I'm always open to conversations about technology, data analysis, opportunities, and collaboration. Feel free to reach out!
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-body text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-secondary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>Sending... <Loader2 size={16} className="animate-spin" /></>
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
