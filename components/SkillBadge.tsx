"use client";
import { cn } from "@/lib/utils";



interface SkillBadgeProps {
  name: string;
  level?: "beginner" | "intermediate" | "advanced";
  delay?: number;
}

const levelColors = {
  beginner: "bg-chart-4/10 text-chart-4 border-chart-4/30",
  intermediate: "bg-chart-2/10 text-chart-2 border-chart-2/30",
  advanced: "bg-primary/10 text-primary border-primary/30"
};

export function SkillBadge({ name, level = "intermediate", delay = 0 }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex px-4 py-2 text-sm font-medium rounded-full border",
        "transition-all duration-300 hover:scale-105",
        "opacity-0 animate-scale-in",
        levelColors[level]
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {name}
    </span>
  );
}
