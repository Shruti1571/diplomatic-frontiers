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

const whyParticipate = [
  { icon: "🏛️", text: "Understand how India's Parliament and policy institutions actually function" },
  { icon: "📜", text: "Build constitutional awareness and civic responsibility" },
  { icon: "🎤", text: "Develop public speaking, argumentation, and legislative writing skills" },
  { icon: "⚖️", text: "Learn the language of policy, governance, and democratic debate" },
  { icon: "🇮🇳", text: "Become an aware, responsible citizen of India" },
];

const gains = [
  { name: "Constitutional Awareness", icon: "📜" },
  { name: "Public Speaking", icon: "🎤" },
  { name: "Policy Drafting", icon: "✍️" },
  { name: "Democratic Thinking", icon: "🏛️" },
  { name: "Civic Responsibility", icon: "🇮🇳" },
  { name: "Leadership", icon: "👑" },
  { name: "Debate & Argumentation", icon: "⚖️" },
  { name: "National Awareness", icon: "🌏" },
];

const howItWorks = [
  {
    phase: "Step 1",
    title: "Role Assignment",
    desc: "Each participant is assigned a role — ruling party MP, opposition member, minister, or policy advisor — within a simulated house.",
  },
  {
    phase: "Step 2",
    title: "Research & Preparation",
    desc: "Participants research real issues on the agenda, prepare speeches, and draft legislative documents aligned with their assigned roles.",
  },
  {
    phase: "Step 3",
    title: "Parliamentary Session",
    desc: "They raise questions, move amendments, deliver speeches, and vote on bills. The session follows the actual procedural rules of the respective house, making it as authentic as possible.",
  },
];

const houses = [
  { name: "Lok Sabha", desc: "The lower house of India's Parliament — where bills are introduced and debated" },
  { name: "Rajya Sabha", desc: "The upper house — representing states and reviewing legislation" },
  { name: "Vidhan Sabha", desc: "Simulating state-level governance and local policy" },
  { name: "AIPPM", desc: "All India Political Parties Meet — cross-party negotiation on national issues" },
  { name: "NITI Aayog", desc: "India's premier policy think tank — crafting solutions for national development" },
  { name: "Press Conference", desc: "Students simulate media interactions, policy announcements, and press briefings" },
];

const highlights = [
  { label: "Duration", value: "2 – 3 Days" },
  { label: "Suitable For", value: "Grade 8 onwards" },
  { label: "Language", value: "Hindi & English" },
  { label: "Houses", value: "Lok Sabha, Rajya Sabha, Vidhan Sabha, AIPPM, NITI Aayog" },
  { label: "Awards", value: "Best Speaker, Best Minister, Best Opposition Leader, Best Policy Brief" },
];

const bodies = [
  { abbr: "Lok Sabha", name: "House of the People", desc: "Lower House of Parliament", url: "https://loksabha.nic.in/" },
  { abbr: "Rajya Sabha", name: "Council of States", desc: "Upper House of Parliament", url: "https://rajyasabha.nic.in/" },
  { abbr: "NITI Aayog", name: "National Institution for Transforming India", desc: "Policy Think Tank", url: "https://www.niti.gov.in/" },
];

