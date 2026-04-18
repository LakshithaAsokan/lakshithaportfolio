import { Reveal } from "../Reveal";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// JOURNEY</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Experience</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-cyan to-transparent md:-translate-x-px" />

          <Reveal>
            <div className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
              <div className="md:text-right md:pr-12">
                <div className="absolute left-3 md:left-1/2 top-2 w-5 h-5 rounded-full bg-gradient-primary border-2 border-background shadow-[0_0_20px_oklch(0.65_0.27_295/0.7)] -translate-x-1/2" />
                <div className="inline-flex items-center gap-2 text-sm text-neon-cyan mb-1">
                  <Calendar size={14} />
                  Feb 10, 2025 – Mar 10, 2025
                </div>
              </div>
              <div className="glass rounded-2xl p-6 hover-glow md:ml-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 border border-neon-purple/30 flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">Front End Developer Intern</h3>
                    <p className="text-sm text-muted-foreground">CODTECH IT SOLUTIONS</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Built responsive web pages with modern frameworks",
                    "Worked with SQL databases for data operations",
                    "Managed and analyzed Excel datasets",
                    "Developed reusable UI components",
                  ].map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-neon-cyan mt-1">▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
