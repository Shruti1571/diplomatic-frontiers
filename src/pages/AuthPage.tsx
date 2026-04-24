import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import yanfLogo from "@/assets/yanf-logo.png";

const signUpSchema = z.object({
  displayName: z.string().trim().min(1, "Name required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(6, "Min 6 characters").max(128),
});

const signInSchema = z.object({
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(1, "Password required").max(128),
});

const AuthPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate("/yanf-ai", { replace: true });
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const parsed = signUpSchema.safeParse({ displayName, email, password });
        if (!parsed.success) {
          toast.error(parsed.error.issues[0].message);
          return;
        }
        const { error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/yanf-ai`,
            data: { display_name: parsed.data.displayName },
          },
        });
        if (error) {
          toast.error(error.message);
          return;
        }
        toast.success("Account created! Welcome.");
      } else {
        const parsed = signInSchema.safeParse({ email, password });
        if (!parsed.success) {
          toast.error(parsed.error.issues[0].message);
          return;
        }
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.data.email,
          password: parsed.data.password,
        });
        if (error) {
          toast.error(error.message);
          return;
        }
        toast.success("Welcome back.");
      }
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: `${window.location.origin}/yanf-ai`,
      });
      if (result.error) toast.error("Google sign-in failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ background: "hsl(var(--navy))" }}>
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-3 mb-8">
          <img src={yanfLogo} alt="YANF Logo" className="w-14 h-14 object-contain" />
          <div>
            <div className="font-display text-xl font-bold text-primary tracking-[0.1em]">YANF</div>
            <div className="font-body text-[0.6rem] text-muted-foreground tracking-[0.15em] uppercase">Youth As Nation's Front</div>
          </div>
        </Link>

        <div className="border border-border bg-card p-8" style={{ background: "hsl(var(--navy-light))" }}>
          <h1 className="font-display text-2xl text-foreground mb-1">
            {mode === "signin" ? "Welcome back" : "Join YANF AI"}
          </h1>
          <p className="font-serif text-sm text-muted-foreground mb-6">
            {mode === "signin" ? "Sign in to chat with the YANF assistant." : "Create an account to access the AI assistant."}
          </p>

          <button
            type="button"
            disabled={busy}
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-border bg-background hover:bg-secondary transition-colors text-sm font-body text-foreground disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 tracking-wider uppercase">Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                  maxLength={80}
                  className="w-full px-3 py-2.5 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>
            )}
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5 tracking-wider uppercase">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="w-full px-3 py-2.5 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5 tracking-wider uppercase">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                maxLength={128}
                className="w-full px-3 py-2.5 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={busy}
              className="w-full py-3 font-display text-sm font-bold tracking-[0.1em] uppercase disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
                color: "hsl(var(--navy))",
              }}
            >
              {busy ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6 font-body">
            {mode === "signin" ? "New here?" : "Already have an account?"}{" "}
            <button
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-primary hover:underline font-semibold"
            >
              {mode === "signin" ? "Create account" : "Sign in"}
            </button>
          </p>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary tracking-wider uppercase">← Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;