const YouthParliamentPage = () => {
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
            Youth Parliament <span className="text-gradient-gold">×</span> YANF
          </h1>
          <p className="font-display text-primary/80 text-lg italic tracking-wide">
            Simulate. Legislate. Lead.
          </p>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Experience Indian democracy from the inside.
          </p>
        </motion.div>
      </section>

      {/* What is Yuva Sansad */}
      <section className="section-padding" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
          <div className="section-label">Understanding the Platform</div>
          <h2 className="section-title">What is <span>Yuva Sansad?</span></h2>
          <div className="gold-line mb-8" />
          <p className="font-body text-muted-foreground leading-[1.9] text-[1rem]">
            Youth Parliament — युवा संसद at YANF is a powerful simulation of India's most prestigious constitutional and
            policy-making bodies. Students step into the roles of Members of Parliament, Chief Ministers, Opposition Leaders,
            Policy Makers, and Advisors — debating real legislative agendas and experiencing Indian democracy first-hand.
          </p>
          <p className="font-body text-muted-foreground leading-[1.9] text-[1rem] mt-4">
            More than a simulation, Yuva Sansad is a civics experience that builds informed, responsible, and constitutionally
            aware citizens — young Indians who don't just understand their democracy, but are prepared to participate in it,
            strengthen it, and lead it.
          </p>
        </motion.div>
      </section>

      {/* Why Participate */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto">
          <div className="section-label">The Value Proposition</div>
          <h2 className="section-title">Why <span>Participate in Yuva Sansad?</span></h2>
          <div className="gold-line mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyParticipate.map((item, i) => (
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
                    <p className="font-body text-muted-foreground text-[0.95rem] leading-[1.8]">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Houses & Committees */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[1000px] mx-auto">
          <div className="section-label">Simulated Institutions</div>
          <h2 className="section-title">Houses & <span>Committees</span></h2>
          <div className="gold-line mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {houses.map((house, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-sm"
                style={{ background: "hsl(var(--navy-light))", border: "1px solid hsl(var(--border))" }}
              >
                <div className="font-display text-lg font-bold text-primary mb-2">{house.name}</div>
                <p className="font-body text-muted-foreground text-[0.9rem] leading-relaxed">{house.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What Students Gain */}
      <section className="section-padding" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[900px] mx-auto text-center">
          <div className="section-label">What You'll Develop</div>
          <h2 className="section-title">What Students <span>Gain</span></h2>
          <div className="gold-line mx-auto mb-14" />

          <div className="relative w-[340px] h-[340px] md:w-[520px] md:h-[520px] mx-auto">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
              {gains.map((_, i) => {
                const angle = (i / gains.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 40;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <line key={i} x1="50" y1="50" x2={x} y2={y}
                    stroke="hsl(42 55% 54% / 0.15)" strokeWidth="0.3"
                  />
                );
              })}
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center z-10"
              style={{
                background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
                boxShadow: "0 0 60px hsl(var(--gold) / 0.3)",
              }}
            >
              <span className="font-display text-[0.75rem] md:text-[0.95rem] font-bold tracking-[0.1em] uppercase leading-tight text-center" style={{ color: "hsl(var(--navy))" }}>
                Yuva<br/>Sansad
              </span>
            </div>

            {gains.map((skill, i) => {
              const angle = (i / gains.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 40;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="absolute flex flex-col items-center gap-1.5 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl"
                    style={{ background: "hsl(var(--navy-light))", border: "1px solid hsl(var(--gold) / 0.4)" }}
                  >
                    {skill.icon}
                  </div>
                  <span className="font-body text-[0.65rem] md:text-[0.75rem] text-muted-foreground text-center leading-tight max-w-[90px]">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Event Highlights */}
      <section className="section-padding" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
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

      {/* Explore Constitutional Bodies */}
      <section className="section-padding" style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-[1000px] mx-auto">
          <div className="section-label">Explore India's Constitutional Bodies</div>
          <h2 className="section-title">Official <span>Links</span></h2>
          <div className="gold-line mb-4" />
          <p className="font-body text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Explore the official websites of the institutions you will be simulating. Understanding how these bodies actually
            work will make your participation sharper, more authentic, and more impactful.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bodies.map((body, i) => (
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
                <div className="font-display text-xl font-bold text-primary mb-1">{body.abbr}</div>
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
      <section className="section-padding text-center" style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--border))" }}>
        <motion.div {...fadeUp} className="max-w-lg mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Step into Parliament. Your nation needs your <span className="text-gradient-gold">voice</span>.
          </h2>
          <p className="font-body text-muted-foreground mb-8">Register for Yuva Sansad today.</p>
          <Link to="/" className="btn-primary-yanf inline-block">
            Back to Home
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default YouthParliamentPage;
