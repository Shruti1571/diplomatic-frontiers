import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const CounterCard = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = Math.max(1, Math.floor(target / 60));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { setCount(target); clearInterval(interval); }
          else setCount(current);
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex-1 min-w-[200px] text-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur gold-glow">
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">{count}{suffix}</div>
      <p className="text-muted-foreground text-sm mt-2 font-body">{label}</p>
    </div>
  );
};

// Floating particles animation
const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/40"
    initial={{ opacity: 0, y: "100%", x: Math.random() * 100 + "%" }}
    animate={{ opacity: [0, 1, 1, 0], y: [100, -500], x: [Math.random() * 100 + "%", (Math.random() * 100) + "%"] }}
    transition={{ duration: 8 + Math.random() * 4, delay, repeat: Infinity, ease: "linear" }}
  />
);

const HeroSection = ({ onJoinClick }: { onJoinClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          <span className="text-gradient-gold">Youth As Nation's Front</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground/70 font-body max-w-2xl mx-auto mb-10"
        >
          Empowering the next generation with diplomatic mindset, leadership excellence, and a global perspective.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={onJoinClick}
          className="px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity gold-glow"
        >
          Join Us
        </motion.button>
      </div>

      {/* Counter Cards */}
      <div className="relative z-10 w-full max-w-5xl px-6 mt-16 mb-8">
        <div className="flex flex-wrap gap-6 justify-center">
          <CounterCard target={100} suffix="+" label="Events Conducted" />
          <CounterCard target={10} suffix="K+" label="Students Participated" />
          <CounterCard target={50} suffix="+" label="Highly Qualified Chairs" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
