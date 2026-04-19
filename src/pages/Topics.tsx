import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, AlertTriangle } from "lucide-react";
import ScoreRing from "@/components/ScoreRing";

const subjects = [
  {
    name: "Physics",
    color: "hsl(210 100% 56%)",
    topics: [
      { name: "Electromagnetic Induction", importance: 95, weakness: 72 },
      { name: "Thermodynamics", importance: 88, weakness: 85 },
      { name: "Optics", importance: 75, weakness: 30 },
      { name: "Mechanics", importance: 92, weakness: 20 },
    ],
  },
  {
    name: "Mathematics",
    color: "hsl(185 80% 55%)",
    topics: [
      { name: "Integration", importance: 90, weakness: 55 },
      { name: "Probability", importance: 85, weakness: 78 },
      { name: "Matrices", importance: 70, weakness: 40 },
    ],
  },
  {
    name: "Chemistry",
    color: "hsl(260 60% 58%)",
    topics: [
      { name: "Organic Reactions", importance: 95, weakness: 65 },
      { name: "Electrochemistry", importance: 82, weakness: 80 },
      { name: "Chemical Kinetics", importance: 78, weakness: 35 },
    ],
  },
];

const Topics = () => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>("Physics");

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-display font-bold text-foreground mb-1">Topic Intelligence</h1>
      <p className="text-sm text-muted-foreground mb-6">AI-analyzed topic strengths</p>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search topics..."
          className="w-full bg-muted/50 border border-border/50 rounded-xl py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
        />
      </div>

      {/* Subjects */}
      <div className="space-y-3">
        {subjects.map((sub) => (
          <div key={sub.name} className="glass-card overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === sub.name ? null : sub.name)}
              className="w-full px-4 py-3.5 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ background: sub.color }} />
                <span className="font-display font-semibold text-foreground">{sub.name}</span>
                <span className="text-[10px] text-muted-foreground">{sub.topics.length} topics</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform ${expanded === sub.name ? "rotate-180" : ""}`}
              />
            </button>

            {expanded === sub.name && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="px-4 pb-3 space-y-2"
              >
                {sub.topics
                  .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
                  .map((t) => (
                    <div key={t.name} className="bg-muted/30 rounded-xl p-3 flex items-center gap-3">
                      <ScoreRing
                        score={100 - t.weakness}
                        size={44}
                        strokeWidth={3}
                        color={t.weakness > 60 ? "hsl(0 72% 51%)" : sub.color}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{t.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] text-muted-foreground">Importance: {t.importance}%</span>
                          {t.weakness > 60 && (
                            <span className="flex items-center gap-0.5 text-[10px] text-destructive">
                              <AlertTriangle className="w-2.5 h-2.5" /> Weak
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
