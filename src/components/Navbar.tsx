import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import yanfLogo from "@/assets/yanf-logo.jpeg";

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
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-2 min-w-[200px] rounded-md border border-border bg-card p-2 shadow-xl z-50"
      >
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            target="_blank"
            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary rounded transition-colors font-body"
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={yanfLogo} alt="YANF Logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="text-gradient-gold font-display text-xl font-bold tracking-wide hidden sm:block">YANF</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Home</Link>
          <div
            className="relative"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Events</button>
            <DropdownMenu items={eventItems} isOpen={eventsOpen} />
          </div>
          <Link to="/blogs" target="_blank" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Blogs</Link>
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">More</button>
            <DropdownMenu items={moreItems} isOpen={moreOpen} />
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              <Link to="/" className="block text-sm text-foreground/80 hover:text-primary" onClick={() => setMobileOpen(false)}>Home</Link>
              <div className="text-xs text-primary font-semibold uppercase tracking-wider mt-3">Events</div>
              {eventItems.map(i => (
                <Link key={i.path} to={i.path} target="_blank" className="block pl-4 text-sm text-foreground/60 hover:text-primary" onClick={() => setMobileOpen(false)}>{i.label}</Link>
              ))}
              <Link to="/blogs" target="_blank" className="block text-sm text-foreground/80 hover:text-primary" onClick={() => setMobileOpen(false)}>Blogs</Link>
              <div className="text-xs text-primary font-semibold uppercase tracking-wider mt-3">More</div>
              {moreItems.map(i => (
                <Link key={i.path} to={i.path} target="_blank" className="block pl-4 text-sm text-foreground/60 hover:text-primary" onClick={() => setMobileOpen(false)}>{i.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
