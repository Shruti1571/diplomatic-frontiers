import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
}

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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let W: number, H: number;

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];

    const resize = () => {
      W = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      H = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initStars();
    };

    const initStars = () => {
      stars.length = 0;
      const cW = canvas.offsetWidth;
      const cH = canvas.offsetHeight;
      for (let i = 0; i < 350; i++) {
        stars.push({
          x: Math.random() * cW,
          y: Math.random() * cH,
          size: Math.random() * 1.8 + 0.3,
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.02 + 0.005,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const spawnShootingStar = () => {
      const cW = canvas.offsetWidth;
      const cH = canvas.offsetHeight;
      shootingStars.push({
        x: Math.random() * cW,
        y: Math.random() * cH * 0.4,
        len: Math.random() * 80 + 40,
        speed: Math.random() * 4 + 3,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 40 + 30,
      });
    };

    let frame = 0;
    const animate = () => {
      frame++;
      const cW = canvas.offsetWidth;
      const cH = canvas.offsetHeight;
      ctx.clearRect(0, 0, cW, cH);

      // Nebula glow
      const g1 = ctx.createRadialGradient(cW * 0.3, cH * 0.4, 0, cW * 0.3, cH * 0.4, cW * 0.5);
      g1.addColorStop(0, "rgba(90, 50, 140, 0.08)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, cW, cH);

      const g2 = ctx.createRadialGradient(cW * 0.7, cH * 0.6, 0, cW * 0.7, cH * 0.6, cW * 0.4);
      g2.addColorStop(0, "rgba(30, 60, 120, 0.06)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, cW, cH);

      // Stars
      for (const s of stars) {
        s.twinklePhase += s.twinkleSpeed;
        const flicker = 0.5 + 0.5 * Math.sin(s.twinklePhase);
        const alpha = s.opacity * flicker;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Glow for larger stars
        if (s.size > 1.2) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 180, 255, ${alpha * 0.1})`;
          ctx.fill();
        }
      }

      // Shooting stars
      if (frame % 120 === 0 && Math.random() > 0.4) spawnShootingStar();

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity = 1 - ss.life / ss.maxLife;

        const tailX = ss.x - Math.cos(ss.angle) * ss.len;
        const tailY = ss.y - Math.sin(ss.angle) * ss.len;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, `rgba(255, 255, 255, 0)`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (ss.life >= ss.maxLife) shootingStars.splice(i, 1);
      }

      animId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28">
      {/* Globe canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, rgba(10,14,26,0.3) 0%, rgba(10,14,26,0.75) 60%, rgba(10,14,26,0.97) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-8 max-w-[900px] animate-hero-fade-in">
        <div className="font-display text-[0.7rem] font-normal tracking-[0.35em] uppercase text-primary mb-6 opacity-85">
          Est. 2026 &nbsp;·&nbsp; Empowering India's Youth
        </div>
        <h1 className="font-display font-black leading-[0.95] text-white mb-2"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.01em" }}
        >
          <span className="text-primary">Y</span>OUTH <span className="text-primary">A</span>S<br />
          <span className="text-primary">N</span>ATION'S <span className="text-primary">F</span>RONT
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
