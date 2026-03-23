import { motion } from "framer-motion";
import { useState } from "react";

const members = [
  { name: "Aditya Kumar", role: "Founder", emoji: "👤" },
  { name: "Priya Sharma", role: "Co-Founder", emoji: "👤" },
];

const CommunitySection = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const [idx, setIdx] = useState(0);

  const slide = (dir: number) => {
    const max = Math.max(0, members.length - 5);
    setIdx((prev) => Math.max(0, Math.min(prev + dir, max)));
  };

  return (
    <section id="community" className="section-padding"
      style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto mb-14 text-center"
      >
        <div className="section-label text-center">Our People</div>
        <h2 className="section-title text-center">Be a Part of a <span>Thriving Community</span></h2>
        <div className="gold-line mx-auto mb-6" />
        <p className="font-serif text-lg italic text-muted-foreground max-w-[600px] mx-auto">
          Meet the faces behind the movement — students, chairs, mentors, and visionaries united by a shared purpose.
        </p>
      </motion.div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto relative overflow-hidden"
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${idx * (100 / 5 + 1)}%)`,
            transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          {members.map((m) => (
            <div key={m.name} className="flex-shrink-0 mr-5 text-center group" style={{ minWidth: "calc(20% - 1rem)" }}>
              <div
                className="w-full aspect-square flex items-center justify-center text-4xl mb-3 relative overflow-hidden transition-all"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--navy-light)), hsl(var(--gold) / 0.15))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                {m.emoji}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(to top, hsl(var(--gold) / 0.1), transparent)" }}
                />
              </div>
              <div className="font-display text-[0.72rem] font-semibold text-primary tracking-[0.1em] mb-0.5">{m.name}</div>
              <div className="text-[0.65rem] text-muted-foreground tracking-[0.1em] font-body">{m.role}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-3 mt-8 justify-center">
          <button
            onClick={() => slide(-1)}
            className="w-[42px] h-[42px] flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background transition-all cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={() => slide(1)}
            className="w-[42px] h-[42px] flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background transition-all cursor-pointer"
          >
            →
          </button>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <p className="font-serif text-xl italic text-cream-soft opacity-70 mb-6">
          Ready to make your mark on history?
        </p>
        <button onClick={onJoinClick} className="btn-primary-yanf">Join the Community</button>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
