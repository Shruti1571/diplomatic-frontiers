import { motion } from "framer-motion";
import yanfLogo from "@/assets/yanf-logo.jpeg";

const AboutSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex justify-center"
      >
        <img src={yanfLogo} alt="YANF Logo" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover gold-border gold-glow" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">About YANF</h2>
        <p className="text-foreground/70 font-body leading-relaxed">
          Youth As Nation's Front (YANF) is a premier platform dedicated to nurturing future leaders, diplomats, and change-makers. Founded in 2026, we provide students with immersive experiences in Model United Nations, parliamentary debates, and innovation assemblies.
        </p>
        <p className="text-foreground/70 font-body leading-relaxed">
          Our mission is to create a generation that understands geopolitics, speaks with confidence, and leads with integrity. Through our carefully curated events, we bridge the gap between academic knowledge and real-world diplomatic skills.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
