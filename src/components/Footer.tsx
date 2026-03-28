import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="px-6 md:px-16 pt-16 pb-8" style={{ background: "#060810", borderTop: "1px solid hsl(var(--border))" }}>
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
      {/* Brand */}
      <div>
        <div className="font-display text-2xl font-black text-primary tracking-[0.1em] mb-1">YANF</div>
        <div className="text-[0.68rem] tracking-[0.15em] text-muted-foreground uppercase mb-4 font-body">
          Youth As Nation's Front · Est. 2026
        </div>
        <p className="font-serif text-[0.9rem] leading-[1.75] text-muted-foreground">
          Empowering India's youth with the tools of diplomacy, leadership, and geopolitical awareness. Building the nation's front, one student at a time.
        </p>
      </div>

      {/* Navigate */}
      <div>
        <div className="font-display text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-primary mb-5">Navigate</div>
        <ul className="space-y-2.5">
          {["Home", "About YANF", "Events", "Why Us", "Community"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(/ /g, "-").replace("home", "")}`}
                className="text-[0.8rem] text-muted-foreground hover:text-primary transition-colors tracking-[0.05em] font-body"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Events */}
      <div>
        <div className="font-display text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-primary mb-5">Events</div>
        <ul className="space-y-2.5">
          {[
            { label: "MUNs", path: "/events/muns" },
            { label: "Debates", path: "/events/debates" },
            { label: "Youth Parliament", path: "/events/youth-parliament" },
            { label: "Innovation Assembly", path: "/events/innovation-assembly" },
            { label: "Gallery", path: "/gallery" },
          ].map((l) => (
            <li key={l.label}>
              <Link to={l.path} target="_blank"
                className="text-[0.8rem] text-muted-foreground hover:text-primary transition-colors tracking-[0.05em] font-body"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <div className="font-display text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-primary mb-5">Contact</div>
        <div className="space-y-2.5 text-[0.78rem] text-muted-foreground font-body">
          <div className="flex gap-2 items-start leading-snug">
            <span className="text-primary flex-shrink-0">✉</span>
            <span>contact@yanf.org</span>
          </div>
          <div className="flex gap-2 items-start leading-snug">
            <span className="text-primary flex-shrink-0">📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="flex gap-2 items-start leading-snug">
            <span className="text-primary flex-shrink-0">📍</span>
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="max-w-[1200px] mx-auto pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
      <div className="text-[0.72rem] text-muted-foreground tracking-[0.1em] font-body flex items-center gap-3 flex-wrap">
        <span>© 2026 <span className="text-primary">YANF</span> — Youth As Nation's Front. All rights reserved.</span>
        <span className="text-border">|</span>
        <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
      </div>
      <div className="flex gap-3">
        {["in", "tw", "ig", "yt"].map((s) => (
          <a key={s} href="#"
            className="w-[34px] h-[34px] flex items-center justify-center border border-primary/20 text-[0.75rem] text-muted-foreground hover:border-primary hover:text-primary transition-all font-body"
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
