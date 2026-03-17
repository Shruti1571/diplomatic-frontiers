import { motion } from "framer-motion";
import yanfLogo from "@/assets/yanf-logo.png";

const AboutSection = () => (
  <section id="about" className="section-padding" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))", borderBottom: "1px solid hsl(var(--border))" }}>
    <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
      {/* Logo Ring */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center"
      >
        <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] flex items-center justify-center">
          <img src={yanfLogo} alt="YANF Logo" className="w-full h-full object-contain" />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-label">Who We Are</div>
        <h2 className="section-title">About <span>YANF</span></h2>
        <div className="gold-line mb-8" />
        <p className="font-serif text-lg text-cream-soft leading-[1.85] opacity-90 mb-6">
          At YANF, we believe that the future is not something to be awaited, it is something to be built.
        </p>
        <p className="font-serif text-lg text-cream-soft leading-[1.85] opacity-90 mb-6">
          Founded by leaders with over a decade of experience in youth development, YANF was established with a singular vision — to empower the new generation with the mindset, skills, and confidence to lead in an ever-evolving global landscape.
        </p>
        <p className="font-serif text-lg text-cream-soft leading-[1.85] opacity-90 mb-6">
          We are committed to nurturing entrepreneurial thinking, fostering innovation, and cultivating a strong sense of diplomacy among students. Through our initiatives, we aim to equip young minds not only to create opportunities for themselves but to design meaningful solutions for the challenges of tomorrow.
        </p>
        <p className="font-serif text-lg text-cream-soft leading-[1.85] opacity-90 mb-6">
          At our core, YANF stands for collaboration, leadership, and impact. We strive to develop individuals who can think critically, negotiate effectively, and represent their ideas with clarity and conviction — whether on a local stage or a global platform.
        </p>
        <p className="font-serif text-lg text-cream-soft leading-[1.85] opacity-90 mb-6">
          As we embark on this journey, we invite you to be a part of a movement that goes beyond learning — a movement that builds leaders, inspires change, and shapes the future.
        </p>
        <p className="font-serif text-lg text-cream-soft leading-[1.85] opacity-90 italic">
          Welcome to a community where ideas transform into action, and potential turns into impact.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
