import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Briefcase, Rocket } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface FancyTimelineProps {
  items: TimelineItem[];
}

const icons = [GraduationCap, Lightbulb, Briefcase, Rocket];

export const FancyTimeline = ({ items }: FancyTimelineProps) => {
  return (
    <div className="relative py-8">
      {/* Main flowing timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
        <div className="w-full h-full timeline-line rounded-full" />
        {/* Animated glow effect */}
        <div className="absolute inset-0 w-full h-full blur-md timeline-line opacity-50" />
      </div>

      {/* Mobile timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 md:hidden">
        <div className="w-full h-full timeline-line rounded-full" />
        <div className="absolute inset-0 w-full h-full blur-md timeline-line opacity-50" />
      </div>

      {/* Timeline items */}
      <div className="space-y-16 md:space-y-24">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center gap-8 md:gap-0 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node/Circle */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                <div className="timeline-node w-16 h-16 rounded-full flex items-center justify-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
              </div>

              {/* Year badge - floating */}
              <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${
                isEven ? "left-[calc(50%+3rem)]" : "right-[calc(50%+3rem)]"
              }`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: isEven ? 5 : -5 }}
                  className="px-4 py-2 rounded-full gradient-border bg-card text-primary font-bold text-lg glow"
                >
                  {item.year}
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-24 md:ml-0 md:w-[calc(50%-5rem)] ${
                isEven ? "md:pr-8" : "md:pl-8"
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                >
                  {/* Card glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
                  
                  <div className="relative p-6 md:p-8 rounded-2xl glass border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                    {/* Mobile year badge */}
                    <div className="md:hidden mb-4">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold text-primary bg-primary/10">
                        {item.year}
                      </span>
                    </div>

                    <h3 className={`text-xl md:text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className={`text-muted-foreground leading-relaxed ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}>
                      {item.description}
                    </p>

                    {/* Decorative corner accent */}
                    <div className={`absolute ${isEven ? "top-4 right-4" : "top-4 left-4"} w-8 h-8 opacity-20`}>
                      <div className="w-full h-full border-t-2 border-r-2 border-primary rounded-tr-lg" />
                    </div>
                    <div className={`absolute ${isEven ? "bottom-4 left-4" : "bottom-4 right-4"} w-8 h-8 opacity-20`}>
                      <div className="w-full h-full border-b-2 border-l-2 border-accent rounded-bl-lg" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-[calc(50%-5rem)]" />
            </motion.div>
          );
        })}
      </div>

      {/* End node */}
      <div className="absolute left-8 md:left-1/2 bottom-0 -translate-x-1/2">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
      </div>
    </div>
  );
};
