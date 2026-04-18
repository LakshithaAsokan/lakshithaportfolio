import { Reveal } from "../Reveal";
import { Code, Globe, Database, BarChart3 } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Programming",
    color: "from-neon-purple to-neon-blue",
    skills: ["Java", "Python"],
  },
  {
    icon: Globe,
    title: "Web Development",
    color: "from-neon-blue to-neon-cyan",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-neon-cyan to-neon-purple",
    skills: ["DBMS", "MySQL"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    color: "from-neon-magenta to-neon-purple",
    skills: ["MS Excel", "Tableau", "Power BI", "Data Visualization"],
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

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map(({ icon: Icon, title, color, skills }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="glass rounded-2xl p-6 hover-glow h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((name) => (
                    <span
                      key={name}
                      className="glass rounded-full px-4 py-1.5 text-sm font-medium text-foreground/90 border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan hover:shadow-[0_0_15px_oklch(0.85_0.18_200/0.4)] transition-all duration-300 cursor-default"
                    >
                      {name}
                    </span>
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
