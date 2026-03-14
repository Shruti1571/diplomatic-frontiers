import { useEffect, useRef } from "react";

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let animationId: number;
    let mouse = { x: -100, y: -100 };

    const points: { x: number; y: number; age: number; vx: number; vy: number }[] = [];
    const maxAge = 60;
    const spacing = 4;
    let lastX = -100;
    let lastY = -100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dx = mouse.x - lastX;
      const dy = mouse.y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > spacing) {
        points.push({
          x: mouse.x,
          y: mouse.y,
          age: 0,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
        });
        lastX = mouse.x;
        lastY = mouse.y;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.age++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        if (p.age > maxAge) {
          points.splice(i, 1);
          continue;
        }

        const life = 1 - p.age / maxAge;
        const radius = life * 6;
        const alpha = life * 0.6;

        // Gold glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3);
        gradient.addColorStop(0, `hsla(42, 78%, 55%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(42, 78%, 50%, ${alpha * 0.4})`);
        gradient.addColorStop(1, `hsla(42, 78%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(42, 85%, 70%, ${alpha * 0.8})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", onMouseMove);
    draw();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CursorTrail;
