"use client";

import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  delay?: number;
}

export function CodeBlock({ code, language = "typescript", title, delay = 0 }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden",
        "glass border border-border/50",
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary/30 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-chart-4/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          {title && <span className="ml-3 text-sm text-muted-foreground font-mono">{title}</span>}
        </div>
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
      </div>
      
      {/* Code */}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground/90 leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  );
}
