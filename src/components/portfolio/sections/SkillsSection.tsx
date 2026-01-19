import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { CVData } from "@/data/cvData";

interface SkillsSectionProps {
  data: CVData;
  lang: "en" | "es";
}

export const SkillsSection = ({ data }: SkillsSectionProps) => {
  const categoryColors = [
    "bg-primary/10 text-primary border-primary/30",
    "bg-accent/10 text-accent border-accent/30",
    "bg-terminal-green/10 text-terminal-green border-terminal-green/30",
    "bg-orange-500/10 text-orange-400 border-orange-400/30",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {data.skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-secondary rounded-lg">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-mono font-semibold text-foreground">
              {skill.category}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.03, duration: 0.3 }}
                className={`px-3 py-1.5 rounded-md text-sm font-mono border ${categoryColors[index % categoryColors.length]}`}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
