import { motion } from "framer-motion";

const SunIcon = () => (
  <svg className="w-20 h-20 mb-8 text-primary" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="18" fill="currentColor" opacity="0.9" />
    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
      <line x1="50" y1="5" x2="50" y2="20" />
      <line x1="50" y1="80" x2="50" y2="95" />
      <line x1="5" y1="50" x2="20" y2="50" />
      <line x1="80" y1="50" x2="95" y2="50" />
      <line x1="18.9" y1="18.9" x2="29.4" y2="29.4" />
      <line x1="70.6" y1="70.6" x2="81.1" y2="81.1" />
      <line x1="81.1" y1="18.9" x2="70.6" y2="29.4" />
      <line x1="29.4" y1="70.6" x2="18.9" y2="81.1" />
    </g>
  </svg>
);

const MissionVisionSection = () => (
  <section id="mission" className="section-padding relative overflow-hidden" style={{ background: "hsl(var(--navy))" }}>
    <div className="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-label">Our Purpose</div>
        <h2 className="section-title">Mission &amp;<br /><span>Vision</span></h2>
        <div className="gold-line mb-8" />

        <div className="flex flex-col gap-6">
          {/* Mission Card */}
          <div className="relative overflow-hidden p-8 pl-7"
            style={{ background: "rgba(13,18,36,0.8)", border: "1px solid hsl(var(--border))" }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: "linear-gradient(180deg, hsl(var(--gold)), hsl(var(--crimson)))" }}
            />
            <div className="font-display text-[0.85rem] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Our Mission</div>
            <p className="font-body text-base leading-[1.75] text-cream-soft opacity-85">
              To transform students into future-ready, responsible citizens who lead with clarity, speak with confidence, and act with purpose, fostering entrepreneurship, diplomacy, and the courage to ask the questions that drive real change.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative overflow-hidden p-8 pl-7"
            style={{ background: "rgba(13,18,36,0.8)", border: "1px solid hsl(var(--border))" }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: "linear-gradient(180deg, hsl(var(--gold)), hsl(var(--crimson)))" }}
            />
            <div className="font-display text-[0.85rem] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Our Vision</div>
            <p className="font-body text-base leading-[1.75] text-cream-soft opacity-85">
              A world where every young person is aware, empowered, and equipped, ready to raise their voice, take their place, and lead with responsibility on any stage, local or global.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Crimson Image Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative h-[560px] rounded overflow-hidden"
      >
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 60%, rgba(139,26,26,0.9), rgba(90,14,14,0.97)),
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)
            `,
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
          <SunIcon />
          <div className="font-serif text-[1.6rem] font-semibold tracking-[0.05em] mb-3" style={{ color: "hsl(var(--gold-pale))" }}>
            कर्मण्येव अधिकारस्ते।
          </div>
          <div className="font-serif text-base italic tracking-[0.08em]" style={{ color: "hsl(var(--gold-pale) / 0.75)" }}>
            Your right is to action alone.
          </div>
          <div className="w-10 h-[1px] my-8 opacity-40" style={{ background: "hsl(var(--gold))" }} />
          <div className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase" style={{ color: "hsl(var(--gold-pale) / 0.5)" }}>
            The Bhagavad Gita · Chapter 2, Verse 47
          </div>
          <div className="w-10 h-[1px] my-8 opacity-40" style={{ background: "hsl(var(--gold))" }} />
          <div className="font-serif text-[0.9rem] italic leading-[1.8] max-w-[280px]" style={{ color: "hsl(var(--gold-pale) / 0.6)" }}>
            "Act without attachment to results. This is the highest form of leadership."
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MissionVisionSection;
