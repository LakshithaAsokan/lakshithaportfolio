import { Mail, Download, ArrowDown } from "lucide-react";
import { TypingText } from "../TypingText";
import { GithubIcon, LinkedinIcon } from "../SocialIcons";
import profileImg from "@/assets/profile.jpg";

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg opacity-40 animate-grid" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs font-medium text-neon-cyan">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            Available for opportunities
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-gradient">Lakshitha A</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-3 min-h-[2.5rem]">
            <TypingText
              phrases={[
                "Web Developer | Data Analyst",
                "Turning Data into Insightful Solutions",
                "Building the Future, One Line at a Time",
              ]}
            />
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Aspiring Data Analyst and Web Developer based in Pondicherry, India. Passionate about
            transforming data into impactful, intelligent solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 font-semibold text-primary-foreground glow-purple transition-all hover:scale-105 hover:shadow-[0_0_50px_oklch(0.65_0.27_295/0.7)]"
            >
              View Projects
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("resume")}
              className="inline-flex items-center gap-2 glass rounded-full px-7 py-3 font-semibold text-foreground hover:border-neon-cyan/50 transition-all hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            {[
              { icon: Github, href: "https://github.com/LakshithaAsokan", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/lakshitha-asokan31", label: "LinkedIn" },
              { icon: Mail, href: "mailto:lakshithaasokan@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass w-11 h-11 rounded-full flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/60 hover:shadow-[0_0_20px_oklch(0.85_0.18_200/0.6)] transition-all hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-50 blur-3xl animate-glow-pulse" />
            <div className="absolute inset-0 rounded-full border-2 border-neon-cyan/30" />
            <div className="absolute -inset-3 rounded-full border border-neon-purple/20 animate-spin" style={{ animationDuration: "20s" }} />
            <img
              src={profileImg}
              alt="Lakshitha A"
              width={320}
              height={320}
              className="relative z-10 w-full h-full rounded-full object-cover border-2 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
