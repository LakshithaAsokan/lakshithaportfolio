import { useState } from "react";
import { Reveal } from "../Reveal";
import { ExternalLink, Sparkles } from "lucide-react";
import projectDivya from "@/assets/project-divya.jpg";
import projectPlacement from "@/assets/project-placement.jpg";
import projectDoctor from "@/assets/project-doctor.jpg";

type Project = {
  title: string;
  description: string;
  tech: string[];
  impact?: string;
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Divya Drishti — Proactive Crowd Safety with Agentic AI",
    description:
      "Developed an AI-based crowd monitoring system capable of predicting congestion risks, dispatching emergency responders, and visualizing crowd activity in real-time using a 3D spatial interface.",
    tech: ["AI", "DBSCAN", "Haversine", "Firebase", "FastAPI", "Unity", "Google Maps API"],
    impact: "Improves emergency response and enhances safety during large public events.",
    image: projectDivya,
    featured: true,
  },
  {
    title: "Placement Insight Dashboard",
    description:
      "Data-driven placement analytics dashboard to visualize recruitment trends, salary distributions, and company eligibility filtering. Integrated Firebase auth and profile management.",
    tech: ["Power BI", "SQL", "HTML", "CSS", "JavaScript", "Firebase"],
    impact: "Helped 100+ students improve placement prep, increased shortlisting rates by 25%.",
    image: projectPlacement,
  },
  {
    title: "AI Symptom-Based Doctor Recommendation",
    description:
      "Built an intelligent healthcare assistant that recommends doctors based on patient symptoms using natural language processing and machine learning.",
    tech: ["Python", "NLP", "Machine Learning"],
    image: projectDoctor,
  },
];

const allTech = Array.from(new Set(projects.flatMap((p) => p.tech))).sort();

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));
  const featured = filtered.find((p) => p.featured);
  const grid = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// MY WORK</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {["All", ...allTech].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`text-xs px-4 py-1.5 rounded-full border transition-all ${
                  filter === t
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-[0_0_20px_oklch(0.65_0.27_295/0.5)]"
                    : "glass text-muted-foreground hover:text-foreground hover:border-neon-cyan/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        {featured && (
          <Reveal>
            <div className="glass-strong rounded-3xl overflow-hidden mb-8 hover-glow group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 lg:h-auto">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="lazy"
                    width={1280}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 lg:to-transparent to-background/20" />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-gradient-magenta px-3 py-1 rounded-full text-xs font-bold text-white">
                    <Sparkles size={12} /> FEATURED
                  </div>
                </div>
                <div className="p-7 lg:p-9 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{featured.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{featured.description}</p>
                  {featured.impact && (
                    <p className="text-sm text-neon-cyan mb-5 italic">→ {featured.impact}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full glass border-neon-purple/30 text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {grid.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="glass rounded-2xl overflow-hidden hover-glow group h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold mb-2 flex items-center gap-2">
                    {p.title}
                    <ExternalLink size={14} className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  {p.impact && <p className="text-xs text-neon-cyan mb-3 italic">→ {p.impact}</p>}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
