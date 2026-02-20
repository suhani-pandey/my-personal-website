import { Terminal, Layers, Database, Cpu, Lightbulb, Brain, Heart, BookOpen } from "lucide-react";

/* ─── TOKENS ─── */
export const Y = "#F5C518";
export const YD = "#C8970A";
export const YL = "#FFF3B0";

/* ─── NAVIGATION ─── */
export const NAV_LINKS = ["About", "Skills", "Journey", "Projects", "Contact"];

/* ─── TECH STACK ─── */
export const techStack = [
  { icon: Terminal, name: "Languages", items: ["Python", "C#", "TypeScript", "JavaScript"] },
  { icon: Layers, name: "Frontend", items: ["React", "WPF", "Next.js", "Tailwind CSS"] },
  { icon: Database, name: "Backend & Data", items: ["ASP .NET Core", "REST APIs", "NumPy", "Pandas"] },
  { icon: Cpu, name: "ML/AI Tools", items: ["Hugging Face", "Stable Diffusion", "Scikit-learn", "PyTorch"] },
];

/* ─── ML/AI SKILLS ─── */
export const mlSkills = [
  "Diffusion Models", "Prompt Engineering", "ControlNet", "Deep Learning",
  "Neural Networks", "Data Preprocessing", "Model Training", "Fine-tuning",
  "UNet Architectures", "Latent Space", "Scikit-learn", "PyTorch",
];

/* ─── PROJECTS ─── */
export const repos = [
  { name: "Sketch → Image Generator", desc: "Furniture generation using ControlNet with Stable Diffusion. Maps pencil sketches to photorealistic renders.", lang: "Python", url: "https://github.com/suhani-pandey/Sketch-To-Image", tags: ["Diffusion Models", "ControlNet"] },
  { name: "GlowNest Salon System", desc: "Scalable beauty salon management system with payment integration and booking flows.", lang: "C#", url: "https://github.com/Glow-Nest", tags: ["Full-Stack", "REST API"] },
  { name: "ML Projects Portfolio", desc: "Collection of Speech Recognition & Handwriting Generation experiments.", lang: "Python", url: "https://github.com/suhani-pandey/Deep-Machine-Learning--sem7/tree/main/Assignment_1", tags: ["Deep Learning", "Audio"] },
  { name: "Bachelor Assignments", desc: "Complete collection of bachelor's engineering projects spanning algorithms to full-stack.", lang: "Multiple", url: "https://github.com/suhani-pandey?tab=repositories", tags: ["Algorithms", "Full-Stack"] },
];

/* ─── TIMELINE ─── */
export const timeline = [
  { year: "2025", title: "Started Master's at DTU", desc: "Master's in Computer Science specialised in AI at Technical University of Denmark.", side: "right" as const },
  { year: "2024", title: "Software Engineering Intern", desc: "Worked at Kamstrup A/S managing NuGet packages and developing applications using C# and WPF.", side: "left" as const },
  { year: "2024", title: "Bachelor Project", desc: "Built projects during Bachelor's, sparking passion for language and visuals in AI.", side: "right" as const },
  { year: "2022", title: "Started Bachelor's Journey", desc: "Began Software Engineering at VIA University College, Horsens.", side: "left" as const },
];

/* ─── PHILOSOPHY ─── */
export const philosophy = [
  { icon: Lightbulb, title: "Learning by Doing", desc: "The best way to understand something is to build it." },
  { icon: Brain, title: "Breaking Problems Down", desc: "Complex challenges become manageable when decomposed." },
  { icon: Heart, title: "Collaborative Growth", desc: "Different perspectives help me evolve as an engineer." },
  { icon: BookOpen, title: "Staying Curious", desc: "Always excited to explore emerging tools and AI breakthroughs." },
];

/* ─── EDUCATION ─── */
export const education = [
  { degree: "MSc in Computer Science (AI)", school: "DTU", period: "Sep 2025 – Jun 2027", location: "Copenhagen, Denmark", status: "Active" },
  { degree: "BSc in Software Engineering", school: "VIA University College", period: "Feb 2022 – Jun 2025", location: "Horsens, Denmark", status: "Completed" },
];
