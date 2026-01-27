"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Wand2, Brain, Palette, Music, ExternalLink, Star, Zap, Rocket, BookOpen, Coffee, Code2, Lightbulb, Heart, Tv } from "lucide-react";
import { GridBackground } from "@/components/GridBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackButton } from "@/components/BackButton";
import { SectionTitle } from "@/components/SectionTitle";
import { FancyTimeline } from "@/components/FancyTimeline";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";


const timeline = [
  {
    year: "2025",
    title: "Started Master's at DTU",
    description: "Beginning Master's in Computer Science specialized in AI at Technical University of Denmark. Diving deep into advanced machine learning, data science, and data security."
  },
  {
    year: "2024",
    title: "Bachelor Project",
    description: "Built different projects during my Bachelor's studies. This project sparked my passion for how language and visuals work together in AI."
  },
  {
    year: "2024",
    title: "Software Engineering Intern",
    description: "Worked at Kamstrup A/S managing nuget packages and developing applications using C# and WPF. Learned about real-world software development practices."
  },
  {
    year: "2022",
    title: "Started Bachelor's Journey",
    description: "Began Bachelor's in Software Engineering at VIA University College. Discovered my love for Machine Learning and Full-Stack Development."
  }
];

const interests = [
  "Generative AI",
  "Diffusion Models",
  "Prompt Engineering",
  "Full-Stack Development",
  "Music",
  "Machine Learning Research",
  "Open Source"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Curious() {
  const [hoveredTheme, setHoveredTheme] = useState<"music" | "anime" | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animeAudioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Set document title dynamically
  useEffect(() => {
    document.title = "The Curious Corner | My Portfolio";
  }, []);

  // Handle music playback with guitar solo MP3
  useEffect(() => {
    if (hoveredTheme !== "music") return;

    const audio = new Audio('/guitar-solo-guitar-music-471272.mp3');
    audio.volume = 0.5;
    audio.loop = true;
    
    audio.play().catch(err => {
      console.log('Audio play prevented:', err);
    });
    
    console.log('🎵 Music started playing!');

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [hoveredTheme]);

  // Handle anime domain expansion audio - Gojo's voice
  useEffect(() => {
    if (hoveredTheme === "anime") {
      const audio = new Audio('/domain expansion.mp3');
      audio.volume = 0.6;
      
      audio.play().catch(err => {
        console.log('Audio play prevented:', err);
      });
      
      console.log('🌀 Domain Expansion!');

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [hoveredTheme]);

  const musicQuotes = [
    "Music is life itself",
    "Where words fail, music speaks",
    "One good thing about music...",
    "Music is the universal language",
    "Life is a song, love is the music",
    "Music gives soul to the universe"
  ];

  return (
    <div ref={containerRef} className="min-h-screen px-6 py-20 relative overflow-hidden">
      <GridBackground />
      <ThemeToggle />
      <BackButton />

      {/* Themed background overlays on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredTheme === "music" ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        {/* Fancy gradient background with animated blobs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredTheme === "music" ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Animated gradient blobs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: `${20 + i * 20}%`, y: `${20 + i * 15}%` }}
              animate={{
                scale: hoveredTheme === "music" ? [0, 1.5, 1.2, 1.5] : 0,
                x: hoveredTheme === "music" 
                  ? [`${20 + i * 20}%`, `${30 + i * 15}%`, `${15 + i * 20}%`, `${20 + i * 20}%`]
                  : `${20 + i * 20}%`,
                y: hoveredTheme === "music" 
                  ? [`${20 + i * 15}%`, `${15 + i * 20}%`, `${30 + i * 15}%`, `${20 + i * 15}%`]
                  : `${20 + i * 15}%`,
                rotate: hoveredTheme === "music" ? [0, 180, 360] : 0
              }}
              transition={{
                duration: 8 + i,
                repeat: hoveredTheme === "music" ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute rounded-full blur-3xl"
              style={{
                width: "400px",
                height: "400px",
                background: [
                  "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(244, 114, 182, 0.4) 0%, transparent 70%)"
                ][i]
              }}
            />
          ))}
        </motion.div>

        {/* Floating Music icons with various styles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => {
            const icons = [
              <Music key={i} className="w-12 h-12" />,
              <svg key={i} className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>,
              <svg key={i} className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>,
              <svg key={i} className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M6 16h.01M10 16h.01M14 16h.01M18 16h.01" />
              </svg>
            ];
            
            const randomX = Math.random() * 100;
            const randomDuration = 8 + Math.random() * 6;
            
            return (
              <motion.div
                key={i}
                initial={{ 
                  x: `${randomX}vw`,
                  y: "120vh",
                  opacity: 0,
                  rotate: 0
                }}
                animate={{
                  x: hoveredTheme === "music" 
                    ? [`${randomX}vw`, `${randomX + (Math.random() - 0.5) * 30}vw`, `${randomX}vw`]
                    : `${randomX}vw`,
                  y: hoveredTheme === "music" ? "-20vh" : "120vh",
                  opacity: hoveredTheme === "music" ? [0, 0.9, 0.9, 0.7, 0] : 0,
                  rotate: hoveredTheme === "music" ? [0, 360, 720] : 0,
                  scale: hoveredTheme === "music" ? [0.8, 1.2, 0.9, 1.1, 0.8] : 0.8
                }}
                transition={{
                  duration: randomDuration,
                  repeat: hoveredTheme === "music" ? Infinity : 0,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className="absolute text-purple-400"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))",
                }}
              >
                {icons[i % icons.length]}
              </motion.div>
            );
          })}
        </div>

        {/* Particle sparkles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: 0,
                opacity: 0
              }}
              animate={{
                scale: hoveredTheme === "music" ? [0, 1, 0] : 0,
                opacity: hoveredTheme === "music" ? [0, 1, 0] : 0,
                x: hoveredTheme === "music" 
                  ? [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                  : `${Math.random() * 100}%`,
                y: hoveredTheme === "music" 
                  ? [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                  : `${Math.random() * 100}%`
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: hoveredTheme === "music" ? Infinity : 0,
                delay: i * 0.05,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8), 0 0 20px 4px rgba(168, 85, 247, 0.6)"
              }}
            />
          ))}
        </div>

        {/* Elegant wave lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 0 ${50 + i * 10} Q ${25 + i * 5} ${30 + i * 10}, 50 ${50 + i * 10} T 100 ${50 + i * 10}`}
              stroke={`rgba(168, 85, 247, ${0.3 - i * 0.03})`}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: hoveredTheme === "music" ? [0, 1, 0] : 0,
                opacity: hoveredTheme === "music" ? [0, 0.6, 0] : 0,
                y: hoveredTheme === "music" ? [0, -20, 0] : 0
              }}
              transition={{
                duration: 4,
                repeat: hoveredTheme === "music" ? Infinity : 0,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              style={{
                filter: "drop-shadow(0 0 4px rgba(168, 85, 247, 0.8))"
              }}
            />
          ))}
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredTheme === "anime" ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        {/* Elegant gradient background with animated blobs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredTheme === "anime" ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Animated gradient blobs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: `${15 + i * 18}%`, y: `${15 + i * 18}%` }}
              animate={{
                scale: hoveredTheme === "anime" ? [0, 1.8, 1.4, 1.8] : 0,
                x: hoveredTheme === "anime" 
                  ? [`${15 + i * 18}%`, `${25 + i * 15}%`, `${10 + i * 18}%`, `${15 + i * 18}%`]
                  : `${15 + i * 18}%`,
                y: hoveredTheme === "anime" 
                  ? [`${15 + i * 18}%`, `${10 + i * 20}%`, `${25 + i * 18}%`, `${15 + i * 18}%`]
                  : `${15 + i * 18}%`,
                rotate: hoveredTheme === "anime" ? [0, 180, 360] : 0
              }}
              transition={{
                duration: 7 + i,
                repeat: hoveredTheme === "anime" ? Infinity : 0,
                ease: "easeInOut",
                delay: i * 0.4
              }}
              className="absolute rounded-full blur-3xl"
              style={{
                width: "450px",
                height: "450px",
                background: [
                  "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(126, 34, 206, 0.5) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(109, 40, 217, 0.5) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(88, 28, 135, 0.5) 0%, transparent 70%)"
                ][i]
              }}
            />
          ))}
        </motion.div>

        {/* Flowing Kanji and information streams - SPINNING AND CONVERGING */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(120)].map((_, i) => {
            const kanji = ['無', '限', '虚', '式', '空', '間', '時', '界', '魔', '神', '呪', '術', '領', '域', '展', '開', '∞', '∅', '√', '∑', '五条悟', '呪力', '反転術式', '術式順転', '蒼', '赫', '茈', '六眼', '無下限呪術', '情報', '知識', '∞∞∞'][i % 34];
            
            // Generate random angle for orbital path
            const baseAngle = (i * 360 / 120);
            const orbitRadius = 40 + (i % 3) * 15;
            
            return (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0,
                  scale: 0.2,
                  rotate: 0
                }}
                animate={{
                  opacity: hoveredTheme === "anime" ? [0, 1, 1, 0.8, 0] : 0,
                  scale: hoveredTheme === "anime" ? [0.2, 1, 1.5, 2, 2.5] : 0.2,
                  rotate: hoveredTheme === "anime" ? [0, 360, 720] : 0,
                  x: hoveredTheme === "anime" 
                    ? [
                        `${50 + Math.cos(baseAngle * Math.PI / 180) * orbitRadius}vw`,
                        `${50 + Math.cos((baseAngle + 180) * Math.PI / 180) * orbitRadius}vw`,
                        `${50 + Math.cos((baseAngle + 270) * Math.PI / 180) * (orbitRadius / 2)}vw`,
                        '50vw'
                      ]
                    : `${50 + Math.cos(baseAngle * Math.PI / 180) * orbitRadius}vw`,
                  y: hoveredTheme === "anime"
                    ? [
                        `${50 + Math.sin(baseAngle * Math.PI / 180) * orbitRadius}vh`,
                        `${50 + Math.sin((baseAngle + 180) * Math.PI / 180) * orbitRadius}vh`,
                        `${50 + Math.sin((baseAngle + 270) * Math.PI / 180) * (orbitRadius / 2)}vh`,
                        '50vh'
                      ]
                    : `${50 + Math.sin(baseAngle * Math.PI / 180) * orbitRadius}vh`
                }}
                transition={{
                  duration: 2 + Math.random() * 1,
                  repeat: hoveredTheme === "anime" ? Infinity : 0,
                  delay: i * 0.01,
                  ease: "easeInOut"
                }}
                className="absolute text-base md:text-xl font-bold text-purple-300"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(168, 85, 247, 0.9)) drop-shadow(0 0 12px rgba(126, 34, 206, 0.6))",
                  fontFamily: "'Noto Sans JP', sans-serif",
                  transform: "translate(-50%, -50%)"
                }}
              >
                {kanji}
              </motion.div>
            );
          })}
        </div>

        {/* Additional rapid text streams spinning and converging */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(80)].map((_, i) => {
            const texts = ['情報過多', 'OVERLOAD', '無限', 'INFINITE', 'データ', 'VOID', '領域', 'DOMAIN', '展開', 'EXPANSION'];
            const text = texts[i % texts.length];
            
            const angle = (i * 360 / 80);
            const radius = 50 + (i % 4) * 10;
            
            return (
              <motion.div
                key={`text-${i}`}
                initial={{ 
                  opacity: 0,
                  scale: 0.2
                }}
                animate={{
                  opacity: hoveredTheme === "anime" ? [0, 0.9, 0.9, 0] : 0,
                  scale: hoveredTheme === "anime" ? [0.2, 1, 1.5, 2] : 0.2,
                  rotate: hoveredTheme === "anime" ? [0, 180, 360] : 0,
                  x: hoveredTheme === "anime"
                    ? [
                        `${50 + Math.cos(angle * Math.PI / 180) * radius}%`,
                        `${50 + Math.cos((angle + 120) * Math.PI / 180) * radius}%`,
                        `${50 + Math.cos((angle + 240) * Math.PI / 180) * (radius / 3)}%`,
                        '50%'
                      ]
                    : `${50 + Math.cos(angle * Math.PI / 180) * radius}%`,
                  y: hoveredTheme === "anime"
                    ? [
                        `${50 + Math.sin(angle * Math.PI / 180) * radius}%`,
                        `${50 + Math.sin((angle + 120) * Math.PI / 180) * radius}%`,
                        `${50 + Math.sin((angle + 240) * Math.PI / 180) * (radius / 3)}%`,
                        '50%'
                      ]
                    : `${50 + Math.sin(angle * Math.PI / 180) * radius}%`
                }}
                transition={{
                  duration: 1.5 + Math.random() * 1,
                  repeat: hoveredTheme === "anime" ? Infinity : 0,
                  delay: i * 0.008,
                  ease: "easeInOut"
                }}
                className="absolute text-sm md:text-base font-bold text-purple-400 whitespace-nowrap"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(168, 85, 247, 0.8))",
                  transform: "translate(-50%, -50%)"
                }}
              >
                {text}
              </motion.div>
            );
          })}
        </div>

        {/* Data streams - lines converging to center */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const angle = (i * 360 / 50);
            const startX = 50 + Math.cos(angle * Math.PI / 180) * 70;
            const startY = 50 + Math.sin(angle * Math.PI / 180) * 70;
            
            return (
              <motion.div
                key={i}
                className="absolute origin-center"
                style={{
                  left: '50%',
                  top: '50%'
                }}
              >
                <motion.div
                  initial={{ 
                    scaleX: 0,
                    opacity: 0
                  }}
                  animate={{
                    scaleX: hoveredTheme === "anime" ? [0, 1, 0] : 0,
                    opacity: hoveredTheme === "anime" ? [0, 0.8, 0] : 0
                  }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.6,
                    repeat: hoveredTheme === "anime" ? Infinity : 0,
                    delay: i * 0.02,
                    ease: "easeIn"
                  }}
                  className="h-0.5 w-96"
                  style={{
                    background: "linear-gradient(to left, transparent, rgba(168, 85, 247, 0.8))",
                    boxShadow: "0 0 10px 2px rgba(168, 85, 247, 0.6)",
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: "right center"
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Particle sparkles - MORE AND FASTER */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: 0,
                opacity: 0
              }}
              animate={{
                scale: hoveredTheme === "anime" ? [0, 1.5, 0] : 0,
                opacity: hoveredTheme === "anime" ? [0, 1, 0] : 0,
                x: hoveredTheme === "anime" 
                  ? [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                  : `${Math.random() * 100}%`,
                y: hoveredTheme === "anime" 
                  ? [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                  : `${Math.random() * 100}%`
              }}
              transition={{
                duration: 0.8 + Math.random() * 1,
                repeat: hoveredTheme === "anime" ? Infinity : 0,
                delay: i * 0.01,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.9), 0 0 20px 4px rgba(168, 85, 247, 0.7)"
              }}
            />
          ))}
        </div>

        {/* Hexagonal patterns flowing - FASTER */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(30)].map((_, i) => {
            const x = (i % 6) * 15;
            const y = Math.floor(i / 6) * 20;
            return (
              <motion.polygon
                key={i}
                points="50,15 90,37.5 90,82.5 50,105 10,82.5 10,37.5"
                stroke="rgba(168, 85, 247, 0.6)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: hoveredTheme === "anime" ? [0, 1, 0] : 0,
                  opacity: hoveredTheme === "anime" ? [0, 0.6, 0] : 0,
                  y: hoveredTheme === "anime" ? [0, 100, 200] : 0
                }}
                transition={{
                  duration: 2,
                  repeat: hoveredTheme === "anime" ? Infinity : 0,
                  delay: i * 0.05,
                  ease: "linear"
                }}
                transform={`translate(${x * 10}, ${y * 10})`}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(168, 85, 247, 0.8))"
                }}
              />
            );
          })}
        </svg>

        {/* Flowing eye symbols (Gojo's six eyes reference) - MORE AND FASTER */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: "120%",
                opacity: 0,
                rotate: 0
              }}
              animate={{
                x: hoveredTheme === "anime" 
                  ? [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                  : `${Math.random() * 100}%`,
                y: hoveredTheme === "anime" ? "-20%" : "120%",
                opacity: hoveredTheme === "anime" ? [0, 0.8, 0.8, 0] : 0,
                rotate: hoveredTheme === "anime" ? [0, 360, 720] : 0
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: hoveredTheme === "anime" ? Infinity : 0,
                delay: i * 0.08,
                ease: "linear"
              }}
              className="absolute text-4xl md:text-5xl"
              style={{
                filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.9))"
              }}
            >
              👁️
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated background blobs */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </motion.div>

      <div className="max-w-7xl mx-auto pt-16 relative z-10">
        {/* Hero Header with floating elements */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-32 text-center relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 200],
                  y: [0, (Math.random() - 0.5) * 200]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  repeatDelay: 1
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full"
              />
            ))}
          </div>
          
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="mb-8 relative inline-block"
          >
            <div className="relative">
              <Sparkles className="w-20 h-20 text-primary" />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              The Curious Corner
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Where <span className="text-primary font-semibold">AI meets creativity</span>, 
            experiments come to life, and <span className="text-accent font-semibold">curiosity drives innovation</span>
          </motion.p>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-10 right-[15%] hidden lg:block"
          >
            <Star className="w-8 h-8 text-accent/60" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-10 left-[10%] hidden lg:block"
          >
            <Zap className="w-7 h-7 text-secondary/60" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              x: [-10, 10, -10]
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-1/2 right-[5%] hidden xl:block"
          >
            <Rocket className="w-6 h-6 text-primary/40" />
          </motion.div>
        </motion.div>

        {/* Journey Timeline */}
        <section className="mb-40">
          <SectionTitle 
            title="My Journey" 
            subtitle="From curious beginner to AI enthusiast"
          />
          
          <FancyTimeline items={timeline} />
        </section>

        {/* Split Section: Interests + Creative Side */}
        <section className="mb-40">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Interests */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4"
              >
                What <span className="text-gradient">Excites</span> Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-muted-foreground mb-8"
              >
                Technologies and concepts that fuel my passion
              </motion.p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      rotate: index % 2 === 0 ? 2 : -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group px-5 py-3 rounded-2xl glass border border-border/50 text-sm font-semibold cursor-pointer hover:border-primary/50 transition-all"
                  >
                    <span className="relative z-10 group-hover:text-primary transition-colors">
                      {interest}
                    </span>
                    <motion.div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                    />
                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ scale: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Creative Interests */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4"
              >
                Beyond the <span className="text-gradient">Code</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-muted-foreground mb-8"
              >
                Creative pursuits that inspire my work
              </motion.p>
              
              <div className="space-y-4">
                {[
                  { 
                    icon: Music, 
                    title: "Music", 
                    desc: "Exploring different genres and how sound evokes emotions. I am learning guitar as my hobby.",
                    gradient: "from-purple-500/20 to-pink-500/20",
                    themeKey: "music" as const
                  },
                  { 
                    icon: Tv, 
                    title: "Watching Anime", 
                    desc: "Fascinated by the story line and art styles. If anyone wants best content then watch anime.",
                    gradient: "from-orange-500/20 to-red-500/20",
                    themeKey: "anime" as const
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    onMouseEnter={() => setHoveredTheme(item.themeKey)}
                    onMouseLeave={() => setHoveredTheme(null)}
                    className="group relative"
                  >
                    {/* Floating quotes around the card for music */}
                    {item.themeKey === "music" && hoveredTheme === "music" && (
                      <div className="absolute inset-0 pointer-events-none">
                        {musicQuotes.map((quote, i) => {
                          const angle = (i * 360) / musicQuotes.length;
                          const distance = 150 + (i % 3) * 50;
                          return (
                            <motion.div
                              key={i}
                              initial={{ 
                                opacity: 0,
                                scale: 0,
                                x: 0,
                                y: 0
                              }}
                              animate={{
                                opacity: [0, 1, 1, 0],
                                scale: [0.5, 1, 1, 0.8],
                                x: [
                                  0,
                                  Math.cos((angle + 0) * Math.PI / 180) * distance,
                                  Math.cos((angle + 60) * Math.PI / 180) * distance,
                                  Math.cos((angle + 120) * Math.PI / 180) * distance,
                                  0
                                ],
                                y: [
                                  0,
                                  Math.sin((angle + 0) * Math.PI / 180) * distance,
                                  Math.sin((angle + 60) * Math.PI / 180) * distance,
                                  Math.sin((angle + 120) * Math.PI / 180) * distance,
                                  0
                                ]
                              }}
                              transition={{
                                duration: 10 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                              }}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-sm md:text-base font-bold text-purple-400 px-3 py-1 rounded-full bg-purple-950/30 backdrop-blur-sm border border-purple-500/30"
                              style={{
                                textShadow: "0 0 15px rgba(147, 51, 234, 0.8)",
                                boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)"
                              }}
                            >
                              ♪ {quote} ♪
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                    
                    <div className="relative p-6 rounded-2xl glass border border-border/50 group-hover:border-primary/30 transition-all flex items-start gap-4 z-10">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <item.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        <p className="text-sm font-semibold text-primary mt-4 group-hover:scale-105 transition-transform">
                          ✨ Hover here to see the magic ✨
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy - Grid Layout */}
        <section className="mb-40">
          <SectionTitle 
            title="My Philosophy" 
            subtitle="How I approach learning, building, and growing"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { 
                icon: Lightbulb,
                title: "Learning by Doing", 
                desc: "The best way to truly understand something is to build it. That's why I created my sketch-to-image generator – to deeply grasp diffusion models and prompt engineering through hands-on experience.",
                color: "text-yellow-500"
              },
              { 
                icon: Brain,
                title: "Breaking Problems Down", 
                desc: "Complex challenges become manageable when you decompose them into smaller, solvable pieces. I stay organized, think systematically, and tackle problems one step at a time.",
                color: "text-purple-500"
              },
              { 
                icon: Heart,
                title: "Collaborative Growth", 
                desc: "The best learning happens in community. Sharing ideas, receiving feedback, and embracing different perspectives helps me evolve as both a developer and a person.",
                color: "text-pink-500"
              },
              { 
                icon: BookOpen,
                title: "Staying Curious", 
                desc: "Technology evolves rapidly, and I'm always excited to explore emerging tools and frameworks. From OpenAI to Hugging Face to LangChain – I love experimenting with cutting-edge AI.",
                color: "text-blue-500"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                <div className="relative h-full p-8 rounded-3xl glass border border-border/50 group-hover:border-primary/30 transition-all">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Current Focus - Hero Card */}
        <section className="mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-20 blur-3xl animate-pulse" />
            
            <motion.div 
              className="relative rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient border animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))",
                  backgroundSize: "300% 300%",
                  padding: "2px"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-3xl bg-card/95 backdrop-blur-xl" />
              </motion.div>

              <div className="relative p-10 md:p-16">
                {/* Floating icons */}
                <div className="absolute top-8 right-8 flex gap-3">
                  {[Rocket, Coffee, Zap].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [-10, 10, -10],
                        rotate: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
                    <span className="text-sm font-bold text-primary">🚀 Currently Exploring</span>
                  </div>
                </motion.div>
                
                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  <span className="text-gradient">Diving Deep into AI</span>
                </h3>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-3xl">
                  Exploring advanced AI concepts at <span className="text-primary font-semibold">DTU</span> while 
                  integrating <span className="text-accent font-semibold">LLMs</span> and <span className="text-secondary font-semibold">generative AI</span> into 
                  real-world applications. Always looking for opportunities to contribute to innovative AI solutions!
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "LangChain", icon: "🔗" },
                    { name: "OpenAI APIs", icon: "🤖" },
                    { name: "Advanced ML", icon: "🧠" },
                    { name: "Data Science", icon: "📊" }
                  ].map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0]
                      }}
                      className="group px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all cursor-pointer"
                    >
                      <span className="text-lg mr-2">{tech.icon}</span>
                      <span className="font-bold text-primary">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Inspirational Quote - Redesigned */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl blur-3xl" />
            
            <div className="relative">
              {/* Quote marks */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="absolute -top-8 -left-4 md:-left-12 text-8xl md:text-9xl font-serif text-primary/20 select-none"
              >
                "
              </motion.div>
              
              <div className="relative p-12 md:p-16 rounded-3xl glass border border-border/50 overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-4xl font-bold italic text-foreground/90 mb-8 leading-relaxed"
                  >
                    The best way to predict the future is to{" "}
                    <span className="text-gradient">invent it.</span>
                  </motion.p>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-primary font-bold text-lg mb-1">— Alan Kay</p>
                      <p className="text-sm text-muted-foreground">Computer Scientist & Visionary</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20"
                    >
                      <Heart className="w-5 h-5 text-primary" />
                      <p className="text-sm font-medium text-primary">
                        This is exactly what I want to do
                      </p>
                    </motion.div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-muted-foreground mt-8 pt-8 border-t border-border/50 leading-relaxed"
                  >
                    This quote deeply resonates with me because it embodies my approach to technology and AI. 
                    Rather than waiting to see what happens, I want to be part of <span className="text-primary font-semibold">building the future</span> – 
                    creating innovative solutions and pushing the boundaries of what's possible with artificial intelligence.
                  </motion.p>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.7 }}
                className="absolute -bottom-8 -right-4 md:-right-12 text-8xl md:text-9xl font-serif text-primary/20 select-none rotate-180"
              >
                "
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
