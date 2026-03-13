import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const feedbacks = [
  { name: "Dr. Rajesh Kumar", role: "Director, National Youth Policy Forum", quote: "YANF has set a new benchmark for youth-led diplomatic initiatives. Their attention to detail and commitment to excellence is truly commendable." },
  { name: "Prof. Ananya Sharma", role: "Dean, School of International Relations", quote: "I've witnessed remarkable growth in students who participate in YANF events. The platform truly transforms young minds into confident leaders." },
  { name: "Ambassador Vikram Singh", role: "Former UN Delegate", quote: "The quality of debate and discourse at YANF events rivals that of many professional forums. These students are the future of global diplomacy." },
  { name: "Ms. Priya Mehta", role: "CEO, Youth Empowerment Foundation", quote: "Partnering with YANF has been one of our most impactful collaborations. Their vision for youth empowerment aligns perfectly with ours." },
];

const FeedbackSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-gradient-gold text-center mb-12"
        >
          What They Say
        </motion.h2>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {feedbacks.map((fb, i) => (
            <motion.div
              key={fb.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] flex-1 snap-center p-6 rounded-xl border border-border bg-card"
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="text-foreground/70 text-sm font-body italic leading-relaxed mb-6">"{fb.quote}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{fb.name}</p>
                <p className="text-muted-foreground text-xs font-body">{fb.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
