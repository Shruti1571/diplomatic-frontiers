import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadialSkillsDiagram from "@/components/RadialSkillsDiagram";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const whyDebate = [
  { icon: "🎯", text: "Master the art of structured argumentation and rebuttal" },
  { icon: "🧠", text: "Think critically and respond to opposing views in real time" },
  { icon: "🎤", text: "Develop confident, persuasive, and articulate communication" },
  { icon: "⚡", text: "Learn to construct logical, evidence-based arguments under pressure" },
  { icon: "💼", text: "Build the skills to speak effectively in any professional or academic setting" },
];

const gains = [
  { name: "Argumentation", icon: "⚔️" },
  { name: "Rapid Response", icon: "⚡" },
  { name: "Logical Thinking", icon: "🧠" },
  { name: "Persuasion", icon: "🎯" },
  { name: "Communication", icon: "💬" },
  { name: "Confidence", icon: "🔥" },
  { name: "Analytical Reasoning", icon: "🔍" },
  { name: "Professional Speaking", icon: "🎤" },
];

const formats = [
  {
    phase: "Format 1",
    title: "Asian Parliamentary (AP)",
    desc: "One of the most widely practiced debate formats across Asia, the AP format involves two teams of three — the Government (proposition) and the Opposition. Each speaker delivers a structured speech defending or opposing the motion, followed by Points of Information (POIs) and a reply speech that summarises the debate.",
    details: ["Teams: 2 (Government vs Opposition)", "Speakers per team: 3 + 1 Reply Speaker", "Speech duration: 7 min (constructive), 4 min (reply)", "POIs: Between 1st and 6th minute of constructive speeches"],
  },
  {
    phase: "Format 2",
    title: "British Parliamentary (BP)",
    desc: "Considered one of the most intellectually demanding debate formats in the world, BP involves four teams of two competing simultaneously — Opening Government, Opening Opposition, Closing Government, and Closing Opposition. Each team must independently advance their own case while also responding to all other teams.",
    details: ["Teams: 4 (two government, two opposition benches)", "Speakers per team: 2", "Speech duration: 7 minutes each", "POIs: Between 1st and 6th minute", "Winner: Ranked 1st to 4th by adjudication panel"],
  },
];

const highlights = [
  { label: "Duration", value: "1 – 2 Days" },
  { label: "Suitable For", value: "Grade 8 onwards" },
  { label: "Formats", value: "Asian Parliamentary & British Parliamentary" },
  { label: "Team Size", value: "AP: 3 per team | BP: 2 per team" },
  { label: "Awards", value: "Best Speaker, Best Team, Best Floor Speech" },
];

const resources = [
  { abbr: "WUDC", name: "World Universities Debating Championship", desc: "Global Debate Platform", url: "https://wudc.info/" },
  { abbr: "WSDC", name: "World Schools Debating Championship", desc: "Schools Debate Platform", url: "https://www.schoolsdebating.org/" },
  { abbr: "Asian BP", name: "Asian Parliamentary Debate Resources", desc: "Regional Debate Hub", url: "https://apda.online/" },
];

const DebatesPage = () => {
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
            Parliamentary Debates <span className="text-gradient-gold">×</span> YANF
          </h1>
          <p className="font-display text-primary/80 text-lg italic tracking-wide">
            Argue. Rebut. Persuade.
          </p>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Where the right argument, delivered at the right moment, wins.
          </p>
        </motion.div>
      </section>

      {/* What is Parliamentary Debate */}
      <section className="section-padding" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
          <div className="section-label">Understanding the Platform</div>
          <h2 className="section-title">What is <span>Parliamentary Debate?</span></h2>
          <div className="gold-line mb-8" />
          <p className="font-body text-muted-foreground leading-[1.9] text-[1rem]">
            Parliamentary Debate at YANF is not just a debate — it is a structured battlefield of ideas, logic, and rhetoric
            where young minds learn to argue with precision, think on their feet, and defend their stance with conviction.
            Unlike general debates, Parliamentary Debate follows internationally recognised formats that are practiced in
            academic and professional circles across the globe.
          </p>
        </motion.div>
      </section>

      {/* Why Parliamentary Debate */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
          <div className="section-label">The Value Proposition</div>
          <h2 className="section-title">Why <span>Parliamentary Debate?</span></h2>
          <div className="gold-line mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyDebate.map((item, i) => (
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

      {/* Formats We Follow */}
      <section className="section-padding" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
          <div className="section-label">The Formats</div>
          <h2 className="section-title">How it <span>Works</span></h2>
          <div className="gold-line mb-12" />

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold)), hsl(var(--gold) / 0.1))" }} />

            <div className="space-y-10">
              {formats.map((format, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-16 md:pl-20"
                >
                  <div className="absolute left-3 md:left-5 top-1 w-7 h-7 rounded-full flex items-center justify-center text-[0.7rem] font-bold font-display"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
                      color: "hsl(var(--navy))",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="p-6 rounded-sm" style={{ background: "hsl(var(--navy-light))", border: "1px solid hsl(var(--border))" }}>
                    <div className="font-display text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-primary mb-1">{format.phase}</div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{format.title}</h3>
                    <p className="font-body text-muted-foreground text-[0.95rem] leading-[1.8] mb-4">{format.desc}</p>
                    <ul className="space-y-1.5">
                      {format.details.map((d, j) => (
                        <li key={j} className="font-body text-muted-foreground text-[0.85rem] flex items-start gap-2">
                          <span className="text-primary mt-1">•</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* What Students Gain */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto text-center">
          <div className="section-label">What You'll Develop</div>
          <h2 className="section-title">What Students <span>Gain</span></h2>
          <div className="gold-line mx-auto mb-14" />

          <RadialSkillsDiagram skills={gains} centerLabel="Debate<br/>Skills" />
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

      {/* Explore Debate Resources */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[1000px] mx-auto">
          <div className="section-label">Explore Global Debate Platforms</div>
          <h2 className="section-title">Debate <span>Resources</span></h2>
          <div className="gold-line mb-4" />
          <p className="font-body text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Sharpen your debate skills by exploring these globally recognised debate organisations and resources.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((body, i) => (
              <motion.a
                key={body.abbr}
                href={body.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-6 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
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
            Think you can win the <span className="text-gradient-gold">floor</span>?
          </h2>
          <p className="font-body text-muted-foreground mb-8">Register for YANF Parliamentary Debates today.</p>
          <Link to="/" className="btn-primary-yanf inline-block">
            Back to Home
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default DebatesPage;
