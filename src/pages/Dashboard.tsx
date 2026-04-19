import { motion } from "framer-motion";
import { Sparkles, Zap, BookOpen, AlertTriangle, Clock, TrendingUp, ChevronRight } from "lucide-react";
import ScoreRing from "@/components/ScoreRing";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Dashboard = () => {
  const studyPlan = [
    { subject: "Physics", topic: "Electromagnetic Induction", time: "9:00 AM", priority: "high" },
    { subject: "Math", topic: "Integration by Parts", time: "11:00 AM", priority: "medium" },
    { subject: "Chemistry", topic: "Organic Reactions", time: "2:00 PM", priority: "high" },
  ];

  const weakTopics = [
    { topic: "Thermodynamics", subject: "Physics", score: 34 },
    { topic: "Probability", subject: "Math", score: 42 },
    { topic: "Electrochemistry", subject: "Chemistry", score: 38 },
  ];

  const insights = [
    { icon: TrendingUp, text: "Your focus peaks between 9-11 AM. Schedule hard topics then.", color: "text-primary" },
    { icon: AlertTriangle, text: "3 topics are due for revision today. Don't skip them!", color: "text-cyan" },
    { icon: Sparkles, text: "You've improved 12% in Physics this week. Keep it up!", color: "text-secondary" },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="px-5 pt-12 pb-4 max-w-lg mx-auto space-y-6"
    >
      {/* Greeting */}
      <motion.div variants={item}>
        <p className="text-sm text-muted-foreground">Good morning</p>
        <h1 className="text-2xl font-display font-bold text-foreground">Alex 👋</h1>
      </motion.div>

      {/* Focus Score */}
      <motion.div variants={item} className="glass-card p-5 flex items-center gap-5">
        <ScoreRing score={78} label="Focus" />
        <div className="flex-1">
          <h3 className="font-display font-semibold text-foreground mb-1">Focus Score</h3>
          <p className="text-xs text-muted-foreground mb-2">Based on today's study patterns</p>
          <div className="flex items-center gap-1 text-xs text-cyan">
            <Zap className="w-3 h-3" />
            <span>+5 from yesterday</span>
          </div>
        </div>
      </motion.div>

      {/* Today's Study Plan */}
      <motion.div variants={item}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-semibold text-foreground">Today's Plan</h2>
          <button className="text-xs text-primary flex items-center gap-0.5">
            View all <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-2">
          {studyPlan.map((s, i) => (
            <div key={i} className="glass-card px-4 py-3 flex items-center gap-3">
              <div className="flex flex-col items-center">
                <Clock className="w-3.5 h-3.5 text-muted-foreground mb-0.5" />
                <span className="text-[10px] text-muted-foreground">{s.time}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{s.topic}</p>
                <p className="text-xs text-muted-foreground">{s.subject}</p>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  s.priority === "high"
                    ? "bg-destructive/15 text-destructive"
                    : "bg-primary/15 text-primary"
                }`}
              >
                {s.priority}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Weak Topics */}
      <motion.div variants={item}>
        <h2 className="font-display font-semibold text-foreground mb-3">Weak Areas</h2>
        <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
          {weakTopics.map((t, i) => (
            <div key={i} className="glass-card p-4 min-w-[140px] flex flex-col items-center gap-2">
              <ScoreRing score={t.score} size={56} strokeWidth={4} color="hsl(0 72% 51%)" />
              <p className="text-xs font-medium text-foreground text-center">{t.topic}</p>
              <p className="text-[10px] text-muted-foreground">{t.subject}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div variants={item}>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-secondary" />
          <h2 className="font-display font-semibold text-foreground">AI Insights</h2>
        </div>
        <div className="space-y-2">
          {insights.map((ins, i) => (
            <div key={i} className="glass-card px-4 py-3 flex items-start gap-3">
              <ins.icon className={`w-4 h-4 mt-0.5 ${ins.color} shrink-0`} />
              <p className="text-xs text-foreground/80 leading-relaxed">{ins.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Revision Reminders */}
      <motion.div variants={item}>
        <h2 className="font-display font-semibold text-foreground mb-3">Due for Revision</h2>
        <div className="glass-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">3 topics overdue</p>
              <p className="text-xs text-muted-foreground">Last revised 5 days ago</p>
            </div>
          </div>
          <button className="text-xs text-primary font-medium">Start</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
