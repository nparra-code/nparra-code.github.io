import { motion } from "framer-motion";
import { User, Cpu, Bot, Gauge, Terminal } from "lucide-react";
import { CVData } from "@/data/cvData";

interface ProfileSectionProps {
  data: CVData;
  lang: "en" | "es";
}

export const ProfileSection = ({ data, lang }: ProfileSectionProps) => {
  const highlights = lang === "en" 
    ? [
        { icon: Cpu, title: "Embedded Systems", desc: "Real-time applications & firmware development" },
        { icon: Bot, title: "Robotics & AI", desc: "RoboCup SSL, computer vision, neural networks" },
        { icon: Gauge, title: "Industrial Automation", desc: "SCADA, HMI, PLCs, process control" },
        { icon: Terminal, title: "Linux Expert", desc: "Ubuntu, Debian, Fedora distributions" },
      ]
    : [
        { icon: Cpu, title: "Sistemas Embebidos", desc: "Aplicaciones en tiempo real y desarrollo de firmware" },
        { icon: Bot, title: "Robótica e IA", desc: "RoboCup SSL, visión por computador, redes neuronales" },
        { icon: Gauge, title: "Automatización Industrial", desc: "SCADA, HMI, PLCs, control de procesos" },
        { icon: Terminal, title: "Experto en Linux", desc: "Distribuciones Ubuntu, Debian, Fedora" },
      ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <User className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-mono font-semibold text-foreground">
          {lang === "en" ? "About Me" : "Sobre Mí"}
        </h2>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-muted-foreground leading-relaxed text-lg"
      >
        {data.profile.summary}
      </motion.p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
            className="bg-card border border-border rounded-lg p-5 card-hover"
          >
            <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-mono font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
