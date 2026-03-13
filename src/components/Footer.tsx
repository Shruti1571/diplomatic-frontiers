import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-display font-bold text-xl text-gradient-gold mb-4">YANF</h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed">
          Youth As Nation's Front — Empowering the next generation of leaders, diplomats, and change-makers.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
        <div className="space-y-2 text-sm font-body">
          <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Events</a>
          <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
        <div className="space-y-3 text-sm font-body text-muted-foreground">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> contact@yanf.org</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 XXXXX XXXXX</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> India</div>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground font-body">
      © 2026 Youth As Nation's Front (YANF). All rights reserved.
    </div>
  </footer>
);

export default Footer;
