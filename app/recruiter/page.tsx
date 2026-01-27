"use client";

import { Download, Mail, Linkedin, Github, ExternalLink, Terminal, Layers, Database, Cpu, Star, GitFork, MapPin, Calendar, Zap, Sparkles, Award, TrendingUp, Target } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Kamstrup A/S",
    role: "Software Engineering Intern",
    period: "Feb 2024 - Jun 2024",
    location: "Skanderborg, Denmark",
    description: "Managed nuget packages for all repositories and designed pages using WPF. Developed and maintained backend components using C# and frontend using WPF.",
    achievements: [
      "Streamlined package management across multiple repositories",
      "Built responsive UI components using WPF",
      "Collaborated with cross-functional teams on backend architecture"
    ]
  }
];

const education = [
  {
    degree: "Masters in Computer Science specialized in AI",
    school: "DTU",
    period: "Sep 2025 - Jun 2027",
    location: "Copenhagen, Denmark",
    description: "Focused on advanced AI concepts including deep learning, data science, and security."
  },
  {
    degree: "Bachelor in Software Engineering",
    school: "VIA University College",
    period: "Feb 2022 - Jun 2025",
    location: "Horsens, Denmark",
    description: "Specialized in Machine Learning, AI, Full-Stack Development, and Software Architecture."
  }
];

const techStack = [
  { 
    icon: Terminal, 
    name: "Languages", 
    items: ["Python", "C#", "TypeScript", "JavaScript"] 
  },
  { 
    icon: Layers, 
    name: "Frontend", 
    items: ["React", "WPF", "Next.js", "Tailwind CSS"] 
  },
  { 
    icon: Database, 
    name: "Backend & Data", 
    items: ["ASP .NET Core", "REST APIs", "NumPy", "Pandas"] 
  },
  { 
    icon: Cpu, 
    name: "ML/AI Tools", 
    items: ["Hugging Face", "Stable Diffusion", "Scikit-learn", "PyTorch"] 
  }
];

const mlSkills = [
  "Diffusion Models & Latent Space Conditioning",
  "Prompt Engineering & Fine-tuning",
  "ControlNet & UNet Architectures",
  "Loss Metrics (MSE, Perceptual Loss)",
  "Data Preprocessing & Cleaning",
  "Model Training & Evaluation",
  "Algorithm Design & Data Structures",
  "Deep Learning & Neural Networks"
];

const repositories = [
  {
    name: "sketch-to-image-generator",
    description: "🎨 Furniture generation using ControlNet with Stable Diffusion and prompt engineering",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/suhani-pandey/Sketch-To-Image",
    highlights: ["Diffusion Models", "ControlNet", "Prompt Engineering"]
  },
  {
    name: "glownest-salon-system",
    description: "💅 Scalable beauty salon management system with payment integration",
    language: "C#",
    stars: 0,
    forks: 0,
    url: "https://github.com/Glow-Nest",
    highlights: ["Full-Stack", "Payment Gateway", "REST API"]
  },
  {
    name: "ml-projects-portfolio",
    description: "🤖 Collection: Speech Recognition & Handwriting Generation",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/suhani-pandey/Deep-Machine-Learning--sem7/tree/main/Assignment_1",
    highlights: ["Machine Learning", "Deep Learning", "Audio Processing"]
  },
  {
    name: "bachelor-assignments",
    description: "📚 Complete collection of bachelor's projects and assignments",
    language: "Multiple",
    stars: 0,
    forks: 0,
    url: "https://github.com/suhani-pandey?tab=repositories",
    highlights: ["Software Engineering", "Algorithms", "Full-Stack"]
  }
];

