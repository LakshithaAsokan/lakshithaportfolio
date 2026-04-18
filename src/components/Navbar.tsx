import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "w-[95%] max-w-5xl" : "w-[95%] max-w-6xl"
      }`}
    >
      <div className="glass-strong flex items-center justify-between rounded-full px-6 py-3 shadow-lg">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-lg font-bold text-gradient"
        >
          LAKSHITHA
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-white/5"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="rounded-lg px-4 py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
