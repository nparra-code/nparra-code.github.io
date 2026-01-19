import { motion } from "framer-motion";
import { Languages, Globe } from "lucide-react";
import { CVData, translations } from "@/data/cvData";

interface LanguagesSectionProps {
  data: CVData;
  lang: "en" | "es";
}

export const LanguagesSection = ({ data, lang }: LanguagesSectionProps) => {
  const t = translations[lang].labels;

  const languageColors = [
    { bg: "bg-primary/10", border: "border-primary", progress: "bg-primary" },
    { bg: "bg-accent/10", border: "border-accent", progress: "bg-accent" },
    { bg: "bg-terminal-green/10", border: "border-terminal-green", progress: "bg-terminal-green" },
  ];

  const getProgressWidth = (level: string) => {
    if (level.toLowerCase().includes("native") || level.toLowerCase().includes("nativo")) return "100%";
    if (level.toLowerCase().includes("c1") || level.toLowerCase().includes("professional")) return "85%";
    if (level.toLowerCase().includes("b2") || level.toLowerCase().includes("intermediate")) return "60%";
    return "40%";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-secondary rounded-lg">
          <Globe className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-mono font-semibold text-foreground">
          {lang === "en" ? "Language Proficiencies" : "Competencias Lingüísticas"}
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {data.languages.map((language, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`${languageColors[index].bg} border ${languageColors[index].border} rounded-lg p-6 card-hover`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Languages className="w-5 h-5" />
              <h4 className="font-mono font-semibold text-lg">{language.language}</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{language.level}</p>
            <div className="h-2 bg-background/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: getProgressWidth(language.level) }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                className={`h-full ${languageColors[index].progress} rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
