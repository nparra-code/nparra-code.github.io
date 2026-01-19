import { motion } from "framer-motion";

interface LanguageToggleProps {
  lang: "en" | "es";
  setLang: (lang: "en" | "es") => void;
}

export const LanguageToggle = ({ lang, setLang }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-2 bg-secondary rounded-full p-1 border border-border">
      <motion.button
        onClick={() => setLang("en")}
        className={`relative px-3 py-1 rounded-full text-sm font-mono transition-colors ${
          lang === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {lang === "en" && (
          <motion.div
            layoutId="langIndicator"
            className="absolute inset-0 bg-primary rounded-full"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </motion.button>
      <motion.button
        onClick={() => setLang("es")}
        className={`relative px-3 py-1 rounded-full text-sm font-mono transition-colors ${
          lang === "es" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {lang === "es" && (
          <motion.div
            layoutId="langIndicator"
            className="absolute inset-0 bg-primary rounded-full"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">ES</span>
      </motion.button>
    </div>
  );
};
