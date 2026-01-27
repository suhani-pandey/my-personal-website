"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PathCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function PathCard({ icon: Icon, title, description, delay = 0 }: PathCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden p-8 rounded-2xl",
        "glass border border-border/50 hover:border-primary/50",
        "transition-all duration-500 ease-out",
        "hover:glow hover:-translate-y-2",
        "opacity-0 animate-fade-in-up",
        "w-full max-w-sm text-left cursor-pointer"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="relative z-10">
        <div className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
          <span>Explore</span>
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
