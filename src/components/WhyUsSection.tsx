import { motion } from "framer-motion";

const whyItems = [
  { icon: "🏛️", title: "Expert-Led Programs", text: "Our events are guided by 50+ highly qualified chairs with backgrounds in law, policy, and international affairs." },
  { icon: "🌐", title: "Real-World Simulations", text: "From UN committees to parliamentary debates, we replicate the world's most consequential forums for students to navigate." },
  { icon: "💡", title: "Innovation Assembly", text: "Our flagship innovation program empowers students to ideate, prototype, and pitch real-world solutions, bridging creativity with impact." },
  { icon: "📜", title: "Recognized Certifications", text: "Earn certificates of excellence that are valued by universities, internships, and professional bodies across India." },
  { icon: "⚡", title: "Confidence Building", text: "We create safe spaces where every voice matters — building the courage to ask hard questions and lead with clarity." },
  { icon: "🗺️", title: "Geopolitical Literacy", text: "Our curriculum brings global issues into focus, giving students the context to understand the world shaping their futures." },
];

const WhyUsSection = () => (
  <section id="why-us" className="section-padding relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #0e0618 0%, #12080a 50%, #0a0c18 100%)" }}
  >
    {/* Radial accent overlays */}
    <div className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(139,26,26,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)
        `,
      }}
    />

    {/* Center text */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10 max-w-[900px] mx-auto text-center mb-14"
    >
      <div className="section-label text-center">Our Distinction</div>
      <h2 className="section-title text-center">Why Choose <span>YANF?</span></h2>
      <div className="gold-line mx-auto mb-8" />
      <p className="font-serif text-[1.2rem] font-normal leading-[1.9] text-cream-soft opacity-85">
        At YANF, we don't just simulate diplomacy — we ignite it. Our curated programs are designed by seasoned chairs, educators, and policy thinkers who believe that real change begins when young minds are challenged, heard, and inspired. We bridge the gap between classroom theory and the realities of a complex world, crafting experiences that are as intellectually rigorous as they are personally transformative.
      </p>
    </motion.div>

    {/* Grid */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-[1px] max-w-[1100px] mx-auto"
      style={{ background: "hsl(var(--border))" }}
    >
      {whyItems.map((item) => (
        <div
          key={item.title}
          className="relative overflow-hidden text-center py-10 px-8 transition-colors hover:bg-primary/[0.05] group"
          style={{ background: "rgba(10,14,26,0.9)" }}
        >
          <div className="absolute bottom-0 left-[20%] right-[20%] h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
          />
          <div className="text-3xl mb-4">{item.icon}</div>
          <div className="font-display text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-primary mb-3">{item.title}</div>
          <p className="font-serif text-[0.95rem] leading-[1.7] text-muted-foreground">{item.text}</p>
        </div>
      ))}
    </motion.div>
  </section>
);

export default WhyUsSection;
