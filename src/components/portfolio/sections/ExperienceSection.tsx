import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { CVData, translations } from "@/data/cvData";

interface ExperienceSectionProps {
  data: CVData;
  lang: "en" | "es";
}

export const ExperienceSection = ({ data, lang }: ExperienceSectionProps) => {
  const t = translations[lang].labels;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {data.experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="bg-card border border-border rounded-lg p-6 card-hover"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/20 rounded-lg">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-mono font-semibold text-foreground mb-1">
                {exp.title}
              </h3>
              <p className="text-accent font-medium mb-2">{exp.company}</p>
              <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div>
                <h4 className="text-sm font-mono text-primary mb-2">{t.achievements}:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Associations */}
      <div className="mt-8">
        <h3 className="text-lg font-mono text-primary mb-4">
          {lang === "en" ? "Professional Associations" : "Asociaciones Profesionales"}
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {data.associations.map((assoc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              className="bg-secondary border border-border rounded-lg p-4 card-hover"
            >
              <h4 className="font-mono font-semibold text-foreground">{assoc.name}</h4>
              <p className="text-primary text-sm mb-1">{assoc.role}</p>
              <p className="text-muted-foreground text-xs mb-2">{assoc.period}</p>
              <p className="text-muted-foreground text-sm">{assoc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
