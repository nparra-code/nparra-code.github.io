import { motion } from "framer-motion";
import { GraduationCap, Calendar, CheckCircle } from "lucide-react";
import { CVData } from "@/data/cvData";

interface EducationSectionProps {
  data: CVData;
  lang: "en" | "es";
}

export const EducationSection = ({ data }: EducationSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {data.education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="bg-card border border-border rounded-lg p-6 card-hover"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-mono font-semibold text-foreground mb-1">
                {edu.degree}
              </h3>
              <p className="text-primary font-medium mb-2">{edu.institution}</p>
              <p className="text-muted-foreground text-sm flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4" />
                {edu.period}
              </p>
              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-terminal-green mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
