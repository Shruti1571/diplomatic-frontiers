import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useRef } from "react";

const members = [
  { name: "Arjun Patel", role: "Founder & President" },
  { name: "Sneha Verma", role: "Vice President" },
  { name: "Rohan Desai", role: "Head of Operations" },
  { name: "Kavya Nair", role: "Director of Events" },
  { name: "Aditya Sharma", role: "Head of PR" },
  { name: "Ishita Gupta", role: "Creative Director" },
];

const CommunitySection = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-4"
        >
          Be a Part of the Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground font-body mb-12 max-w-2xl mx-auto"
        >
          Meet the passionate individuals driving YANF's mission forward. Together, we're building the future.
        </motion.p>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[180px] snap-center flex flex-col items-center p-6 rounded-xl border border-border bg-card hover:gold-glow transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 border border-border">
                <User className="h-10 w-10 text-primary/60" />
              </div>
              <p className="font-display font-semibold text-foreground text-sm">{m.name}</p>
              <p className="text-muted-foreground text-xs font-body mt-1">{m.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={onJoinClick}
          className="mt-10 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity gold-glow"
        >
          Join Our Community
        </motion.button>
      </div>
    </section>
  );
};

export default CommunitySection;
