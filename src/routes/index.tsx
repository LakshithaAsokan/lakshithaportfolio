import { createFileRoute } from "@tanstack/react-router";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { Languages } from "@/components/sections/Languages";
import { Interests } from "@/components/sections/Interests";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lakshitha A — Web Developer & Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Lakshitha A — aspiring Data Analyst and Web Developer from Pondicherry, India. Projects in AI, data visualization and full-stack web.",
      },
      { property: "og:title", content: "Lakshitha A — Web Developer & Data Analyst" },
      {
        property: "og:description",
        content:
          "Futuristic portfolio showcasing data analytics, web development and AI projects.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Achievements />
          <Languages />
          <Interests />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
