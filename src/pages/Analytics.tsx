import { motion } from "framer-motion";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import ScoreRing from "@/components/ScoreRing";

const studyTrend = [
  { day: "Mon", hours: 3.2 },
  { day: "Tue", hours: 4.1 },
  { day: "Wed", hours: 2.8 },
  { day: "Thu", hours: 5.0 },
  { day: "Fri", hours: 3.5 },
  { day: "Sat", hours: 4.8 },
  { day: "Sun", hours: 2.0 },
];

const subjectPerf = [
  { subject: "Physics", score: 72 },
  { subject: "Math", score: 65 },
  { subject: "Chemistry", score: 58 },
  { subject: "Biology", score: 80 },
  { subject: "English", score: 85 },
];

const focusData = [
  { name: "Deep Focus", value: 45, color: "hsl(210, 100%, 56%)" },
  { name: "Light Focus", value: 30, color: "hsl(185, 80%, 55%)" },
  { name: "Distracted", value: 25, color: "hsl(220, 14%, 20%)" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.[0]) {
    return (
      <div className="glass-card px-3 py-2 text-xs">
        <span className="text-foreground font-medium">{payload[0].value}</span>
        <span className="text-muted-foreground ml-1">{typeof payload[0].value === 'number' && payload[0].value % 1 !== 0 ? 'hrs' : '%'}</span>
      </div>
    );
  }
  return null;
};

const Analytics = () => (
  <div className="px-5 pt-12 pb-4 max-w-lg mx-auto space-y-6">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground mb-1">Analytics</h1>
      <p className="text-sm text-muted-foreground">Your cognitive performance</p>
    </div>

    {/* Overview scores */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-5 flex justify-around"
    >
      <ScoreRing score={78} label="Focus" color="hsl(210 100% 56%)" />
      <ScoreRing score={65} label="Retention" color="hsl(185 80% 55%)" />
      <ScoreRing score={82} label="Consistency" color="hsl(260 60% 58%)" />
    </motion.div>

    {/* Study Trend */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass-card p-5"
    >
      <h3 className="font-display font-semibold text-foreground mb-4 text-sm">Study Hours This Week</h3>
      <ResponsiveContainer width="100%" height={140}>
        <AreaChart data={studyTrend}>
          <defs>
            <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(210, 100%, 56%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(210, 100%, 56%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 10 }} />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="hours" stroke="hsl(210, 100%, 56%)" strokeWidth={2} fill="url(#colorHours)" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>

    {/* Subject Performance */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-5"
    >
      <h3 className="font-display font-semibold text-foreground mb-4 text-sm">Subject Performance</h3>
      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={subjectPerf}>
          <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 10 }} />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="score" radius={[4, 4, 0, 0]} fill="hsl(260, 60%, 58%)" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>

    {/* Focus Distribution */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-5"
    >
      <h3 className="font-display font-semibold text-foreground mb-4 text-sm">Focus Distribution</h3>
      <div className="flex items-center gap-4">
        <ResponsiveContainer width={100} height={100}>
          <PieChart>
            <Pie data={focusData} innerRadius={30} outerRadius={45} dataKey="value" strokeWidth={0}>
              {focusData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-2">
          {focusData.map((d, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
              <span className="text-xs text-muted-foreground">{d.name}</span>
              <span className="text-xs font-medium text-foreground">{d.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

export default Analytics;
