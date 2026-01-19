import { motion } from "framer-motion";
import { translations } from "@/data/cvData";
import { GraduationCap, Briefcase, FolderGit2, Wrench, Languages, User } from "lucide-react";

type Section = "profile" | "education" | "experience" | "projects" | "skills" | "languages";

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  lang: "en" | "es";
}

const sectionIcons = {
  profile: User,
  education: GraduationCap,
  experience: Briefcase,
  projects: FolderGit2,
  skills: Wrench,
  languages: Languages,
};

export const Navigation = ({ activeSection, setActiveSection, lang }: NavigationProps) => {
  const t = translations[lang].nav;

  const sections: Section[] = ["profile", "education", "experience", "projects", "skills", "languages"];

  return (
    <nav className="mb-8 overflow-x-auto pb-2">
      <div className="flex gap-1 min-w-max">
        {sections.map((section) => {
          const Icon = sectionIcons[section];
          const isActive = activeSection === section;

          return (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{t[section]}</span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};
