import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

interface RadialSkillsDiagramProps {
  skills: Skill[];
  centerLabel: string;
}

const RadialSkillsDiagram = ({ skills, centerLabel }: RadialSkillsDiagramProps) => {
  const count = skills.length;
  const radius = 38; // percentage from center

  const getPosition = (i: number) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    return {
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  };

  return (
    <div className="relative w-[340px] h-[340px] md:w-[560px] md:h-[560px] mx-auto">
      {/* SVG connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
        {skills.map((_, i) => {
          const { x, y } = getPosition(i);
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="hsl(42 55% 54% / 0.18)"
              strokeWidth="0.3"
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40 rounded-full flex items-center justify-center z-10"
        style={{
          background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
          boxShadow: "0 0 60px hsl(var(--gold) / 0.3)",
        }}
      >
        <span
          className="font-display text-[0.8rem] md:text-[1.1rem] font-bold tracking-[0.12em] uppercase leading-tight text-center"
          style={{ color: "hsl(var(--navy))" }}
          dangerouslySetInnerHTML={{ __html: centerLabel }}
        />
      </div>

      {/* Skill nodes — translate so the CIRCLE center sits at the computed point */}
      {skills.map((skill, i) => {
        const { x, y } = getPosition(i);

        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="absolute flex flex-col items-center gap-1.5"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="w-14 h-14 md:w-[4.2rem] md:h-[4.2rem] rounded-full flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
              style={{
                background: "hsl(var(--navy-light))",
                border: "1px solid hsl(var(--gold) / 0.4)",
              }}
            >
              {skill.icon}
            </div>
            <span className="font-body text-[0.6rem] md:text-[0.75rem] text-muted-foreground text-center leading-tight max-w-[90px]">
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default RadialSkillsDiagram;
