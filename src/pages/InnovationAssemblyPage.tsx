import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb, TrendingUp, Target, BarChart3, FileText, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnovationParticles from "@/components/InnovationParticles";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const whyInnovation = [
  { icon: "🔄", text: "Experience both sides of the business table — as a founder and as an investor" },
  { icon: "💡", text: "Develop entrepreneurial thinking and creative problem-solving" },
  { icon: "📊", text: "Learn real business vocabulary — pitches, ROI, valuation, market sizing, term sheets" },
  { icon: "🎤", text: "Build confidence to present, persuade, and defend ideas under scrutiny" },
  { icon: "📈", text: "Understand how investors evaluate risk, opportunity, and potential" },
];

const howItWorks = [
  {
    phase: "Phase 1",
    title: "The Innovation Pitch",
    desc: "Students assigned as Innovators develop and present a business idea to a panel of student Investors. They prepare a pitch — covering the problem they're solving, their solution, target audience, business model, and growth plan. Innovators are evaluated on creativity, clarity, feasibility, and their ability to handle investor questions.",
  },
  {
    phase: "Phase 2",
    title: "The Investment Round",
    desc: "Students assigned as Investors evaluate pitches, ask probing questions, and decide where to allocate their virtual investment portfolio. They are evaluated on their ability to ask the right questions, assess risk, identify opportunity, and make strategic investment decisions.",
  },
  {
    phase: "Phase 3",
    title: "The Summit Awards",
    desc: "The summit concludes with the crowning of the Best Entrepreneur — whose idea won the most investment and admiration — and the Best Investor — whose portfolio choices and questioning showed the sharpest business acumen. Every participant walks away with an experience no textbook could provide.",
  },
];

const gains = [
  { name: "Pitching", desc: "Present ideas clearly, confidently, and compellingly", icon: Lightbulb },
  { name: "Market Research", desc: "Understand your audience, competition, and industry", icon: Target },
  { name: "Valuation", desc: "How businesses are valued and what makes them investable", icon: TrendingUp },
  { name: "ROI & Risk", desc: "Return on investment, risk assessment, and financial thinking", icon: BarChart3 },
  { name: "Term Sheets", desc: "The basics of deal-making and investment terms", icon: FileText },
  { name: "Storytelling", desc: "Make investors believe in your vision", icon: Sparkles },
];

const highlights = [
  { label: "Duration", value: "1 – 2 Days" },
  { label: "Suitable For", value: "Grade 9 onwards" },
  { label: "Roles", value: "Innovator (Entrepreneur) & Investor" },
  { label: "Awards", value: "Best Entrepreneur, Best Investor, Most Innovative Idea, Best Pitch" },
];

const resources = [
  { name: "Y Combinator", desc: "World's top startup accelerator & pitch resources", url: "https://www.ycombinator.com/" },
  { name: "TED — Business", desc: "Best entrepreneurship & innovation talks", url: "https://www.ted.com/topics/business" },
  { name: "Investopedia", desc: "Learn business & investing terms", url: "https://www.investopedia.com/" },
  { name: "Shark Tank", desc: "Watch real pitches & investor decisions", url: "https://abc.com/shows/shark-tank" },
  { name: "Harvard Business Review", desc: "Articles on innovation, strategy & leadership", url: "https://hbr.org/" },
  { name: "AngelList", desc: "Explore real startup funding & venture capital", url: "https://www.angellist.com/" },
];

const InnovationAssemblyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <InnovationParticles />
      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6 md:px-16 text-center overflow-hidden">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 50% 30%, hsl(var(--gold) / 0.08) 0%, transparent 70%)",
          }} />
          <motion.div {...fadeUp} className="relative z-10 max-w-3xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-primary/70 hover:text-primary text-sm font-body mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="section-label">Events</div>
            <h1 className="font-display font-bold text-foreground leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              Innovation Assembly <span className="text-gradient-gold">×</span> YANF
            </h1>
            <p className="font-display text-primary/80 text-lg italic tracking-wide">
              Pitch. Invest. Disrupt.
            </p>
            <p className="font-body text-white mt-4 max-w-xl mx-auto leading-relaxed">
              Where students stop studying business — and start doing it.
            </p>
          </motion.div>
        </section>

        {/* What is Innovation Assembly */}
        <section className="section-padding" style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
            <div className="section-label">Understanding the Platform</div>
            <h2 className="section-title">What is <span>Innovation Assembly?</span></h2>
            <div className="gold-line mb-8" />
            <p className="font-body text-white leading-[1.9] text-[1rem]">
              Every student has an idea. YANF's Innovation Assembly gives them the stage to prove it. This one-of-a-kind
              simulation brings the world of entrepreneurship and investment straight to your school — where students pitch
              real ideas, challenge each other's thinking, and make bold decisions, just like founders and investors do in
              the real world. What makes it truly special is the dual experience. One student pitches their vision as an
              Innovator, while another weighs risks and opportunities as an Investor — and then they switch. By the end of
              it, every participant has lived both sides of the table.
            </p>
          </motion.div>
        </section>

        {/* Why Innovation Assembly */}
        <section className="section-padding" style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
            <div className="section-label">The Value Proposition</div>
            <h2 className="section-title">Why <span>Innovation Assembly?</span></h2>
            <div className="gold-line mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyInnovation.map((item, i) => (
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
                  <p className="font-body text-white text-[0.95rem] leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* How it Works */}
        <section className="section-padding" style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
            <div className="section-label">The Process</div>
            <h2 className="section-title">How it <span>Works</span></h2>
            <div className="gold-line mb-12" />

            <div className="relative">
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
                      <p className="font-body text-white text-[0.95rem] leading-[1.8]">{phase.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* What Students Gain — Unique Hex/Bento Grid */}
        <section className="section-padding" style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <motion.div {...fadeUp} className="max-w-[1000px] mx-auto">
            <div className="section-label text-center">Business Skills You'll Master</div>
            <h2 className="section-title text-center">What Students <span>Gain</span></h2>
            <div className="gold-line mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gains.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group relative p-8 rounded-lg overflow-hidden cursor-default"
                    style={{
                      background: "hsl(var(--navy-light))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  >
                    {/* Glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--gold) / 0.12) 0%, transparent 70%)" }}
                    />
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ background: "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))" }}
                    />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                        style={{
                          background: "linear-gradient(135deg, hsl(var(--gold) / 0.15), hsl(var(--gold) / 0.05))",
                          border: "1px solid hsl(var(--gold) / 0.3)",
                        }}
                      >
                        <Icon size={24} style={{ color: "hsl(var(--gold))" }} />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{skill.name}</h3>
                      <p className="font-body text-white text-[0.9rem] leading-relaxed">{skill.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Event Highlights */}
        <section className="section-padding" style={{ borderTop: "1px solid hsl(var(--border))" }}>
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
                  <p className="font-body text-white text-[1rem]">{h.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Explore Resources */}
        <section className="section-padding" style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <motion.div {...fadeUp} className="max-w-[1000px] mx-auto">
            <div className="section-label">Explore the World of Entrepreneurship</div>
            <h2 className="section-title">Learn from the <span>Best</span></h2>
            <div className="gold-line mb-4" />
            <p className="font-body text-white mb-10 max-w-2xl leading-relaxed">
              Explore these globally recognised platforms to understand how real entrepreneurs and investors think, pitch, and build businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {resources.map((r, i) => (
                <motion.a
                  key={r.name}
                  href={r.url}
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
                  <div className="font-display text-lg font-bold text-primary mb-1">{r.name}</div>
                  <div className="font-body text-white text-[0.85rem]">{r.desc}</div>
                  <div className="mt-4 font-body text-[0.7rem] tracking-[0.12em] uppercase text-primary/60 group-hover:text-primary transition-colors">
                    Visit Website →
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="section-padding text-center" style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <motion.div {...fadeUp} className="max-w-lg mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Got an idea? Ready to <span className="text-gradient-gold">invest</span>?
            </h2>
            <p className="font-body text-white mb-8">Join Innovation Assembly at YANF.</p>
            <Link to="/" className="btn-primary-yanf inline-block">
              Back to Home
            </Link>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default InnovationAssemblyPage;
