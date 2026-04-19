import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Mail, Lock, User, ArrowLeft, Eye, EyeOff } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col px-6 py-8 relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[250px] h-[250px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

      <button onClick={() => navigate("/")} className="text-muted-foreground mb-8">
        <ArrowLeft className="w-5 h-5" />
      </button>

      <div className="flex-1 flex flex-col max-w-sm mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-xl gradient-text">Neurolytix</span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "signup"}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-1">
              {isLogin ? "Welcome back" : "Create account"}
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              {isLogin ? "Sign in to continue your learning journey" : "Start your cognitive analytics journey"}
            </p>

            <div className="flex flex-col gap-4">
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-muted/50 border border-border/50 rounded-xl py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-muted/50 border border-border/50 rounded-xl py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-muted/50 border border-border/50 rounded-xl py-3.5 pl-11 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <button className="text-xs text-primary mt-3 self-end">Forgot password?</button>
            )}

            <button
              onClick={() => navigate("/dashboard")}
              className="w-full mt-6 py-4 rounded-2xl font-display font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: "var(--gradient-primary)" }}
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-border/50" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        <div className="flex gap-3 mt-6">
          {["Google", "Apple"].map((provider) => (
            <button
              key={provider}
              className="flex-1 py-3 rounded-xl glass-card text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {provider}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-medium">
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
