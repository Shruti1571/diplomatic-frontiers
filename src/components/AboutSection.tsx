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
          YANF — Youth As Nation's Front — is a premier educational platform dedicated to cultivating the diplomatic mindset, leadership acumen, and geopolitical awareness of India's next generation.
        </p>
        <p className="font-serif text-lg text-cream-soft leading-[1.85] opacity-90 mb-8">
          Founded on the belief that today's youth are tomorrow's nation-builders, YANF creates immersive environments where young minds learn to debate, deliberate, and lead with confidence and conviction.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "For Whom", value: "Students aged 13–25" },
            { label: "Founded", value: "2026, India" },
            { label: "Focus", value: "Diplomacy & Leadership" },
            { label: "Mode", value: "Events, Workshops & Summits" },
          ].map((f) => (
            <div key={f.label} className="border-l-2 border-primary pl-4">
              <div className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-primary mb-1 font-body">{f.label}</div>
              <div className="font-serif text-[0.95rem] text-cream-soft">{f.value}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
