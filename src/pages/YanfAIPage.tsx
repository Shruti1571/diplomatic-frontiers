import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Send, LogOut, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

type Msg = { role: "user" | "assistant"; content: string };

const greetingFor = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
};

const SUGGESTIONS = [
  "What is YANF and what makes it different?",
  "Walk me through how a MUN committee works",
  "How do I prepare for my first debate?",
  "Explain the Innovation Assembly Shark Tank format",
];

const YanfAIPage = () => {
  const { user, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && !user) navigate("/auth", { replace: true });
  }, [loading, user, navigate]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const displayName =
    profile?.display_name ||
    (user?.user_metadata as { display_name?: string; full_name?: string; name?: string } | undefined)?.display_name ||
    (user?.user_metadata as { full_name?: string } | undefined)?.full_name ||
    (user?.user_metadata as { name?: string } | undefined)?.name ||
    user?.email?.split("@")[0] ||
    "Friend";

  const send = async (text: string) => {
    if (!text.trim() || streaming) return;
    const userMsg: Msg = { role: "user", content: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setStreaming(true);

    let assistantText = "";
    const upsert = (chunk: string) => {
      assistantText += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantText } : m));
        }
        return [...prev, { role: "assistant", content: assistantText }];
      });
    };

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/yanf-ai-chat`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: next }),
      });

      if (resp.status === 429) {
        toast.error("Too many requests. Try again shortly.");
        setStreaming(false);
        return;
      }
      if (resp.status === 402) {
        toast.error("AI credits exhausted. Please contact the admin.");
        setStreaming(false);
        return;
      }
      if (!resp.ok || !resp.body) {
        toast.error("Something went wrong. Please try again.");
        setStreaming(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let done = false;

      while (!done) {
        const { done: streamDone, value } = await reader.read();
        if (streamDone) break;
        textBuffer += decoder.decode(value, { stream: true });
        let nlIdx: number;
        while ((nlIdx = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, nlIdx);
          textBuffer = textBuffer.slice(nlIdx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(jsonStr);
            const c = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (c) upsert(c);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Connection error.");
    } finally {
      setStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "hsl(var(--navy))" }}>
        <Sparkles className="text-primary animate-pulse" size={32} />
      </div>
    );
  }

  const hasMessages = messages.length > 0;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "hsl(var(--navy))" }}>
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
        >
          <ArrowLeft size={16} />
          <span className="tracking-wider uppercase text-xs">Back to YANF</span>
        </button>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground hidden sm:block font-body">{displayName}</span>
          <button
            onClick={async () => {
              await signOut();
              navigate("/");
            }}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-body tracking-wider uppercase"
          >
            <LogOut size={14} />
            Sign out
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {!hasMessages ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Sparkles className="text-primary" size={36} strokeWidth={1.5} />
                <h1 className="font-display font-normal text-cream-soft" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  {greetingFor()}, <span className="text-primary">{displayName}</span>
                </h1>
              </div>
              <p className="font-serif text-base md:text-lg text-muted-foreground italic">
                Your guide to YANF, MUNs, debates, parliament, and the Innovation Assembly.
              </p>
            </motion.div>

            {/* Suggestion chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 w-full max-w-2xl"
            >
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-left p-4 border border-border bg-card hover:border-primary hover:bg-secondary transition-all text-sm text-foreground/80 font-body group"
                >
                  <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-1 opacity-70 group-hover:opacity-100">
                    Try asking
                  </span>
                  {s}
                </button>
              ))}
            </motion.div>
          </div>
        ) : (
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 ${
                        m.role === "user"
                          ? "bg-secondary border border-border text-foreground"
                          : "border border-border"
                      }`}
                      style={
                        m.role === "assistant"
                          ? { background: "hsl(var(--navy-light))", borderLeft: "2px solid hsl(var(--gold))" }
                          : undefined
                      }
                    >
                      {m.role === "assistant" && (
                        <div className="flex items-center gap-1.5 mb-2 text-[0.65rem] tracking-[0.2em] uppercase text-primary">
                          <Sparkles size={12} /> YANF AI
                        </div>
                      )}
                      <div className="prose prose-sm prose-invert max-w-none font-body prose-p:my-2 prose-headings:font-display prose-headings:text-primary prose-strong:text-foreground prose-a:text-primary prose-li:my-0.5">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content || "…"}</ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {streaming && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 border border-border" style={{ background: "hsl(var(--navy-light))", borderLeft: "2px solid hsl(var(--gold))" }}>
                    <Sparkles size={14} className="text-primary animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Input bar */}
        <div className="px-4 sm:px-6 pb-6 pt-2">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div
              className="flex items-end gap-2 p-3 border border-border"
              style={{ background: "hsl(var(--navy-light))" }}
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Ask anything about YANF, events, or how committees work..."
                rows={1}
                maxLength={2000}
                className="flex-1 bg-transparent resize-none outline-none text-foreground placeholder:text-muted-foreground text-sm font-body py-2 px-1 max-h-40"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="p-2.5 transition-all disabled:opacity-30"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))",
                  color: "hsl(var(--navy))",
                }}
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-center text-[0.65rem] text-muted-foreground mt-2 tracking-wider uppercase">
              YANF AI may make mistakes — verify important details
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YanfAIPage;