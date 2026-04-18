import { Reveal } from "../Reveal";
import { Languages as LangIcon } from "lucide-react";

const langs = [
  { name: "Tamil", level: "Native", percent: 100 },
  { name: "English", level: "Fluent", percent: 90 },
  { name: "French", level: "Basic", percent: 35 },
  { name: "Telugu", level: "Basic", percent: 35 },
];

export function Languages() {
  return (
    <section id="languages" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// COMMUNICATION</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Languages</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {langs.map((l, i) => (
            <Reveal key={l.name} delay={i * 80}>
              <div className="glass rounded-2xl p-5 hover-glow">
                <div className="flex items-center gap-3 mb-3">
                  <LangIcon size={18} className="text-neon-cyan" />
                  <span className="font-display font-bold flex-1">{l.name}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-gradient-primary/15 border border-neon-purple/30 text-neon-cyan">
                    {l.level}
                  </span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full"
                    style={{ width: `${l.percent}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
