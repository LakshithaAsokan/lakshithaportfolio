import { Reveal } from "../Reveal";
import { Award } from "lucide-react";

const certs = [
  { title: "Python for Data Science", issuer: "NPTEL" },
  { title: "Data Visualization", issuer: "TATA Forage" },
  { title: "Cloud Foundations", issuer: "AWS Academy" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// CREDENTIALS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Certifications</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="glass rounded-2xl p-7 hover-glow text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-[0_0_30px_oklch(0.65_0.27_295/0.5)] group-hover:rotate-12 transition-transform">
                  <Award size={28} className="text-white" />
                </div>
                <h3 className="font-display text-base font-bold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
