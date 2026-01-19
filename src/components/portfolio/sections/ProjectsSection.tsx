import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { CVData } from "@/data/cvData";

interface ProjectsSectionProps {
  data: CVData;
  lang: "en" | "es";
}

export const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid gap-4 md:grid-cols-2"
    >
      {data.projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="bg-card border border-border rounded-lg p-6 card-hover group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-terminal-green/10 rounded-lg group-hover:bg-terminal-green/20 transition-colors">
              <FolderGit2 className="w-6 h-6 text-terminal-green" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-mono font-semibold text-foreground">
                  {project.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
