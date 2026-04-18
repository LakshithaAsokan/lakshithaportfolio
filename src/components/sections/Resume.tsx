import { Reveal } from "../Reveal";
import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-neon-purple/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-neon-cyan/20 blur-3xl rounded-full" />

            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center animate-glow-pulse">
                <FileText size={32} className="text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Grab My <span className="text-gradient">Resume</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Want to know more about my experience and skills? Download a copy of my resume.
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 font-semibold text-primary-foreground glow-purple transition-all hover:scale-105 hover:shadow-[0_0_60px_oklch(0.65_0.27_295/0.7)]"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
