import { Reveal } from "../Reveal";
import { Code2, BarChart3, Mic } from "lucide-react";

const interests = [
  { icon: Code2, title: "Web Development", desc: "Building modern, responsive interfaces" },
  { icon: BarChart3, title: "Data Analytics", desc: "Extracting insights from data" },
  { icon: Mic, title: "Public Speaking", desc: "Sharing ideas and inspiring others" },
];

export function Interests() {
  return (
    <section id="interests" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// PASSIONS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              My <span className="text-gradient">Interests</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {interests.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="glass rounded-2xl p-7 hover-glow text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-primary/15 border border-neon-cyan/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={26} className="text-neon-cyan" />
                </div>
                <h3 className="font-display text-base font-bold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
