import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const skills = [
  { name: "Public Speaking", icon: "🎤" },
  { name: "Research & Analysis", icon: "🔍" },
  { name: "Negotiation", icon: "🤝" },
  { name: "Critical Thinking", icon: "🧠" },
  { name: "Drafting & Writing", icon: "✍️" },
  { name: "Diplomacy", icon: "🕊️" },
  { name: "Leadership", icon: "👑" },
  { name: "Global Awareness", icon: "🌏" },
];

const unBodies = [
  { abbr: "UNSC", name: "UN Security Council", desc: "Peace & Security", url: "https://www.un.org/securitycouncil/" },
  { abbr: "UNHRC", name: "UN Human Rights Council", desc: "Human Rights", url: "https://www.ohchr.org/en/hrbodies/hrc" },
  { abbr: "WHO", name: "World Health Organization", desc: "Global Health", url: "https://www.who.int/" },
  { abbr: "UNGA", name: "UN General Assembly", desc: "Deliberative Body", url: "https://www.un.org/en/ga/" },
  { abbr: "ECOSOC", name: "Economic & Social Council", desc: "Development & Trade", url: "https://www.un.org/ecosoc/" },
  { abbr: "UN", name: "United Nations", desc: "Official Website", url: "https://www.un.org/" },
];

const howItWorks = [
  { phase: "Phase 1", title: "Preparation", desc: "Delegates are assigned a country and committee. They research their country's stance on the agenda topic and prepare a position paper outlining their policies and proposed solutions." },
  { phase: "Phase 2", title: "Debate & Negotiation", desc: "Delegates engage in structured debate sessions following the Rules of Procedure (RoP). They deliver speeches, form blocs, negotiate with allies, and lobby for support on their resolutions." },
  { phase: "Phase 3", title: "Resolution & Voting", desc: "Delegates collaboratively draft a resolution — a formal document proposing solutions. The committee then votes on the resolution, determining whether it passes or fails." },
];

const highlights = [
  { label: "Duration", value: "2 – 3 Days" },
  { label: "Suitable For", value: "Grade 7 onwards" },
  { label: "Formats", value: "Beginner, Intermediate & Advanced" },
  { label: "Awards", value: "Best Delegate, High Commendation, Verbal Mention, Best Position Paper" },
];

const MUNPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-16 text-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, hsl(var(--navy)) 0%, hsl(var(--navy2)) 100%)" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(var(--gold) / 0.2) 0%, transparent 60%)" }}
        />
        <motion.div {...fadeUp} className="relative z-10 max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary/70 hover:text-primary text-sm font-body mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="section-label">Events</div>
          <h1 className="font-display font-bold text-foreground leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            MUN <span className="text-gradient-gold">×</span> YANF
          </h1>
          <p className="font-display text-primary/80 text-lg italic tracking-wide">
            Simulate. Debate. Resolve.
          </p>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Step into the shoes of the world's diplomats.
          </p>
        </motion.div>
      </section>

      {/* What is MUN */}
      <section className="section-padding" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
          <div className="section-label">Understanding the Platform</div>
          <h2 className="section-title">What is <span>Model United Nations?</span></h2>
          <div className="gold-line mb-8" />
          <p className="font-body text-muted-foreground leading-[1.9] text-[1rem]">
            Model United Nations (MUN) is a globally recognised academic simulation of the United Nations where students
            represent countries, debate pressing international issues, and draft resolutions — just as real UN delegates do.
            It is one of the most powerful platforms for developing leadership, diplomacy, public speaking, and critical
            thinking in young minds. At YANF, MUN is not just an event — it is a transformative experience that challenges
            students to step beyond the classroom and engage with the world as it truly is.
          </p>
        </motion.div>
      </section>

      {/* Why MUN */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
          <div className="section-label">The Value Proposition</div>
          <h2 className="section-title">Why <span>Participate in MUN?</span></h2>
          <div className="gold-line mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "🎤", text: "Develop confident public speaking and articulation skills" },
              { icon: "🔬", text: "Learn to research, analyse, and present complex global issues" },
              { icon: "🤝", text: "Practice negotiation, persuasion, and consensus-building" },
              { icon: "🌍", text: "Build global awareness and cross-cultural empathy" },
              { icon: "🏆", text: "Earn recognition through awards like Best Delegate & Verbal Mention" },
              { icon: "📝", text: "The ability to write structured, policy-level documents" },
              { icon: "💬", text: "Confidence to speak in front of large audiences" },
              { icon: "🧠", text: "A sharper, more diplomatic way of thinking" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-sm transition-all hover:translate-x-1"
                style={{ background: "hsl(var(--navy-light))", border: "1px solid hsl(var(--border))" }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="font-body text-muted-foreground text-[0.95rem] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How it Works */}
      <section className="section-padding" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
          <div className="section-label">The Process</div>
          <h2 className="section-title">How it <span>Works</span></h2>
          <div className="gold-line mb-12" />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold)), hsl(var(--gold) / 0.1))" }} />

            <div className="space-y-10">
              {howItWorks.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Circle */}
                  <div className="absolute left-3 md:left-5 top-1 w-7 h-7 rounded-full flex items-center justify-center text-[0.7rem] font-bold font-display"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
                      color: "hsl(var(--navy))",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="p-6 rounded-sm" style={{ background: "hsl(var(--navy-light))", border: "1px solid hsl(var(--border))" }}>
                    <div className="font-display text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-primary mb-1">{phase.phase}</div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{phase.title}</h3>
                    <p className="font-body text-muted-foreground text-[0.95rem] leading-[1.8]">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Diagram */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto text-center">
          <div className="section-label">What You'll Develop</div>
          <h2 className="section-title">Skills <span>Required</span></h2>
          <div className="gold-line mx-auto mb-14" />

          {/* Radial skill layout */}
          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] mx-auto">
            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center z-10"
              style={{
                background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
                boxShadow: "0 0 60px hsl(var(--gold) / 0.3)",
              }}
            >
              <span className="font-display text-[0.8rem] md:text-[0.9rem] font-bold tracking-[0.1em] uppercase" style={{ color: "hsl(var(--navy))" }}>
                MUN<br/>Skills
              </span>
            </div>

            {/* Skill nodes */}
            {skills.map((skill, i) => {
              const angle = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 42; // percentage
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl md:text-2xl"
                    style={{ background: "hsl(var(--navy-light))", border: "1px solid hsl(var(--gold) / 0.4)" }}
                  >
                    {skill.icon}
                  </div>
                  <span className="font-body text-[0.6rem] md:text-[0.65rem] text-muted-foreground text-center leading-tight max-w-[80px]">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}

            {/* Connecting lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
              {skills.map((_, i) => {
                const angle = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 42;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <line key={i} x1="50" y1="50" x2={x} y2={y}
                    stroke="hsl(42 55% 54% / 0.15)" strokeWidth="0.3"
                  />
                );
              })}
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Event Highlights */}
      <section className="section-padding" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
          <div className="section-label">At a Glance</div>
          <h2 className="section-title">Event <span>Highlights</span></h2>
          <div className="gold-line mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-sm"
                style={{ background: "hsl(var(--navy-light))", border: "1px solid hsl(var(--border))" }}
              >
                <div className="font-display text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-primary mb-2">{h.label}</div>
                <p className="font-body text-foreground text-[1rem]">{h.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Explore UN Bodies */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[1000px] mx-auto">
          <div className="section-label">Explore the Real United Nations</div>
          <h2 className="section-title">UN <span>Bodies</span></h2>
          <div className="gold-line mb-4" />
          <p className="font-body text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Before your committee session, explore the official websites of the UN bodies you will be simulating.
            Understanding how these organisations actually work will give you a powerful edge in debate.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {unBodies.map((body, i) => (
              <motion.a
                key={body.abbr}
                href={body.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
                style={{ background: "hsl(var(--navy-light))", border: "1px solid hsl(var(--border))" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))" }}
                />
                <div className="font-display text-2xl font-bold text-primary mb-1">{body.abbr}</div>
                <div className="font-body text-foreground text-[0.85rem] font-medium mb-1">{body.name}</div>
                <div className="font-body text-muted-foreground text-[0.8rem]">{body.desc}</div>
                <div className="mt-4 font-body text-[0.7rem] tracking-[0.12em] uppercase text-primary/60 group-hover:text-primary transition-colors">
                  Visit Website →
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-lg mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to represent your <span className="text-gradient-gold">nation</span>?
          </h2>
          <p className="font-body text-muted-foreground mb-8">Register for YANF MUN today.</p>
          <Link to="/" className="btn-primary-yanf inline-block">
            Back to Home
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default MUNPage;
