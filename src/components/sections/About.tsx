import { useEffect, useRef, useState } from "react";
import { Reveal } from "../Reveal";
import { Code2, Database, Award } from "lucide-react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1500;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setVal(Math.floor(p * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gradient">
      {val}
      {suffix}
    </div>
  );
}

export function About() {
  const stats = [
    { icon: Code2, label: "Projects Completed", end: 3, suffix: "+" },
    { icon: Database, label: "Technologies Learned", end: 10, suffix: "+" },
    { icon: Award, label: "Certifications", end: 3, suffix: "" },
  ];

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// INTRODUCTION</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="glass rounded-2xl p-8 hover-glow">
              <p className="text-base md:text-lg leading-relaxed text-foreground/85">
                Adaptable and technology-driven enthusiast with a strong passion for{" "}
                <span className="text-neon-cyan font-semibold">Data Analytics</span> and{" "}
                <span className="text-neon-purple font-semibold">web technologies</span>. Quick to
                learn new tools and technologies, eager to take on challenges, and skilled at
                solving complex problems. Committed to delivering effective solutions that foster
                innovation and growth.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-semibold">Pondicherry, India</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Focus</p>
                  <p className="font-semibold">Data + Web</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid gap-4">
              {stats.map(({ icon: Icon, label, end, suffix }) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-6 flex items-center gap-5 hover-glow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary/20 border border-neon-purple/30 flex items-center justify-center shrink-0">
                    <Icon className="text-neon-cyan" size={26} />
                  </div>
                  <div>
                    <Counter end={end} suffix={suffix} />
                    <p className="text-sm text-muted-foreground mt-1">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
