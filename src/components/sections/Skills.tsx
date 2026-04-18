import { Reveal } from "../Reveal";
import { Code, Globe, Database, BarChart3, MessageSquare } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Programming",
    color: "from-neon-purple to-neon-blue",
    skills: [
      { name: "Java", level: 80 },
      { name: "Python", level: 85 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    color: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-neon-cyan to-neon-purple",
    skills: [
      { name: "DBMS", level: 80 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    color: "from-neon-magenta to-neon-purple",
    skills: [
      { name: "MS Excel", level: 90 },
      { name: "Tableau", level: 80 },
      { name: "Power BI", level: 85 },
      { name: "Data Visualization", level: 85 },
    ],
  },
  {
    icon: MessageSquare,
    title: "Soft Skills",
    color: "from-neon-purple to-neon-magenta",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Public Speaking", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// EXPERTISE</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              My <span className="text-gradient">Skills</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, title, color, skills }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="glass rounded-2xl p-6 hover-glow h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
