import { motion } from "framer-motion";
import { Globe, MessageSquare, Landmark, Lightbulb } from "lucide-react";
import { useRef } from "react";

const events = [
  { icon: Globe, title: "Model United Nations", desc: "Simulate UN committees, draft resolutions, and debate global policies in an immersive diplomatic environment." },
  { icon: MessageSquare, title: "Debates", desc: "Sharpen your argumentation and oratory skills through structured parliamentary and competitive debate formats." },
  { icon: Landmark, title: "Youth Parliament", desc: "Experience the workings of legislative bodies, propose bills, and engage in democratic decision-making." },
  { icon: Lightbulb, title: "Innovation Assembly", desc: "Present breakthrough ideas, collaborate with peers, and tackle real-world challenges through creative solutions." },
];

const EventsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gradient-gold text-center mb-12"
        >
          Our Events
        </motion.h2>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="min-w-[280px] flex-1 snap-center p-6 rounded-xl border border-border bg-card gold-glow hover:border-primary/40 transition-colors"
            >
              <event.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{event.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
