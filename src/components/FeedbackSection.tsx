import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  { initial: "A", name: "Ambassador Rajiv Nair", role: "Former Diplomat, Ministry of External Affairs", quote: "YANF represents exactly the kind of youth initiative India needs. Their MUN conferences produced some of the most articulate young delegates I have ever had the privilege of witnessing." },
  { initial: "P", name: "Prof. Meera Chandrashekhar", role: "Dean of Political Science, Delhi University", quote: "The depth of preparation and intellectual rigour that YANF brings to their debates is remarkable. These students demonstrate a level of geopolitical awareness that rivals university graduates." },
  { initial: "S", name: "Siddharth Agarwal", role: "CEO, StartupIndia Foundation", quote: "We partnered with YANF for the Innovation Assembly and were astounded by the quality of solutions presented. This organisation is building India's future problem-solvers." },
  { initial: "N", name: "Nandita Rao", role: "Principal, Springfields International School", quote: "YANF's Youth Parliament gave our students an experience no classroom could replicate. The confidence and clarity they developed in just one event was transformational." },
  { initial: "R", name: "Dr. Rohan Kapoor", role: "Director, Centre for Strategic Studies", quote: "The calibre of research and argumentation at YANF events is exceptional. These young minds are already contributing meaningfully to policy discourse in India." },
  { initial: "D", name: "Deepika Sharma", role: "Education Advisor, NITI Aayog", quote: "YANF bridges the gap between textbook knowledge and real-world diplomacy. Their model parliament sessions are among the best-structured youth programmes I've seen." },
  { initial: "V", name: "Vikram Malhotra", role: "Head of CSR, Tata Trusts", quote: "Investing in YANF was one of our best decisions. The organisation has a remarkable ability to identify and nurture leadership potential in young Indians from diverse backgrounds." },
  { initial: "K", name: "Dr. Kavita Menon", role: "Professor of International Relations, JNU", quote: "I was invited as a jury member and was thoroughly impressed. The students' understanding of multilateral diplomacy and conflict resolution was far beyond their years." },
];

const FeedbackSection = () => {
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const maxIdx = Math.max(0, testimonials.length - 3);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIdx((prev) => (prev >= maxIdx ? 0 : prev + 1));
    }, 3500);
  }, [maxIdx]);

  useEffect(() => {
    if (!isPaused) startAutoSlide();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused, startAutoSlide]);

  const slide = (dir: number) => {
    setIdx((prev) => {
      const next = prev + dir;
      return next < 0 ? maxIdx : next > maxIdx ? 0 : next;
    });
    // Reset auto-slide timer on manual interaction
    startAutoSlide();
  };

  return (
    <section id="testimonials" className="section-padding"
      style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto mb-14"
      >
        <div className="section-label">What Leaders Say</div>
        <h2 className="section-title">Voices of <span>Authority</span></h2>
        <div className="gold-line" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${idx * (100 / 3 + 1.5)}%)`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex-shrink-0 mr-6 p-10"
              style={{
                minWidth: "calc(33.33% - 1rem)",
                background: "hsl(var(--navy-light))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <div className="absolute top-4 right-6 font-serif text-[5rem] leading-none pointer-events-none" style={{ color: "hsl(var(--gold) / 0.12)" }}>
                &ldquo;
              </div>
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-display text-lg font-bold mb-5"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--crimson)))",
                  color: "hsl(var(--navy))",
                  border: "2px solid hsl(var(--gold) / 0.3)",
                }}
              >
                {t.initial}
              </div>
              <p className="font-serif text-base italic leading-[1.8] text-cream-soft opacity-85 mb-6">
                {t.quote}
              </p>
              <div className="font-display text-[0.78rem] font-semibold text-primary tracking-[0.1em]">{t.name}</div>
              <div className="text-[0.7rem] text-muted-foreground tracking-[0.08em] mt-1 font-body">{t.role}</div>
            </div>
          ))}
        </div>

        {/* Dot indicators + controls */}
        <div className="flex gap-3 mt-8 justify-center items-center">
          <button
            onClick={() => slide(-1)}
            className="w-[42px] h-[42px] flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background transition-all cursor-pointer text-base"
          >
            ←
          </button>
          <div className="flex gap-1.5 mx-2">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setIdx(i); startAutoSlide(); }}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === idx ? "hsl(var(--gold))" : "hsl(var(--gold) / 0.2)",
                  transform: i === idx ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => slide(1)}
            className="w-[42px] h-[42px] flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-background transition-all cursor-pointer text-base"
          >
            →
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default FeedbackSection;
