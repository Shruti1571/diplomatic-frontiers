import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const AIFloatingButton = () => {
  const location = useLocation();
  // Hide on the AI page itself and on auth
  if (location.pathname.startsWith("/yanf-ai") || location.pathname.startsWith("/auth")) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        to="/yanf-ai"
        aria-label="Open YANF AI assistant"
        className="group relative flex items-center gap-2 pl-3 pr-4 py-3 shadow-[0_8px_30px_hsl(var(--gold)/0.4)] hover:shadow-[0_12px_40px_hsl(var(--gold)/0.6)] transition-all"
        style={{
          background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
          color: "hsl(var(--navy))",
          clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
        }}
      >
        <Sparkles size={18} strokeWidth={2} />
        <span className="font-display text-[0.72rem] font-bold tracking-[0.15em] uppercase hidden sm:inline">
          YANF AI
        </span>
      </Link>
    </motion.div>
  );
};

export default AIFloatingButton;