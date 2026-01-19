import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChartNoAxesGantt, Phone } from "lucide-react";
import { CVData } from "@/data/cvData";

interface HeaderProps {
  data: CVData;
  lang: "en" | "es";
}

export const Header = ({ data, lang }: HeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative border-b border-border pb-8 mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-2">
            <span className="text-primary">{">"}</span> {data.profile.name}
            <span className="terminal-cursor text-primary">_</span>
          </h1>
          <p className="text-muted-foreground flex items-center gap-2 mt-3">
            <ChartNoAxesGantt className="w-4 h-4 text-primary" />
            Electronic Engineering Student | Embedded Systems | Industrial Automation | AI Enthusiast
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={data.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md border border-border card-hover text-sm font-mono"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={data.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md border border-border card-hover text-sm font-mono"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-muted-foreground leading-relaxed max-w-4xl"
      >
        {data.profile.summary}
      </motion.p>

      <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          {data.profile.phone}
        </span>
        {data.profile.emails.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            {email}
          </a>
        ))}
      </div>
    </motion.header>
  );
};
