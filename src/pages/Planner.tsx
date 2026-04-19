import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Zap, Battery, BatteryMedium, BatteryLow } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const tasks = [
  { id: 1, subject: "Physics", task: "Solve Electromagnetic Induction problems", priority: "high", energy: "high", done: false, time: "45 min" },
  { id: 2, subject: "Math", task: "Practice Integration by Parts", priority: "medium", energy: "high", done: true, time: "30 min" },
  { id: 3, subject: "Chemistry", task: "Review Organic Reactions mechanisms", priority: "high", energy: "medium", done: false, time: "40 min" },
  { id: 4, subject: "Biology", task: "Revise Cell Division notes", priority: "low", energy: "low", done: false, time: "20 min" },
  { id: 5, subject: "English", task: "Essay practice - Argumentative writing", priority: "medium", energy: "low", done: true, time: "35 min" },
];

const energyIcons = {
  high: { icon: Battery, color: "text-cyan" },
  medium: { icon: BatteryMedium, color: "text-primary" },
  low: { icon: BatteryLow, color: "text-muted-foreground" },
};

const priorityColors: Record<string, string> = {
  high: "bg-destructive/15 text-destructive",
  medium: "bg-primary/15 text-primary",
  low: "bg-muted text-muted-foreground",
};

const Planner = () => {
  const [selectedDay, setSelectedDay] = useState(2);

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-display font-bold text-foreground mb-1">Study Planner</h1>
      <p className="text-sm text-muted-foreground mb-6">Optimize your study sessions</p>

      {/* Day selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {days.map((d, i) => (
          <button
            key={d}
            onClick={() => setSelectedDay(i)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl min-w-[48px] transition-all ${
              selectedDay === i
                ? "bg-primary text-primary-foreground"
                : "glass-card text-muted-foreground"
            }`}
          >
            <span className="text-[10px] font-medium">{d}</span>
            <span className="text-sm font-bold">{14 + i}</span>
          </button>
        ))}
      </div>

      {/* Energy suggestion */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card-elevated px-4 py-3 flex items-center gap-3 mb-6"
      >
        <Zap className="w-4 h-4 text-cyan shrink-0" />
        <p className="text-xs text-foreground/70">
          Your energy is <span className="text-cyan font-medium">high</span> right now. Tackle difficult topics first!
        </p>
      </motion.div>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.map((t) => {
          const EnergyIcon = energyIcons[t.energy as keyof typeof energyIcons];
          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: t.id * 0.05 }}
              className={`glass-card p-4 ${t.done ? "opacity-50" : ""}`}
            >
              <div className="flex items-start gap-3">
                {t.done ? (
                  <CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${t.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                    {t.task}
                  </p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="text-[10px] text-muted-foreground">{t.subject}</span>
                    <span className="text-[10px] text-muted-foreground">•</span>
                    <span className="text-[10px] text-muted-foreground">{t.time}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${priorityColors[t.priority]}`}>
                      {t.priority}
                    </span>
                    <EnergyIcon.icon className={`w-3 h-3 ${EnergyIcon.color}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Planner;
