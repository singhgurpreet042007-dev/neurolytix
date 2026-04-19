import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Sparkles, Target } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-between px-6 py-12 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[200px] h-[200px] rounded-full bg-secondary/8 blur-[80px] pointer-events-none" />

      <div className="flex-1 flex flex-col items-center justify-center gap-10 max-w-sm w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center glow-primary">
            <Brain className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-display font-bold gradient-text">Neurolytix</h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-muted-foreground text-center tracking-wide"
        >
          Analyze. Adapt. Achieve.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col gap-3 w-full"
        >
          {[
            { icon: Sparkles, text: "AI-powered study insights", color: "text-primary" },
            { icon: Target, text: "Adaptive revision scheduling", color: "text-cyan" },
            { icon: Brain, text: "Cognitive performance analytics", color: "text-secondary" },
          ].map((f, i) => (
            <div key={i} className="glass-card px-4 py-3 flex items-center gap-3">
              <f.icon className={`w-5 h-5 ${f.color}`} />
              <span className="text-sm text-foreground/80">{f.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex flex-col gap-3 w-full max-w-sm"
      >
        <button
          onClick={() => navigate("/auth")}
          className="w-full py-4 rounded-2xl font-display font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
          style={{ background: "var(--gradient-primary)" }}
        >
          Get Started
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full py-4 rounded-2xl font-display font-semibold text-foreground/70 glass-card transition-all hover:text-foreground active:scale-[0.98]"
        >
          Try Demo
        </button>
      </motion.div>
    </div>
  );
};

export default Onboarding;
