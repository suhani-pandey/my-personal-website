"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ExternalLink, Terminal, Layers, Database, Cpu,
  MapPin, Calendar, Brain, Lightbulb, Heart, BookOpen,
  Menu, X, ArrowRight, Sparkles, Send, Music, Tv,
} from "lucide-react";

/* ─── TOKENS ─── */
const Y     = "#F5C518";
const YD    = "#C8970A";
const YL    = "#FFF3B0";
const DARK  = "#0E0E0E";
const GRAY  = "#555555";
const LGRAY = "#999999";
const WHITE = "#FFFFFF";
const BG    = "#F8F8F6";
const BORDER= "#E8E8E8";

/* ─── DATA ─── */
const NAV_LINKS = ["About", "Skills", "Projects", "Journey", "Contact"];

const techStack = [
  { icon: Terminal, name: "Languages",     items: ["Python", "C#", "TypeScript", "JavaScript"] },
  { icon: Layers,   name: "Frontend",      items: ["React", "WPF", "Next.js", "Tailwind CSS"] },
  { icon: Database, name: "Backend & Data",items: ["ASP .NET Core", "REST APIs", "NumPy", "Pandas"] },
  { icon: Cpu,      name: "ML/AI Tools",   items: ["Hugging Face", "Stable Diffusion", "Scikit-learn", "PyTorch"] },
];

const mlSkills = [
  "Diffusion Models", "Prompt Engineering", "ControlNet", "Deep Learning",
  "Neural Networks", "Data Preprocessing", "Model Training", "Fine-tuning",
  "UNet Architectures", "Latent Space", "Scikit-learn", "PyTorch",
];

const repos = [
  { name: "Sketch → Image Generator", desc: "Furniture generation using ControlNet with Stable Diffusion. Maps pencil sketches to photorealistic renders.", lang: "Python", url: "https://github.com/suhani-pandey/Sketch-To-Image", tags: ["Diffusion Models", "ControlNet"] },
  { name: "GlowNest Salon System",     desc: "Scalable beauty salon management system with payment integration and booking flows.", lang: "C#", url: "https://github.com/Glow-Nest", tags: ["Full-Stack", "REST API"] },
  { name: "ML Projects Portfolio",     desc: "Collection of Speech Recognition & Handwriting Generation experiments.", lang: "Python", url: "https://github.com/suhani-pandey/Deep-Machine-Learning--sem7/tree/main/Assignment_1", tags: ["Deep Learning", "Audio"] },
  { name: "Bachelor Assignments",      desc: "Complete collection of bachelor's engineering projects spanning algorithms to full-stack.", lang: "Multiple", url: "https://github.com/suhani-pandey?tab=repositories", tags: ["Algorithms", "Full-Stack"] },
];

const timeline = [
  { year: "2025", title: "Started Master's at DTU", desc: "Master's in Computer Science specialised in AI at Technical University of Denmark.", side: "right" },
  { year: "2024", title: "Software Engineering Intern", desc: "Worked at Kamstrup A/S managing NuGet packages and developing applications using C# and WPF.", side: "left" },
  { year: "2024", title: "Bachelor Project", desc: "Built projects during Bachelor's, sparking passion for language and visuals in AI.", side: "right" },
  { year: "2022", title: "Started Bachelor's Journey", desc: "Began Software Engineering at VIA University College, Horsens.", side: "left" },
];

const philosophy = [
  { icon: Lightbulb, title: "Learning by Doing",      desc: "The best way to understand something is to build it." },
  { icon: Brain,     title: "Breaking Problems Down", desc: "Complex challenges become manageable when decomposed." },
  { icon: Heart,     title: "Collaborative Growth",   desc: "Different perspectives help me evolve as an engineer." },
  { icon: BookOpen,  title: "Staying Curious",        desc: "Always excited to explore emerging tools and AI breakthroughs." },
];

