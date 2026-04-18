import { Reveal } from "../Reveal";
import { Trophy } from "lucide-react";

const items = [
  "Selected participant in Smart India Hackathon",
  "Selected Team Member in CTS Technoverse",
  "Selected Participant in UIP Program — Unisys",
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// HIGHLIGHTS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Achievements</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {items.map((a, i) => (
            <Reveal key={a} delay={i * 100}>
              <div className="glass rounded-2xl p-6 hover-glow text-center">
                <div className="relative w-14 h-14 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-magenta opacity-40 blur-xl animate-glow-pulse" />
                  <div className="relative w-full h-full rounded-full bg-gradient-magenta flex items-center justify-center">
                    <Trophy size={24} className="text-white" />
                  </div>
                </div>
                <p className="text-sm font-medium leading-relaxed">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
