import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold text-gradient">Lakshitha A</p>
          <p className="text-xs text-muted-foreground mt-1">© 2026 Lakshitha A. All rights reserved.</p>
        </div>

        <div className="flex gap-3">
          {[
            { Icon: GithubIcon, href: "https://github.com/LakshithaAsokan", label: "GitHub" },
            { Icon: LinkedinIcon, href: "https://linkedin.com/in/lakshitha-asokan31", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:lakshithaasokan@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/60 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:scale-105 transition-all glow-purple"
        >
          <ArrowUp size={14} /> Top
        </button>
      </div>
    </footer>
  );
}
