"use client";

import Link from "next/link";
import { Briefcase, Sparkles, Code2, Rocket, Zap, Star, Brain } from "lucide-react";
import { PathCard } from "@/components/PathCard";
import { TerminalText } from "@/components/TerminalText";
import { GridBackground } from "@/components/GridBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const paths = [
    {
      icon: Briefcase,
      title: "I'm a Recruiter",
      description: "View my professional experience, projects, skills and download my resume.",
      route: "/recruiter",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "I'm Just Curious",
      description: "Explore my creative journey, AI experiments and personal interests.",
      route: "/curious",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      <GridBackground />

      {/* Animated background elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </motion.div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { Icon: Code2, delay: 0, x: "10%", y: "20%" },
          { Icon: Rocket, delay: 0.5, x: "85%", y: "15%" },
          { Icon: Brain, delay: 1, x: "15%", y: "75%" },
          { Icon: Zap, delay: 1.5, x: "80%", y: "70%" },
          { Icon: Star, delay: 2, x: "50%", y: "10%" }
        ].map(({ Icon, delay, x, y }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              delay: delay + 1,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="absolute"
            style={{ left: x, top: y }}
          >
            <Icon className="w-8 h-8 text-primary/30" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        {/* Animated particles around header */}
        <div className="relative mb-12">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: [0, Math.cos(i * 45 * Math.PI / 180) * 150],
                y: [0, Math.sin(i * 45 * Math.PI / 180) * 150]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full"
            />
          ))}

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <motion.span 
              animate={{
                boxShadow: [
                  "0 0 20px rgba(var(--primary-rgb), 0.3)",
                  "0 0 40px rgba(var(--primary-rgb), 0.5)",
                  "0 0 20px rgba(var(--primary-rgb), 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold glass border border-primary/30"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-primary"
              />
              Available for opportunities
            </motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
          >
            Hi, I'm{" "}
            <span 
              className="bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary"
              style={{ 
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
              }}
            >
              Suhani Pandey
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6 text-lg md:text-xl flex-wrap"
          >
            {["Software Engineer", "AI Enthusiast", "Builder"].map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-muted-foreground"
              >
                {role}
                {i < 2 && <span className="mx-2 text-primary">·</span>}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <TerminalText 
              text=">>> 'What would you like to explore?" 
              delay={1000}
              className="text-lg font-mono"
            />
          </motion.div>
        </div>

        {/* Enhanced Path Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {paths.map((path, index) => (
            <Link key={path.title} href={path.route}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated border gradient */}
                <motion.div
                  className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, var(--primary), var(--accent), var(--secondary), var(--primary))`,
                    backgroundSize: "300% 300%"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative h-full p-8 rounded-3xl glass border border-border/50 group-hover:bg-card/90 transition-all">
                  {/* Floating icon */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${path.gradient} p-4 relative`}
                  >
                    <path.icon className="w-full h-full text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                    {path.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {path.description}
                  </p>

                  {/* Animated arrow */}
                  <motion.div
                    className="flex items-center justify-center gap-2 text-primary font-semibold"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span>Explore</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>

                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Enhanced footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20"
        >
          <motion.p 
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-muted-foreground"
          >
            <span className="text-primary font-mono">{'</'}</span>
            Each path reveals a different perspective of my work
            <span className="text-primary font-mono">{'/>'}</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