const education = [
  { degree: "MSc in Computer Science (AI)", school: "DTU", period: "Sep 2025 – Jun 2027", location: "Copenhagen, Denmark", status: "Active" },
  { degree: "BSc in Software Engineering",  school: "VIA University College", period: "Feb 2022 – Jun 2025", location: "Horsens, Denmark", status: "Completed" },
];

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ─── ANIMATED CURSOR DOT ─── */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <motion.div
      style={{
        position: "fixed", top: 0, left: 0, pointerEvents: "none",
        zIndex: 9999, width: 320, height: 320, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)",
        transform: "translate(-50%,-50%)",
      }}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 18, mass: 0.5 }}
    />
  );
}

/* ─── NAVBAR ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["about","skills","projects","journey","contact"];
      const sp = window.scrollY + 140;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && sp >= el.offsetTop && sp < el.offsetTop + el.offsetHeight) { setActive(s); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(10px)",
        borderBottom: scrolled ? `1px solid ${BORDER}` : "1px solid rgba(232,232,232,0.4)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.04)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Animated gradient line at top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${Y} 0%, ${YD} 50%, ${Y} 100%)`,
          transformOrigin: "left",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <motion.button 
          onClick={() => goTo("hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontWeight: 900, fontSize: 17, color: DARK, background: "none", border: "none", cursor: "pointer", letterSpacing: "-0.5px" }}
        >
          Suhani<motion.span 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: Y, display: "inline-block" }}
          >.</motion.span>
        </motion.button>
        
        <div style={{ display: "flex", alignItems: "center", gap: 8, position: "relative" }} className="sp-desktop">
          {NAV_LINKS.map((l, i) => {
            const isActive = active === l.toLowerCase();
            return (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                style={{ position: "relative" }}
              >
                <motion.button 
                  onClick={() => goTo(l.toLowerCase())}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: isActive ? YL : "transparent",
                    border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                    color: isActive ? YD : GRAY,
                    padding: "8px 18px", borderRadius: 50, 
                    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    position: "relative",
                    boxShadow: isActive ? `0 4px 16px rgba(245,197,24,0.25)` : "none",
                  }}
                >
                  {l}
                  {isActive && (
                    <motion.div
                      layoutId="navGlow"
                      style={{
                        position: "absolute", inset: -2,
                        background: `linear-gradient(135deg, ${Y}, ${YD})`,
                        borderRadius: 50, opacity: 0.15,
                        filter: "blur(8px)",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
        
        <motion.button 
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none" }} 
          className="sp-mobile"
        >
          {open ? <X size={20}/> : <Menu size={20}/>}
        </motion.button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{ background: WHITE, borderTop: `1px solid ${BORDER}`, padding: "16px 28px", display: "flex", flexDirection: "column", gap: 4 }}
          >
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => { goTo(l.toLowerCase()); setOpen(false); }}
                style={{ background: "none", border: "none", textAlign: "left", fontSize: 14, fontWeight: 600, color: DARK, padding: "10px 0" }}>{l}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`@media(max-width:768px){.sp-desktop{display:none!important;}.sp-mobile{display:flex!important;}}`}</style>
    </motion.nav>
  );
}

/* ─── HERO BLOB — image clipped INSIDE the blob via SVG clipPath ─── */
function HeroBlobWithImage() {
  const [showAltImage, setShowAltImage] = useState(false);
  
  // The blob path used for BOTH the fill and the clipPath mask
  const blobA = "M280,25 Q340,-5 420,35 Q485,68 495,145 Q510,225 485,295 Q470,350 410,395 Q340,450 250,458 Q165,465 100,415 Q40,370 25,295 Q8,210 45,135 Q80,65 155,38 Q215,15 280,25Z";
  const blobB = "M265,18 Q330,-8 410,28 Q478,60 492,138 Q505,218 478,290 Q465,348 402,390 Q335,445 245,455 Q160,462 95,408 Q35,362 22,288 Q5,205 48,130 Q85,60 160,35 Q220,12 265,18Z";

  return (
    <motion.svg
      viewBox="0 0 520 520"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
      initial={{ scale: 0.88, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        {/* clipPath uses the SAME animated blob path so image is always inside */}
        <clipPath id="blobClip">
          <motion.path
            animate={{ d: [blobA, blobB, blobA] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </clipPath>
      </defs>

      {/* Outer soft glow halo */}
      <motion.path
        fill="rgba(245,197,24,0.20)"
        animate={{
          d: [
            "M285,10 Q350,-10 435,40 Q500,75 512,155 Q528,240 500,315 Q482,380 415,430 Q340,490 240,498 Q150,505 80,450 Q20,400 8,315 Q-5,225 35,145 Q75,70 155,40 Q225,12 285,10Z",
            "M270,5 Q338,-12 425,35 Q492,68 505,150 Q520,235 492,310 Q475,378 408,425 Q335,485 235,495 Q145,502 78,445 Q18,395 5,310 Q-8,220 38,140 Q80,65 162,35 Q230,8 270,5Z",
            "M285,10 Q350,-10 435,40 Q500,75 512,155 Q528,240 500,315 Q482,380 415,430 Q340,490 240,498 Q150,505 80,450 Q20,400 8,315 Q-5,225 35,145 Q75,70 155,40 Q225,12 285,10Z",
          ],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main yellow blob fill */}
      <motion.path
        fill={Y}
        animate={{ d: [blobA, blobB, blobA] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Inner highlight shimmer */}
      <motion.path
        fill="rgba(255,248,160,0.45)"
        animate={{
          d: [
            "M265,85 Q310,68 365,95 Q410,118 420,175 Q430,235 410,285 Q395,325 355,350 Q305,382 245,388 Q190,392 145,360 Q105,330 95,275 Q85,218 115,165 Q145,115 195,95 Q235,78 265,85Z",
            "M258,80 Q305,65 362,92 Q408,115 418,172 Q428,232 408,282 Q393,322 352,348 Q302,380 242,386 Q187,390 142,358 Q102,328 92,272 Q82,215 112,162 Q142,112 192,92 Q232,75 258,80Z",
            "M265,85 Q310,68 365,95 Q410,118 420,175 Q430,235 410,285 Q395,325 355,350 Q305,382 245,388 Q190,392 145,360 Q105,330 95,275 Q85,218 115,165 Q145,115 195,95 Q235,78 265,85Z",
          ],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* ── IMAGE clipped to the exact blob shape ── */}
      <motion.g
        animate={{ 
          scale: showAltImage ? [1, 0.85, 1] : [1, 0.85, 1],
          rotateY: showAltImage ? [0, 180, 360] : [0, -180, -360],
          opacity: [1, 0.7, 1]
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center", cursor: "pointer" }}
        onClick={() => setShowAltImage(!showAltImage)}
      >
        <image
          href={showAltImage ? "/profile.jpg" : "/suhani-char.png"}
          x="0" y="0" width="520" height="520"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#blobClip)"
          style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.18))" }}
        />
      </motion.g>

      {/* Sparkle accent dots around the blob */}
      {[
        { cx: 448, cy: 110, r: 7,  delay: 0   },
        { cx: 68,  cy: 195, r: 5,  delay: 1.0 },
        { cx: 462, cy: 375, r: 6,  delay: 0.5 },
        { cx: 105, cy: 440, r: 4,  delay: 1.6 },
        { cx: 310, cy: 12,  r: 5,  delay: 0.8 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx} cy={dot.cy} r={dot.r}
          fill={YD}
          animate={{ opacity: [0.25, 1, 0.25], r: [dot.r * 0.7, dot.r * 1.35, dot.r * 0.7] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
        />
      ))}
    </motion.svg>
  );
}

/* ─── SKILL TAG ─── */
function SkillTag({ skill, i }: { skill: string; i: number }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.04, duration: 0.4 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "9px 18px", borderRadius: 50, fontSize: 13, fontWeight: 600,
        color: hov ? DARK : GRAY,
        background: hov ? Y : BG,
        border: `1.5px solid ${hov ? Y : BORDER}`,
        transition: "all 0.2s ease",
        cursor: "default",
        display: "inline-block",
      }}
    >{skill}</motion.span>
  );
}

/* ─── TIMELINE ITEM ─── */
function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [item.side === "right" ? 60 : -60, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, x, scale }}
      className="timeline-item"
      data-side={item.side}
    >
      <div className="tl-card">
        <span style={{ fontSize: 11, fontWeight: 800, color: YD, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>{item.year}</span>
        <h4 style={{ fontWeight: 800, fontSize: 17, color: DARK, marginBottom: 8, letterSpacing: "-0.3px" }}>{item.title}</h4>
        <p style={{ fontSize: 14, color: GRAY, lineHeight: 1.7 }}>{item.desc}</p>
      </div>
      <div className="tl-dot">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          style={{ width: 14, height: 14, borderRadius: "50%", background: Y, border: `3px solid ${WHITE}`, boxShadow: "0 0 0 4px rgba(245,197,24,0.25)" }}
        />
      </div>
    </motion.div>
  );
}

/* ─── CARD ─── */
function Card({ children, style: s = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [h, setH] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      whileHover={{ y: -8, rotateY: 2 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        background: WHITE, borderRadius: 20, padding: 28,
        border: `1.5px solid ${h ? Y : BORDER}`,
        boxShadow: h ? `0 20px 60px rgba(245,197,24,0.15), 0 0 0 1px ${Y}` : "0 2px 12px rgba(0,0,0,0.03)",
        transition: "border 0.3s ease, box-shadow 0.3s ease",
        position: "relative",
        overflow: "hidden",
        ...s,
      }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: h ? 1 : 0, scale: h ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${Y}15 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      {children}
    </motion.div>
  );
}

/* ─── SECTION HEADING ─── */
function SH({ label, title, center = false }: { label: string; title: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
      style={{ marginBottom: 52, textAlign: center ? "center" : "left", position: "relative" }}
    >
      <motion.span 
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: YD, textTransform: "uppercase", display: "block", marginBottom: 10 }}
      >
        {label}
      </motion.span>
      <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: DARK, lineHeight: 1.12, letterSpacing: "-1px", margin: 0, position: "relative", display: "inline-block" }}>
        {title}
        {/* Shimmer effect */}
        <motion.div
          animate={{ 
            x: ["-100%", "200%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "30%",
            height: "100%",
            background: `linear-gradient(90deg, transparent, ${Y}, transparent)`,
            filter: "blur(10px)",
            pointerEvents: "none",
          }}
        />
      </h2>
    </motion.div>
  );
}

/* ═══════════════════════════════ MAIN ═══════════════════════════════ */
export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY  = useTransform(heroScroll, [0,1], [0, 80]);
  const heroO  = useTransform(heroScroll, [0,0.6], [1, 0]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Dancing+Script:wght@700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', sans-serif !important; background: #fff; color: #111; -webkit-font-smoothing: antialiased; }
        .name-font { font-family: 'Dancing Script', cursive; }

        /* Timeline layout */
        .tl-wrapper {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
        }
        .tl-line {
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, ${BORDER} 10%, ${BORDER} 90%, transparent);
          transform: translateX(-50%);
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 40px 1fr;
          align-items: center;
          margin-bottom: 52px;
          gap: 0;
        }
        .timeline-item[data-side="right"] .tl-card { grid-column: 3; grid-row: 1; }
        .timeline-item[data-side="right"] .tl-dot  { grid-column: 2; grid-row: 1; display: flex; justify-content: center; }
        .timeline-item[data-side="right"]::before   { content: ''; grid-column: 1; }

        .timeline-item[data-side="left"] .tl-card  { grid-column: 1; grid-row: 1; }
        .timeline-item[data-side="left"] .tl-dot   { grid-column: 2; grid-row: 1; display: flex; justify-content: center; }
        .timeline-item[data-side="left"]::after    { content: ''; grid-column: 3; }

        .tl-card {
          background: ${WHITE};
          border: 1.5px solid ${BORDER};
          border-radius: 18px;
          padding: 24px 28px;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .tl-card:hover {
          border-color: ${Y};
          box-shadow: 0 8px 32px rgba(245,197,24,0.15);
        }

        /* Contact floating particles */
        @keyframes floatDot {
          0%,100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50%      { transform: translateY(-18px) scale(1.2); opacity: 0.9; }
        }

        @media(max-width:768px){
          .sp-desktop{display:none!important;}.sp-mobile{display:flex!important;}
          .hero-grid{grid-template-columns:1fr!important; padding-top:100px!important;}
          .hero-img-col{height:400px!important; margin-top:32px;}
          .tl-wrapper{padding:0 16px;}
          .timeline-item{grid-template-columns:1fr!important;}
          .tl-line{left:20px;}
          .timeline-item[data-side="right"] .tl-card,
          .timeline-item[data-side="left"]  .tl-card { grid-column:1; padding-left:50px; }
          .tl-dot{position:absolute; left:12px;}
          .timeline-item{ position:relative; }
          .about-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:900px){
          .two-col-edu{grid-template-columns:1fr!important;}
        }
      `}</style>

      <CursorGlow />
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} id="hero"
        style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", background: WHITE }}
      >
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{ 
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              left: `${5 + (i * 5)}%`,
              top: `${10 + (i % 5) * 20}%`,
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
              borderRadius: "50%",
              background: i % 2 === 0 ? Y : YD,
              opacity: 0.3,
              pointerEvents: "none",
            }}
          />
        ))}

        <motion.div style={{ y: heroY, opacity: heroO, width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 40, alignItems: "center" }} className="hero-grid">

            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: YL, borderRadius: 50, marginBottom: 24 }}
              >
                <Sparkles size={12} color={YD} />
                <span style={{ fontSize: 12, fontWeight: 700, color: YD, letterSpacing: "0.1em", textTransform: "uppercase" }}>AI/ML Engineer</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22,1,0.36,1] }}
                style={{ fontSize: "clamp(42px,6.5vw,76px)", fontWeight: 900, lineHeight: 1.05, color: DARK, letterSpacing: "-2.5px", marginBottom: 28 }}
              >
                Hello, my name is<br />
                <span className="name-font" style={{ color: Y, position: "relative", display: "inline-block", fontSize: "clamp(48px,7vw,86px)" }}>
                  Suhani Pandey
                  {/* Sketchy underline SVG */}
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
                    viewBox="0 0 300 20"
                    style={{ position: "absolute", bottom: -5, left: -10, width: "110%", height: 20, overflow: "visible" }}
                  >
                    <motion.path
                      d="M5,15 Q20,8 40,12 T80,10 Q120,14 160,9 T200,13 Q240,10 280,15"
                      stroke={Y}
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      animate={{ 
                        d: [
                          "M5,15 Q20,8 40,12 T80,10 Q120,14 160,9 T200,13 Q240,10 280,15",
                          "M5,13 Q20,10 40,14 T80,12 Q120,10 160,15 T200,11 Q240,14 280,13",
                          "M5,15 Q20,8 40,12 T80,10 Q120,14 160,9 T200,13 Q240,10 280,15"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                style={{ fontSize: 17, color: GRAY, lineHeight: 1.7, maxWidth: 460, marginBottom: 44 }}
              >
                Currently pursuing my Master's at DTU, specializing in AI and Machine Learning.
                I build intelligent systems that bridge complex research and useful applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
              >
                <motion.button
                  onClick={() => goTo("projects")}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{ padding: "14px 32px", background: Y, border: "none", borderRadius: 10, fontWeight: 800, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, letterSpacing: "-0.2px" }}
                >
                  View Projects <ArrowRight size={15} />
                </motion.button>
                <motion.a
                  href="https://www.linkedin.com/in/suhani-pandey-724275231/" target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{ padding: "14px 32px", border: `1.5px solid ${BORDER}`, borderRadius: 10, fontWeight: 700, fontSize: 14, color: DARK, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
                >
                  LinkedIn <ExternalLink size={13} />
                </motion.a>
                <motion.a
                  href="/CV.pdf" download="Suhani_Pandey_CV.pdf"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{ padding: "14px 32px", border: `1.5px solid ${Y}`, borderRadius: 10, fontWeight: 700, fontSize: 14, color: YD, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, background: YL }}
                >
                  Download CV <Send size={13} />
                </motion.a>
              </motion.div>
            </div>

            {/* Image INSIDE Blob — single SVG, clipPath approach */}
            <motion.div
              className="hero-img-col"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22,1,0.36,1] }}
              style={{ position: "relative", height: 580, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {/* The blob + image are one unified SVG — image is clipped to blob shape */}
              <HeroBlobWithImage />

              {/* Floating badge – Brain — sits outside SVG, positioned over it */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", bottom: "10%", right: "2%", zIndex: 4,
                  width: 58, height: 58, background: WHITE, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                }}
              >
                <Brain color={Y} size={24} />
              </motion.div>

              {/* Floating sparkle badge */}
              <motion.div
                animate={{ y: [0, 9, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute", top: "10%", left: "2%", zIndex: 4,
                  width: 42, height: 42, background: YL, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(245,197,24,0.35)",
                }}
              >
                <Sparkles size={16} color={YD} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: 1.5, height: 40, background: `linear-gradient(to bottom, ${Y}, transparent)`, borderRadius: 4 }}
          />
          <span style={{ fontSize: 10, fontWeight: 700, color: LGRAY, letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        </motion.div>
      </section>

      {/* ════════════ ABOUT ════════════ */}
      <section id="about" style={{ padding: "120px 40px", background: WHITE, position: "relative", overflow: "hidden" }}>
        {/* Floating decorative elements */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`about-float-${i}`}
            animate={{ 
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              rotate: [0, i % 2 === 0 ? 180 : -180, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i % 3) * 30}%`,
              width: 30 + (i % 3) * 10,
              height: 30 + (i % 3) * 10,
              borderRadius: "50%",
              border: `2px solid ${Y}`,
              opacity: 0.15,
              pointerEvents: "none",
            }}
          />
        ))}
        
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="about-grid">
            <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}>
              <SH label="Who I Am" title={"A builder who\nloves AI"} />
              <p style={{ color: GRAY, lineHeight: 1.85, fontSize: 15.5, marginBottom: 36 }}>
                I'm a software engineer and AI enthusiast based in Copenhagen, Denmark, currently
                pursuing my Master's at DTU. I love building intelligent systems that solve
                real-world problems — from generative AI to full-stack applications.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {philosophy.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{ display: "flex", gap: 12 }}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: YL, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <item.icon size={16} color={YD}/>
                    </div>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: 13, color: DARK }}>{item.title}</p>
                      <p style={{ fontSize: 12, color: LGRAY, marginTop: 4, lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}>
              <h3 style={{ fontWeight: 900, fontSize: 18, color: DARK, marginBottom: 24, letterSpacing: "-0.4px" }}>Education</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {education.map((edu, i) => (
                  <motion.div key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <Card>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                        <div>
                          <p style={{ fontWeight: 800, fontSize: 15, color: DARK, marginBottom: 4 }}>{edu.degree}</p>
                          <p style={{ color: YD, fontWeight: 700, fontSize: 13 }}>{edu.school}</p>
                        </div>
                        <span style={{ fontSize: 11, background: edu.status === "Active" ? YL : "#E8E8E8", color: edu.status === "Active" ? YD : "#666", padding: "4px 10px", borderRadius: 50, fontWeight: 700, whiteSpace: "nowrap" }}>{edu.status}</span>
                      </div>
                      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 12, color: LGRAY, marginTop: 14 }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Calendar size={12}/>{edu.period}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><MapPin size={12}/>{edu.location}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ SKILLS ════════════ */}
      <section id="skills" style={{ padding: "100px 40px", background: BG, position: "relative", overflow: "hidden" }}>
        {/* Animated gradient blob */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <SH label="Expertise" title="Tech Stack & AI Arsenal" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, marginBottom: 36 }}>
            {techStack.map((cat, ci) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.08, duration: 0.6, ease: [0.22,1,0.36,1] }}
              >
                <Card style={{ height: "100%" }}>
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    style={{ width: 46, height: 46, borderRadius: 13, background: YL, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}
                  >
                    <cat.icon size={20} color={YD}/>
                  </motion.div>
                  <h4 style={{ fontWeight: 800, fontSize: 15, color: DARK, marginBottom: 14, letterSpacing: "-0.2px" }}>{cat.name}</h4>
                  <ul style={{ listStyle: "none" }}>
                    {cat.items.map((item, idx) => (
                      <motion.li 
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.08 + idx * 0.05 }}
                        whileHover={{ x: 5 }}
                        style={{ fontSize: 13.5, color: GRAY, marginBottom: 9, display: "flex", alignItems: "center", gap: 8 }}
                      >
                        <motion.span 
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          style={{ width: 5, height: 5, borderRadius: "50%", background: Y, flexShrink: 0 }}
                        /> {item}
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
          <div style={{ background: WHITE, borderRadius: 24, padding: 40, border: `1.5px solid ${BORDER}` }}>
            <p style={{ fontSize: 11, fontWeight: 800, color: YD, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>ML / AI Specialist Skills</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {mlSkills.map((skill, i) => <SkillTag key={skill} skill={skill} i={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ JOURNEY ════════════ */}
      <section id="journey" style={{ padding: "100px 40px", background: WHITE }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SH label="The Timeline" title="My Professional Journey" center />
          <div className="tl-wrapper" style={{ paddingTop: 20 }}>
            <div className="tl-line" />
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PROJECTS ════════════ */}
      <section id="projects" style={{ padding: "100px 40px", background: BG, position: "relative", overflow: "hidden" }}>
        {/* Floating sparkles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -50]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
            style={{
              position: "absolute",
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i % 3) * 30}%`,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: Y,
              pointerEvents: "none",
            }}
          />
        ))}
        
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <SH label="Portfolio" title="Selected Works" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>
            {repos.map((project, pi) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 28, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pi * 0.1, duration: 0.6, ease: [0.22,1,0.36,1] }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                  <div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                      {project.tags.map((t, ti) => (
                        <motion.span 
                          key={t}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: pi * 0.1 + ti * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          style={{ fontSize: 10, fontWeight: 800, color: YD, background: YL, padding: "3px 10px", borderRadius: 50, letterSpacing: "0.05em", cursor: "default" }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                    <h4 style={{ fontSize: 16, fontWeight: 800, color: DARK, marginBottom: 10, letterSpacing: "-0.3px" }}>{project.name}</h4>
                    <p style={{ fontSize: 13.5, color: GRAY, lineHeight: 1.65, marginBottom: 20 }}>{project.desc}</p>
                  </div>
                  <motion.a 
                    href={project.url} target="_blank" rel="noreferrer"
                    whileHover={{ x: 5 }}
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700, color: DARK, fontSize: 13, textDecoration: "none", borderBottom: `1.5px solid ${Y}`, paddingBottom: 2, width: "fit-content" }}
                  >
                    View Project <motion.span
                      animate={{ rotate: [0, -45, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight size={13} />
                    </motion.span>
                  </motion.a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ BEYOND THE CODE ════════════ */}
      <section style={{ padding: "100px 40px", background: WHITE, position: "relative", overflow: "hidden" }}>
        {/* Floating gradient blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: "10%", left: "5%",
            width: 300, height: 300, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)",
            filter: "blur(60px)", pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute", bottom: "15%", right: "8%",
            width: 350, height: 350, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)",
            filter: "blur(70px)", pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <SH label="Life Beyond Code" title="What I Do in My Free Time" center />
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 900, margin: "0 auto" }}>
            {/* Music Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
            >
              <Card style={{ height: "100%", position: "relative", overflow: "hidden" }}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(245,197,24,0.15) 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Music size={26} color={Y} />
                </motion.div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: DARK, marginBottom: 12, letterSpacing: "-0.5px" }}>
                  Music
                </h3>
                <p style={{ fontSize: 14.5, color: GRAY, lineHeight: 1.7 }}>
                  Exploring different genres and how sound evokes emotions. I am learning guitar as my hobby.
                </p>
                {/* Decorative corner */}
                <motion.div
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute", top: 16, right: 16,
                    width: 24, height: 24,
                    border: `2px solid ${Y}`, borderRadius: 6,
                    opacity: 0.3,
                  }}
                />
              </Card>
            </motion.div>

            {/* Anime Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.15 }}
            >
              <Card style={{ height: "100%", position: "relative", overflow: "hidden" }}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: "linear-gradient(135deg, rgba(245,197,24,0.15) 0%, rgba(168,85,247,0.15) 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Tv size={26} color={Y} />
                </motion.div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: DARK, marginBottom: 12, letterSpacing: "-0.5px" }}>
                  Watching Anime
                </h3>
                <p style={{ fontSize: 14.5, color: GRAY, lineHeight: 1.7 }}>
                  Fascinated by the storyline and art styles. If anyone wants best content then watch anime.
                </p>
                {/* Decorative star */}
                <motion.div
                  animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute", bottom: 20, right: 20,
                    fontSize: 18, opacity: 0.2,
                  }}
                >
                  ⭐
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT ════════════ */}
      <section id="contact" style={{ padding: "100px 40px", background: `linear-gradient(135deg, ${DARK} 0%, #1a1a1a 100%)`, overflow: "hidden", position: "relative", minHeight: 700 }}>
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", top: "10%", right: "10%",
            width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)",
            filter: "blur(80px)", pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", bottom: "15%", left: "5%",
            width: 350, height: 350, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)",
            filter: "blur(70px)", pointerEvents: "none",
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              left: `${5 + (i * 6.5)}%`,
              top: `${10 + (i % 5) * 20}%`,
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: Y,
              opacity: 0.3,
              pointerEvents: "none",
            }}
          />
        ))}

        <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 50 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", border: `1px solid rgba(245,197,24,0.3)`, borderRadius: 50, marginBottom: 28 }}
            >
              <motion.span 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 6, height: 6, borderRadius: "50%", background: Y, display: "inline-block" }}
              />
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(245,197,24,0.8)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Open to opportunities</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}
              style={{ fontSize: "clamp(38px,5.5vw,64px)", fontWeight: 900, color: WHITE, lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 16 }}
            >
              Let's start a <span style={{ color: Y }}>conversation</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 48 }}
            >
              Have a project in mind? Want to collaborate? Just drop me a message!
            </motion.p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: 40,
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const message = formData.get('message');
              window.location.href = `mailto:Iamsuhani5@gmail.com?subject=Message from ${name}&body=${message}`;
            }}>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 10, letterSpacing: "0.05em" }}>
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: Y }}
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    fontSize: 15,
                    fontWeight: 500,
                    color: WHITE,
                    background: "rgba(255,255,255,0.05)",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>

              <div style={{ marginBottom: 32 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 10, letterSpacing: "0.05em" }}>
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: Y }}
                  name="message"
                  required
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    fontSize: 15,
                    fontWeight: 500,
                    color: WHITE,
                    background: "rgba(255,255,255,0.05)",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    outline: "none",
                    transition: "all 0.3s ease",
                    resize: "vertical",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: "100%",
                  padding: "16px 32px",
                  background: Y,
                  color: DARK,
                  border: "none",
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  boxShadow: `0 8px 32px rgba(245,197,24,0.35)`,
                  transition: "all 0.3s ease",
                }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>

            {/* Alternative contact methods */}
            <div style={{ marginTop: 32, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a
                href="mailto:Iamsuhani5@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 10,
                  transition: "all 0.3s ease",
                }}
              >
                <Send size={14} />
                Email
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/suhani-pandey-724275231/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 10,
                  transition: "all 0.3s ease",
                }}
              >
                <ExternalLink size={14} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}