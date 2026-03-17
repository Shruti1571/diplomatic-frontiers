import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  { name: "Ambassador Rajiv Nair", role: "Former Diplomat, Ministry of External Affairs", quote: "YANF represents exactly the kind of youth initiative India needs. Their MUN conferences produced some of the most articulate young delegates I have ever had the privilege of witnessing." },
  { name: "Prof. Sarah Whitfield", role: "Chair, Department of International Relations, Oxford", quote: "The caliber of students YANF produces is remarkable. They arrive at our institutions already equipped with the analytical framework most graduates lack." },
  { name: "Ambassador R.K. Sharma", role: "Former Indian Ambassador to the United Nations", quote: "We have partnered with YANF for three consecutive summits. Their organizational excellence and commitment to academic integrity sets a national benchmark." },
  { name: "Dr. Priya Venkatesh", role: "Principal, Delhi International Academy", quote: "YANF's ability to engage with complex geopolitical issues while maintaining an extraordinary level of professionalism is truly commendable." },
  { name: "Prof. Meera Chandrashekhar", role: "Dean of Political Science, Delhi University", quote: "The depth of preparation and intellectual rigour that YANF brings to their debates is remarkable. These students demonstrate a level of geopolitical awareness that rivals university graduates." },
  { name: "Siddharth Agarwal", role: "CEO, StartupIndia Foundation", quote: "We partnered with YANF for the Innovation Assembly and were astounded by the quality of solutions presented. This organisation is building India's future problem-solvers." },
  { name: "Nandita Rao", role: "Principal, Springfields International School", quote: "YANF's Youth Parliament gave our students an experience no classroom could replicate. The confidence and clarity they developed in just one event was transformational." },
  { name: "Dr. Rohan Kapoor", role: "Director, Centre for Strategic Studies", quote: "The calibre of research and argumentation at YANF events is exceptional. These young minds are already contributing meaningfully to policy discourse in India." },
  { name: "Deepika Sharma", role: "Education Advisor, NITI Aayog", quote: "YANF bridges the gap between textbook knowledge and real-world diplomacy. Their model parliament sessions are among the best-structured youth programmes I've seen." },
  { name: "Vikram Malhotra", role: "Head of CSR, Tata Trusts", quote: "Investing in YANF was one of our best decisions. The organisation has a remarkable ability to identify and nurture leadership potential in young Indians from diverse backgrounds." },
  { name: "Dr. Kavita Menon", role: "Professor of International Relations, JNU", quote: "I was invited as a jury member and was thoroughly impressed. The students' understanding of multilateral diplomacy and conflict resolution was far beyond their years." },
  { name: "Justice Arun Prakash", role: "Retired Judge, Supreme Court of India", quote: "YANF's commitment to nurturing democratic values among youth is precisely what our nation needs. Their parliamentary simulations are conducted with remarkable authenticity." },
];

const FeedbackSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const speedRef = useRef(0.4); // pixels per frame

  const animate = useCallback(() => {
    if (!trackRef.current) return;
    if (!isPaused) {
      posRef.current += speedRef.current;
      const totalWidth = trackRef.current.scrollWidth / 2;
      if (posRef.current >= totalWidth) {
        posRef.current -= totalWidth;
      }
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
    animRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [animate]);

  // Duplicate testimonials for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section-padding"
      style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto mb-4"
      >
        <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">
          What Leaders Say
        </p>
        <h2 className="font-display text-[2.8rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-[-0.02em] uppercase">
          <span className="text-foreground">Voices of </span>
          <span className="text-gold">Authority</span>
        </h2>
        <div className="w-16 h-[3px] bg-gold mt-5"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden mt-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: "1.5rem" }}
        >
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex-shrink-0 p-8 flex flex-col justify-between"
              style={{
                width: "420px",
                minHeight: "200px",
                background: "hsl(var(--navy-light))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <p className="font-serif text-[0.95rem] italic leading-[1.8] text-foreground opacity-80 mb-6">
                "{t.quote}"
              </p>
              <div>
                <div className="font-display text-sm font-semibold text-foreground tracking-[0.02em]">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1 font-body">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeedbackSection;
