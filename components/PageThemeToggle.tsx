"use client";

import { Music, Tv, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface PageThemeToggleProps {
  currentTheme: "default" | "anime" | "music";
  onThemeChange: (theme: "default" | "anime" | "music") => void;
}

export function PageThemeToggle({ currentTheme, onThemeChange }: PageThemeToggleProps) {
  const themes = [
    { id: "default" as const, icon: Sparkles, label: "Curious", color: "text-primary" },
    { id: "anime" as const, icon: Tv, label: "Anime", color: "text-pink-500" },
    { id: "music" as const, icon: Music, label: "Music", color: "text-purple-500" }
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2">
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-semibold text-muted-foreground"
      >
        which theme do u prefer
      </motion.p>
      <div className="flex items-center gap-2 p-2 rounded-2xl glass border border-border/50 backdrop-blur-xl">
        {themes.map((theme) => (
          <motion.button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative p-3 rounded-xl transition-all ${
              currentTheme === theme.id
                ? "bg-primary/20"
                : "hover:bg-muted/50"
            }`}
            title={theme.label}
          >
            <theme.icon 
              className={`w-5 h-5 transition-colors ${
                currentTheme === theme.id ? theme.color : "text-muted-foreground"
              }`}
            />
            {currentTheme === theme.id && (
              <motion.div
                layoutId="activeTheme"
                className="absolute inset-0 border-2 border-primary/50 rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
