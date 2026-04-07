import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const founderNote = `Nine years ago, I walked into a room I didn't quite belong in — nervous, position paper in hand, heart racing. I didn't know it then, but that room would change everything.

That was my first MUN. And somewhere between researching foreign policy at midnight and fumbling through my first speech, I fell in love — not just with debate, but with what these rooms do to people. I watched quiet students find their voice. I saw uncertain minds become decisive ones. I felt something shift, not just in a committee, but in the people inside it.

Seventy-five conferences later, I'm still chasing that feeling. Except now, I'm not just a delegate sitting in those rooms — I'm trying to build them.

YANF — Youth As Nations' Front — wasn't born from a business plan. It was born from a question that had been quietly unsettling me for years: why does youth development still feel like it belongs only to a select few? Why are the stages that build confidence, leadership, and real-world thinking still out of reach for so many young people across this country?

I've co-founded conferences. I've chaired committees across Uttarakhand, Himachal Pradesh, Jharkhand, Bihar, Delhi-NCR and beyond. I've mentored delegates and worked alongside teams at some of the country's most prominent youth platforms. And through all of it — across every committee room, every debate floor, every conversation backstage — one thing became undeniably clear:`;

const founderNoteQuote = `"The problem was never the student. It was always the opportunity."`;

const founderNoteRest = `YANF exists to close that gap. Not just through Model UN — though we do that with everything we've got — but through Debates, Youth Parliament simulations, and our Innovation Assembly. We want every student who walks into a YANF event to walk out different — not because we told them what to think, but because we gave them the space to discover how powerfully they already can.

I've built this alongside a full-time career in business and management — and honestly, that's intentional. I believe the line between the boardroom and the committee room is thinner than we think. The same skills that make a great negotiator make a great entrepreneur. The same instinct that wins a debate can shape a policy. YANF is where those worlds meet.

We are just getting started. The cities will grow. The stages will expand. But what will never change is the reason we do this — that singular belief that the future isn't something young people inherit. It's something they build. And we're here to hand them the tools.

If you're a student reading this — you belong here. If you're a parent, an educator, an institution — I invite you to believe in what we believe: that given the right room, the right challenge, and the right people around them, every young person is already a leader. They just need the chance to prove it.`;

const previewText = `"Nine years ago, I walked into a room I didn't quite belong in — nervous, position paper in hand, heart racing. I didn't know it then, but that room would change everything..."`;

const CommunitySection = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="community" className="section-padding"
      style={{ background: "hsl(var(--navy2))", borderTop: "1px solid hsl(var(--border))" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto mb-14 text-center"
      >
        <div className="section-label text-center">Our People</div>
        <h2 className="section-title text-center">Be a Part of a <span>Thriving Community</span></h2>
        <div className="gold-line mx-auto mb-6" />
        <p className="font-serif text-lg italic text-muted-foreground max-w-[600px] mx-auto">
          Meet the faces behind the movement — students, chairs, mentors, and visionaries united by a shared purpose.
        </p>
      </motion.div>

      {/* Founder's Note */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto px-4"
      >
        {/* Section Label */}
        <p className="text-center text-xs tracking-[0.35em] uppercase text-muted-foreground font-body mb-10">
          F O U N D E R ' S &nbsp; N O T E
        </p>

        {/* Card */}
        <div
          className="rounded-none p-6 sm:p-10"
          style={{
            background: "hsl(var(--navy-light) / 0.5)",
            border: "1px solid hsl(var(--border))",
          }}
        >
          {/* Top: Photo + Preview */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {/* Photo placeholder */}
            <div className="mx-auto sm:mx-0 shrink-0 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, hsl(var(--navy-light)), hsl(var(--gold) / 0.15))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <span className="text-5xl">👤</span>
            </div>

            {/* Text side */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
              <h3 className="font-display text-lg font-semibold text-primary tracking-[0.08em] mb-0.5">
                Aditya Kumar
              </h3>
              <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase font-body mb-4">
                Founder, YANF
              </p>

              {/* Preview quote */}
              <p className="font-serif text-base italic text-cream-soft/80 leading-relaxed">
                {previewText}
              </p>

              {/* Toggle button */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-body tracking-wide self-center sm:self-start"
              >
                {expanded ? (
                  <>Read Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Read Full Note <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>

          {/* Expanded full note */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="mt-8 pt-8" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                  <div className="font-serif text-base text-cream-soft/80 leading-[1.85] space-y-5">
                    {founderNote.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    <p className="text-primary font-semibold text-lg italic text-center my-6">
                      {founderNoteQuote}
                    </p>
                    {founderNoteRest.split("\n\n").map((p, i) => (
                      <p key={`r${i}`}>{p}</p>
                    ))}
                  </div>

                  {/* Signature */}
                  <div className="mt-8 pt-6 text-right" style={{ borderTop: "1px solid hsl(var(--border) / 0.5)" }}>
                    <p className="font-display text-sm font-semibold text-primary tracking-[0.08em]">Aditya Kumar</p>
                    <p className="text-xs text-muted-foreground tracking-[0.12em] uppercase font-body">Founder, YANF</p>
                  </div>

                  <button
                    onClick={() => setExpanded(false)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-body tracking-wide"
                  >
                    Read Less <ChevronUp className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <p className="font-serif text-xl italic text-cream-soft opacity-70 mb-6">
          Ready to make your mark on history?
        </p>
        <button onClick={onJoinClick} className="btn-primary-yanf">Join the Community</button>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