export default function Recruiter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Creative Circuit Board Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        
        {/* SVG Circuit Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-primary"/>
              <circle cx="150" cy="50" r="2" fill="currentColor" className="text-primary"/>
              <circle cx="50" cy="150" r="2" fill="currentColor" className="text-primary"/>
              <circle cx="150" cy="150" r="2" fill="currentColor" className="text-primary"/>
              <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              <line x1="50" y1="50" x2="50" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              <line x1="150" y1="50" x2="150" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              <line x1="50" y1="150" x2="150" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              <rect x="48" y="48" width="4" height="4" fill="currentColor" className="text-accent" opacity="0.3"/>
              <rect x="148" y="48" width="4" height="4" fill="currentColor" className="text-accent" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>

        {/* Animated Mesh Gradient Overlay */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/15 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: "2s" }} />
        </motion.div>

        {/* Hexagon Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23888' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }} />
      </div>

      <BackButton />

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto pt-16">
          {/* Hero Section - Sophisticated Design */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                    <span className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full glass border-2 border-primary/30 backdrop-blur-xl">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                      <span className="text-sm font-bold">Available for Hire</span>
                    </span>
                  </div>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                >
                  <span className="bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                    Suhani
                  </span>
                  <br />
                  <span className="text-foreground">Pandey</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 mb-8"
                >
                  <p className="text-xl text-foreground/80 flex items-center gap-3">
                    <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                    Software Engineer
                  </p>
                  <p className="text-xl text-foreground/80 flex items-center gap-3">
                    <span className="w-12 h-[2px] bg-gradient-to-r from-accent to-transparent"></span>
                    Masters Student at DTU
                  </p>
                  <p className="text-xl text-foreground/80 flex items-center gap-3">
                    <span className="w-12 h-[2px] bg-gradient-to-r from-secondary to-transparent"></span>
                    Generative AI Enthusiast
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button size="lg" className="group relative overflow-hidden" asChild>
                    <a href="/CV.pdf" download="Suhani_Pandey_CV.pdf">
                      <span className="relative z-10 flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Download Resume
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="glass backdrop-blur-xl" asChild>
                    <a href="mailto:Iamsuhani5@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Me
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center gap-4 mt-8 pt-8 border-t border-border/50"
                >
                  {[
                    { icon: Linkedin, href: "https://linkedin.com/in/suhani-pandey", label: "LinkedIn" },
                    { icon: Github, href: "https://github.com/suhani-pandey", label: "GitHub" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl glass border border-border/50 hover:border-primary/50 flex items-center justify-center group transition-all"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl" />
                
                <div className="relative glass border border-border/50 rounded-3xl p-8 backdrop-blur-xl">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl" />
                  
                  <div className="space-y-6">
                    {[
                      { icon: Award, label: "Projects Built", value: "10+", color: "text-blue-500", bg: "bg-blue-500/10" },
                      { icon: TrendingUp, label: "Technologies", value: "15+", color: "text-purple-500", bg: "bg-purple-500/10" },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 group cursor-default"
                      >
                        <div className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <stat.icon className={`w-8 h-8 ${stat.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-3xl font-black text-foreground">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Why Hire Me - Creative Bento Box Layout */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Why <span className="bg-clip-text bg-gradient-to-r from-primary to-accent">Hire Me</span>?
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                Combining technical excellence with creative problem-solving
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {/* Main Feature - Spans 2 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2 lg:row-span-2 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                <div className="relative h-full glass border border-border/50 rounded-3xl p-8 md:p-10 backdrop-blur-xl overflow-hidden">
                  {/* Decorative grid pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                    <div className="grid grid-cols-8 gap-2 rotate-12">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <Sparkles className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-3xl font-black mb-4">
                      Hands-on ML Experience
                    </h3>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                      Built production-ready AI systems using <span className="text-primary font-semibold">Stable Diffusion</span>, 
                      <span className="text-accent font-semibold"> ControlNet</span>, and cutting-edge generative models. 
                      From sketch-to-image generators to speech recognition systems, I bring practical experience 
                      in deploying ML solutions that solve real problems.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["PyTorch", "Hugging Face", "Diffusion Models", "Neural Networks"].map((tech) => (
                        <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              {[
                { icon: Terminal, label: "Clean Code", desc: "Well-structured, maintainable solutions", color: "from-blue-500/20 to-cyan-500/20" },
                { icon: Layers, label: "Full-Stack", desc: "Frontend to backend mastery", color: "from-purple-500/20 to-pink-500/20" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all`} />
                  <div className="relative h-full glass border border-border/50 rounded-2xl p-6 backdrop-blur-xl">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tech Stack - Hexagonal Card Layout */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Tech <span className="bg-clip-text bg-gradient-to-r from-accent to-secondary">Arsenal</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Technologies I master and leverage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
                  className="relative group"
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Card */}
                  <div className="relative h-full glass border border-border/50 rounded-3xl p-6 backdrop-blur-xl overflow-hidden">
                    {/* Hexagon decoration */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 opacity-5">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" fill="currentColor" className="text-primary" />
                      </svg>
                    </div>
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors"
                    >
                      <category.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors">{category.name}</h3>
                    
                    {/* Items */}
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-3 text-sm text-foreground/60 group-hover:text-foreground transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Bottom decoration */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/10 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ML Expertise - Tag Cloud Style */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                ML <span className="bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Expertise</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Specialized skills in artificial intelligence
              </p>
            </motion.div>

            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <Cpu className="w-96 h-96 text-primary" />
              </div>
              
              {/* Skills Grid */}
              <div className="relative grid md:grid-cols-2 gap-4">
                {mlSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      x: 10,
                      rotate: 2
                    }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-300" />
                    
                    <div className="relative flex items-center gap-4 p-5 rounded-2xl glass border border-border/50 group-hover:border-primary/50 backdrop-blur-xl transition-all">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        {/* Featured Project with Code - Enhanced */}
        <section className="mb-32">
          <SectionTitle 
            title="Featured Project: Sketch-to-Image AI" 
            subtitle="See my code in action"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              
              <div className="relative p-8 rounded-2xl glass border border-border/50 group-hover:border-primary/30 transition-all">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-foreground/70 mb-6 leading-relaxed"
                >
                  Built an <span className="text-primary font-semibold">advanced AI system</span> that transforms hand-drawn furniture sketches into 
                  photorealistic images using Stable Diffusion and ControlNet. This project demonstrates my ability to work with 
                  <span className="text-accent font-semibold"> cutting-edge generative AI</span> technologies and implement complex ML pipelines.
                </motion.p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  {["Stable Diffusion", "ControlNet", "PyTorch", "Hugging Face"].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="px-4 py-2 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects & Repositories - Enhanced */}
        <section className="mb-32">
          <SectionTitle 
            title="Projects & Repositories" 
            subtitle="My work on GitHub"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {repositories.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateY: 5
                }}
                className="group relative block"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated glow */}
                <motion.div
                  className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))",
                    backgroundSize: "300% 300%"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative h-full p-6 rounded-2xl glass border border-border/50 group-hover:bg-card/90 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold font-mono text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                      {repo.name}
                    </h3>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  </div>
                  
                  <p className="text-sm text-foreground/70 mb-4">
                    {repo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.highlights.map((highlight, i) => (
                      <motion.span 
                        key={highlight}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="px-2 py-1 rounded-md text-xs bg-primary/5 text-primary/80 border border-primary/10"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 rounded-full ${
                        repo.language === 'Python' ? 'bg-blue-500' : 
                        repo.language === 'C#' ? 'bg-green-500' : 
                        'bg-purple-500'
                      }`} />
                      <span className="font-medium">{repo.language}</span>
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </span>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 w-16 h-16 border-t-2 border-r-2 border-primary/10 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Experience Section - Enhanced */}
        <section className="mb-32">
          <SectionTitle 
            title="Professional Experience" 
            subtitle="Where I've applied my skills"
          />
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                <div className="relative p-8 rounded-2xl glass border border-border/50 group-hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <p className="text-foreground/70 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Timeline indicator */}
                <div className="absolute -left-4 top-8 w-3 h-3 rounded-full bg-primary border-4 border-background opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section - Enhanced */}
        <section className="mb-32">
          <SectionTitle 
            title="Education" 
            subtitle="Academic foundation"
          />
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                <div className="relative p-8 rounded-2xl glass border border-border/50 group-hover:border-accent/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.school}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                </div>
                <p className="text-foreground/70">{edu.description}</p>
                
                {/* Graduation cap icon */}
                <div className="absolute -right-4 top-8 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border-2 border-accent/30">
                  <span className="text-lg">🎓</span>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Languages - Enhanced */}
        <section className="mb-32">
          <SectionTitle 
            title="Languages" 
            subtitle="Global communication"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "English", level: "Professional Fluency", dots: 5, flag: "EN" },
              { name: "Portuguese", level: "Intermediate", dots: 3, flag: "🇵🇹" },
              { name: "Danish", level: "Basic", dots: 1, flag: "🇩🇰" }
            ].map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                
                <div className="relative p-8 rounded-2xl glass border border-border/50 text-center group-hover:border-primary/30 transition-all">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-4xl mb-3"
                  >
                    {lang.flag}
                  </motion.div>
                  <h3 className="font-bold mb-2 text-lg group-hover:text-primary transition-colors">{lang.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{lang.level}</p>
                  <div className="flex justify-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={i < lang.dots ? { duration: 1, repeat: Infinity, delay: i * 0.2 } : { delay: index * 0.1 + i * 0.05 }}
                        animate={i < lang.dots ? { scale: [1, 1.2, 1] } : {}}
                        className={`w-2.5 h-2.5 rounded-full ${
                          i < lang.dots ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA - Enhanced */}
        <section className="text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-20 blur-3xl animate-pulse" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              {/* Animated border */}
              <motion.div
                className="absolute -inset-[3px] rounded-3xl"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))",
                  backgroundSize: "300% 300%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative p-12 md:p-16 rounded-3xl bg-card/95 backdrop-blur-xl">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black mb-6"
                >
                  <span className="text-gradient">Let's Build Something Amazing</span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-foreground/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  I'm actively seeking opportunities where I can apply my{" "}
                  <span className="text-primary font-semibold">ML expertise</span> and{" "}
                  <span className="text-accent font-semibold">full-stack development skills</span>{" "}
                  to solve real-world problems. Let's discuss how I can contribute to your team's success.
                </motion.p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { icon: Mail, label: "Get in Touch", href: "mailto:iamsuhani5@gmail.com", variant: "default" },
                    { icon: Download, label: "Download CV", href: "/CV.pdf", download: "Suhani_Pandey_CV.pdf", variant: "outline" }
                  ].map((btn, i) => (
                    <motion.div
                      key={btn.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="lg" 
                        className={btn.variant === 'default' ? 'glow' : 'glass'}
                        variant={btn.variant as any}
                        asChild
                      >
                        <a href={btn.href} download={btn.download}>
                          <btn.icon className="w-5 h-5 mr-2" />
                          {btn.label}
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
    </div>
  );
}