import { motion } from "framer-motion";
import { Clock, CheckCircle2, AlertCircle, Brain } from "lucide-react";

const revisions = [
  { topic: "Electromagnetic Induction", subject: "Physics", dueIn: "Overdue", strength: 25, status: "overdue" },
  { topic: "Probability", subject: "Math", dueIn: "Today", strength: 40, status: "due" },
  { topic: "Organic Reactions", subject: "Chemistry", dueIn: "Today", strength: 35, status: "due" },
  { topic: "Optics", subject: "Physics", dueIn: "Tomorrow", strength: 65, status: "upcoming" },
  { topic: "Matrices", subject: "Math", dueIn: "In 3 days", strength: 72, status: "upcoming" },
  { topic: "Chemical Kinetics", subject: "Chemistry", dueIn: "Completed", strength: 88, status: "done" },
];

const statusConfig: Record<string, { color: string; bg: string; icon: typeof Clock }> = {
  overdue: { color: "text-destructive", bg: "bg-destructive/15", icon: AlertCircle },
  due: { color: "text-cyan", bg: "bg-cyan/15", icon: Clock },
  upcoming: { color: "text-primary", bg: "bg-primary/15", icon: Clock },
  done: { color: "text-cyan", bg: "bg-cyan/15", icon: CheckCircle2 },
};

const Revision = () => (
  <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
    <h1 className="text-2xl font-display font-bold text-foreground mb-1">Revision Engine</h1>
    <p className="text-sm text-muted-foreground mb-6">Spaced repetition scheduler</p>

    {/* Timeline header */}
    <div className="glass-card-elevated p-4 mb-6 flex items-center gap-3">
      <Brain className="w-5 h-5 text-secondary" />
      <div>
        <p className="text-sm font-medium text-foreground">3 revisions due today</p>
        <p className="text-xs text-muted-foreground">Based on your memory decay curves</p>
      </div>
    </div>

    {/* Revision cards */}
    <div className="space-y-3">
      {revisions.map((r, i) => {
        const cfg = statusConfig[r.status];
        const Icon = cfg.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className={`glass-card p-4 ${r.status === "done" ? "opacity-50" : ""}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm font-medium text-foreground">{r.topic}</p>
                <p className="text-xs text-muted-foreground">{r.subject}</p>
              </div>
              <span className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium ${cfg.bg} ${cfg.color}`}>
                <Icon className="w-2.5 h-2.5" />
                {r.dueIn}
              </span>
            </div>

            {/* Memory strength bar */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-muted-foreground">Memory strength</span>
                <span className="text-[10px] text-foreground font-medium">{r.strength}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${r.strength}%`,
                    background:
                      r.strength < 40
                        ? "hsl(0 72% 51%)"
                        : r.strength < 70
                        ? "hsl(210 100% 56%)"
                        : "hsl(185 80% 55%)",
                  }}
                />
              </div>
            </div>

            {r.status !== "done" && (
              <button className="mt-3 text-xs text-primary font-medium">
                {r.status === "overdue" ? "Revise Now" : "Start Revision"}
              </button>
            )}
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default Revision;
