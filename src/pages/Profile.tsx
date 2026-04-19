import { motion } from "framer-motion";
import { User, Bell, Moon, Clock, BookOpen, ChevronRight, LogOut, Shield } from "lucide-react";

const settingsGroups = [
  {
    title: "Study Preferences",
    items: [
      { icon: Clock, label: "Study hours", value: "9 AM - 6 PM" },
      { icon: BookOpen, label: "Preferred subjects", value: "5 subjects" },
      { icon: Moon, label: "Dark mode", toggle: true, enabled: true },
    ],
  },
  {
    title: "Notifications",
    items: [
      { icon: Bell, label: "Revision reminders", toggle: true, enabled: true },
      { icon: Bell, label: "Daily summary", toggle: true, enabled: false },
      { icon: Bell, label: "Achievement alerts", toggle: true, enabled: true },
    ],
  },
  {
    title: "Account",
    items: [
      { icon: Shield, label: "Privacy & Security" },
      { icon: LogOut, label: "Sign Out", danger: true },
    ],
  },
];

const Profile = () => (
  <div className="px-5 pt-12 pb-4 max-w-lg mx-auto space-y-6">
    <h1 className="text-2xl font-display font-bold text-foreground">Profile</h1>

    {/* Profile card */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-5 flex items-center gap-4"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
        <User className="w-7 h-7 text-primary" />
      </div>
      <div>
        <h2 className="font-display font-semibold text-foreground">Alex Johnson</h2>
        <p className="text-xs text-muted-foreground">alex.johnson@email.com</p>
        <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-medium">
          Pro Plan
        </span>
      </div>
    </motion.div>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-3 gap-3"
    >
      {[
        { label: "Study Streak", value: "12 days" },
        { label: "Total Hours", value: "186 hrs" },
        { label: "Topics Mastered", value: "24" },
      ].map((s, i) => (
        <div key={i} className="glass-card p-3 flex flex-col items-center">
          <span className="text-lg font-display font-bold gradient-text">{s.value}</span>
          <span className="text-[10px] text-muted-foreground mt-0.5">{s.label}</span>
        </div>
      ))}
    </motion.div>

    {/* Settings */}
    {settingsGroups.map((group, gi) => (
      <motion.div
        key={gi}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 + gi * 0.05 }}
      >
        <h3 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">{group.title}</h3>
        <div className="glass-card overflow-hidden divide-y divide-border/30">
          {group.items.map((item, i) => (
            <div key={i} className="px-4 py-3.5 flex items-center gap-3">
              <item.icon className={`w-4 h-4 ${item.danger ? "text-destructive" : "text-muted-foreground"}`} />
              <span className={`flex-1 text-sm ${item.danger ? "text-destructive" : "text-foreground"}`}>
                {item.label}
              </span>
              {item.toggle ? (
                <div
                  className={`w-10 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                    item.enabled ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-foreground transition-transform ${
                      item.enabled ? "translate-x-4" : ""
                    }`}
                  />
                </div>
              ) : item.value ? (
                <span className="text-xs text-muted-foreground">{item.value}</span>
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

export default Profile;
