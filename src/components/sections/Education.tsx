import { Reveal } from "../Reveal";
import { GraduationCap } from "lucide-react";

const items = [
  {
    degree: "Bachelor of Technology in Information Technology",
    school: "Sri Manakula Vinayagar Engineering College",
    period: "2023 – 2027",
    score: "CGPA: 8.05",
  },
  {
    degree: "Higher Secondary Certificate",
    school: "SRM Public School",
    period: "2022 – 2023",
    score: "67%",
  },
  {
    degree: "Secondary School Certificate",
    school: "SRM Public School",
    period: "2020 – 2021",
    score: "76%",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// LEARNING</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Education</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative space-y-6">
          {items.map((it, i) => (
            <Reveal key={it.degree} delay={i * 100}>
              <div className="glass rounded-2xl p-6 hover-glow flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 border border-neon-purple/30 flex items-center justify-center shrink-0">
                  <GraduationCap size={22} className="text-neon-cyan" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <h3 className="font-display text-base md:text-lg font-bold">{it.degree}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-primary/15 border border-neon-cyan/30 text-neon-cyan font-semibold">
                      {it.score}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80">{it.school}</p>
                  <p className="text-xs text-muted-foreground mt-1">{it.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
