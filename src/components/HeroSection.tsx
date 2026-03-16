import { useEffect, useRef, useState } from "react";
import GalaxyBackground from "./GalaxyBackground";

const CounterCard = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = target / 80;
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { setCount(target); clearInterval(interval); }
          else setCount(Math.floor(current));
        }, 20);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = target >= 1000
    ? (count / 1000).toFixed(count >= target ? 0 : 1) + "k+"
    : count + "+";

  return (
    <div ref={ref} className="flex-1 text-center py-7 px-6 relative overflow-hidden"
      style={{
        background: "rgba(13,18,36,0.8)",
        border: "1px solid hsl(var(--border))",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
      />
      <div className="font-display text-4xl font-bold text-primary leading-none mb-1.5">
        {display}
      </div>
      <div className="text-[0.72rem] font-medium tracking-[0.15em] uppercase text-muted-foreground leading-snug font-body"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
};

const HeroSection = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28">
      <GalaxyBackground />

      {/* Subtle edge fade */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, hsl(222, 40%, 5%) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-8 max-w-[900px] animate-hero-fade-in">
        <div className="font-display text-[0.7rem] font-normal tracking-[0.35em] uppercase text-primary mb-6 opacity-85">
          Est. 2026 &nbsp;·&nbsp; Empowering India's Youth
        </div>
        <h1 className="font-display font-black leading-[0.95] text-white mb-2"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.01em" }}
        >
          <span className="text-primary">The</span> Architecture<br />
          of <span className="text-primary">Influence</span>
        </h1>
        <p className="font-serif italic text-cream-soft tracking-[0.05em] mb-10 opacity-85"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", fontWeight: 300 }}
        >
          Shaping tomorrow's diplomats, leaders &amp; changemakers
        </p>
        <p className="font-body text-[0.8rem] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-10">
          MUNs · Debates · Youth Parliament · Innovation Assembly
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={onJoinClick} className="btn-primary-yanf">Join the Movement</button>
          <button onClick={scrollToAbout} className="btn-outline-yanf">Discover YANF</button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="relative z-[2] w-full max-w-[900px] px-8 mt-16 mb-8 flex gap-[1px]"
        style={{ animation: "heroFadeIn 1.8s ease forwards" }}
      >
        <CounterCard target={100} label="Events Conducted<br/>& Growing" />
        <CounterCard target={10000} label="Students Who<br/>Participated" />
        <CounterCard target={50} label="Highly Qualified<br/>Chairs" />
      </div>
    </section>
  );
};

export default HeroSection;
