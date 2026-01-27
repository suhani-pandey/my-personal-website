"use client";

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Radial glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
}
