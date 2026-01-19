import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/portfolio/Header";
import { Navigation } from "@/components/portfolio/Navigation";
import { LanguageToggle } from "@/components/portfolio/LanguageToggle";
import { ProfileSection } from "@/components/portfolio/sections/ProfileSection";
import { EducationSection } from "@/components/portfolio/sections/EducationSection";
import { ExperienceSection } from "@/components/portfolio/sections/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/sections/SkillsSection";
import { LanguagesSection } from "@/components/portfolio/sections/LanguagesSection";
import { cvDataEN, cvDataES } from "@/data/cvData";
import { MapPin } from "lucide-react";

type Section = "profile" | "education" | "experience" | "projects" | "skills" | "languages";
type Language = "en" | "es";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("profile");
  const [lang, setLang] = useState<Language>("en");

  const cvData = lang === "en" ? cvDataEN : cvDataES;

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSection data={cvData} lang={lang} />;
      case "education":
        return <EducationSection data={cvData} lang={lang} />;
      case "experience":
        return <ExperienceSection data={cvData} lang={lang} />;
      case "projects":
        return <ProjectsSection data={cvData} lang={lang} />;
      case "skills":
        return <SkillsSection data={cvData} lang={lang} />;
      case "languages":
        return <LanguagesSection data={cvData} lang={lang} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background scanline">
      {/* Background gradient effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {/* Top bar with language toggle */}
        <div className="flex justify-end mb-6">
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>

        {/* Header */}
        <Header data={cvData} lang={lang} />

        {/* Navigation */}
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          lang={lang}
        />

        {/* Content */}
        <main className="min-h-[50vh]">
          <AnimatePresence mode="wait">
            <motion.div key={activeSection}>{renderSection()}</motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground/60 text-xs mt-2 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Nelson Fernando Parra Guardia | <MapPin className="w-3 h-3 text-primary inline" /> {cvData.profile.location}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
