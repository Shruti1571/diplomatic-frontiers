import { motion } from "framer-motion";

const WhyUsSection = () => (
  <section className="section-padding bg-velvet relative">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-8"
      >
        Why Us?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-velvet-foreground/80 font-body text-lg leading-relaxed"
      >
        At YANF, we don't just host events—we craft transformative experiences. Our conferences are led by seasoned diplomats, award-winning debaters, and academic professionals who bring real-world expertise to every session. We believe in quality over quantity; each event is meticulously designed to challenge perspectives, build confidence, and forge lasting connections. From our rigorous committee simulations to our innovative assembly formats, YANF stands apart as a platform where students don't just participate—they evolve. With a track record of excellence and a community that spans across cities, YANF is where tomorrow's leaders begin their journey today.
      </motion.p>
    </div>
  </section>
);

export default WhyUsSection;
