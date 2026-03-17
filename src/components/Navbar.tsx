import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import yanfLogo from "@/assets/yanf-logo.png";

const eventItems = [
  { label: "MUNs", path: "/events/muns" },
  { label: "Debates", path: "/events/debates" },
  { label: "Youth Parliament", path: "/events/youth-parliament" },
  { label: "Innovation Assembly", path: "/events/innovation-assembly" },
];

const moreItems = [
  { label: "Gallery", path: "/gallery" },
  { label: "Hall of Fame", path: "/hall-of-fame" },
  { label: "Certifications", path: "/certifications" },
];

const DropdownMenu = ({ items, isOpen }: { items: { label: string; path: string }[]; isOpen: boolean }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className="absolute top-full left-0 min-w-[200px] border border-border bg-popover/98 backdrop-blur-xl z-50"
        style={{ borderTop: "2px solid hsl(var(--gold))" }}
      >
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            target="_blank"
            className="block px-5 py-2.5 text-[0.75rem] tracking-[0.08em] text-foreground/80 hover:text-primary hover:bg-primary/[0.08] hover:pl-6 transition-all border-b border-primary/[0.07] font-body"
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

interface NavbarProps {
  onJoinClick?: () => void;
}

const Navbar = ({ onJoinClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 backdrop-blur-xl border-b border-border transition-all duration-300 ${
        scrolled ? "py-2.5 bg-background/97" : "py-4 bg-background/85"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
          <img src={yanfLogo} alt="YANF Logo" className="w-full h-full object-contain" />
        </div>
        <div>
          <div className="font-display text-[1.1rem] font-bold text-primary tracking-[0.1em] leading-tight">YANF</div>
          <div className="font-body text-[0.6rem] font-normal text-muted-foreground tracking-[0.15em] uppercase">
            Youth As Nation's Front
          </div>
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-1 list-none">
        <li>
          <Link to="/" className="block px-4 py-2.5 font-body text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-cream-soft hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setEventsOpen(true)}
          onMouseLeave={() => setEventsOpen(false)}
        >
          <button className="block px-4 py-2.5 font-body text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-cream-soft hover:text-primary transition-colors">
            Events <span className="text-[0.5rem] ml-1 align-middle">▾</span>
          </button>
          <DropdownMenu items={eventItems} isOpen={eventsOpen} />
        </li>
        <li>
          <Link to="/blogs" target="_blank" className="block px-4 py-2.5 font-body text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-cream-soft hover:text-primary transition-colors">
            Blog
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <button className="block px-4 py-2.5 font-body text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-cream-soft hover:text-primary transition-colors">
            More <span className="text-[0.5rem] ml-1 align-middle">▾</span>
          </button>
          <DropdownMenu items={moreItems} isOpen={moreOpen} />
        </li>
        <li>
          <button
            onClick={onJoinClick}
            className="ml-2 px-5 py-2.5 font-body text-[0.78rem] font-bold tracking-[0.1em] uppercase rounded-sm transition-all"
            style={{
              background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
              color: "hsl(var(--navy))",
              boxShadow: "0 4px 15px hsl(var(--gold) / 0.3)",
            }}
          >
            Join Us
          </button>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 right-0 bg-card border-t border-border overflow-hidden md:hidden"
          >
            <div className="px-6 py-4 space-y-3">
              <Link to="/" className="block text-sm text-foreground/80 hover:text-primary font-body" onClick={() => setMobileOpen(false)}>Home</Link>
              <div className="text-xs text-primary font-semibold uppercase tracking-wider mt-3 font-display">Events</div>
              {eventItems.map(i => (
                <Link key={i.path} to={i.path} target="_blank" className="block pl-4 text-sm text-foreground/60 hover:text-primary font-body" onClick={() => setMobileOpen(false)}>{i.label}</Link>
              ))}
              <Link to="/blogs" target="_blank" className="block text-sm text-foreground/80 hover:text-primary font-body" onClick={() => setMobileOpen(false)}>Blog</Link>
              <div className="text-xs text-primary font-semibold uppercase tracking-wider mt-3 font-display">More</div>
              {moreItems.map(i => (
                <Link key={i.path} to={i.path} target="_blank" className="block pl-4 text-sm text-foreground/60 hover:text-primary font-body" onClick={() => setMobileOpen(false)}>{i.label}</Link>
              ))}
              <button
                onClick={() => { setMobileOpen(false); onJoinClick?.(); }}
                className="mt-4 w-full py-3 font-display text-sm font-bold tracking-[0.1em] uppercase rounded-sm"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
                  color: "hsl(var(--navy))",
                }}
              >
                Join Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
