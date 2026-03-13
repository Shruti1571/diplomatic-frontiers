import { motion } from "framer-motion";
import missionBg from "@/assets/mission-vision-bg.jpeg";
import missionImg from "@/assets/mission-image.jpg";

const MissionVisionSection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Subtle accent bg */}
    <div className="absolute inset-0 opacity-5">
      <img src={missionBg} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-4">Our Mission</h2>
          <p className="text-foreground/70 font-body leading-relaxed">
            To empower youth with the tools of diplomacy, critical thinking, and leadership—creating a community of informed, articulate, and action-oriented individuals who shape the future of our nation and beyond.
          </p>
        </div>
        <div className="border-t border-border pt-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-4">Our Vision</h2>
          <p className="text-foreground/70 font-body leading-relaxed">
            A world where every young voice is heard, every student understands global affairs, and leadership is defined not by authority but by the courage to serve. We envision YANF as the largest youth-led diplomatic movement in the nation.
          </p>
        </div>
        <p className="text-sm italic text-primary/80 font-display">
          "कर्मण्येव अधिकारस्ते। — Your right is to action alone."
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-xl overflow-hidden gold-border gold-glow"
      >
        <img src={missionImg} alt="Mission and Vision" className="w-full h-[400px] object-cover" />
      </motion.div>
    </div>
  </section>
);

export default MissionVisionSection;
