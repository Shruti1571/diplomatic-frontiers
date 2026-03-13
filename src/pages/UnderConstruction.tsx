import { Construction } from "lucide-react";
import { Link } from "react-router-dom";

const UnderConstruction = () => (
  <div className="min-h-screen flex items-center justify-center bg-background px-6">
    <div className="text-center space-y-6 max-w-md">
      <Construction className="mx-auto h-16 w-16 text-primary" />
      <h1 className="text-3xl font-display font-bold text-gradient-gold">Under Construction</h1>
      <p className="text-muted-foreground font-body">
        This page is currently being crafted. We'll be back shortly with something extraordinary.
      </p>
      <Link to="/" className="inline-block mt-4 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
        Back to Home
      </Link>
    </div>
  </div>
);

export default UnderConstruction;
