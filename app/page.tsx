"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles, ArrowRight, Download } from "lucide-react";
import { ChatWidget } from "@/components/ChatWidget";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CursorGlow, Navbar, HeroBlobWithImage, GlobalStyles } from "@/components/portfolio";
import {
  AboutSection,
  SkillsSection,
  JourneySection,
  ProjectsSection,
  BeyondTheCodeSection,
  ContactSection,
} from "@/components/sections";
import { useColors } from "@/lib/theme-utils";
import { Y, YD, YL } from "@/lib/portfolio-data";

export default function Portfolio() {
  const colors = useColors();
  const { TEXT, TEXT_SECONDARY, TEXT_MUTED, BG, BG_CARD, BORDER } = colors;
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 80]);
  const heroO = useTransform(heroScroll, [0, 0.6], [1, 0]);

  return (
    <>
      <GlobalStyles colors={colors} />
      <CursorGlow />
      <Navbar />
      <HeroSection heroRef={heroRef} heroY={heroY} heroO={heroO} colors={colors} />
      <AboutSection />
      <SkillsSection />
      <JourneySection />
      <ProjectsSection />
      <BeyondTheCodeSection />
      <ContactSection />
      <ChatWidget />
      <ThemeToggle />
    </>
  );
}

/* ═══════════ HERO SECTION ═══════════ */
function HeroSection({ heroRef, heroY, heroO, colors }: any) {
  const { TEXT, TEXT_SECONDARY, TEXT_MUTED, BG, BG_CARD, BORDER } = colors;
  
  return (
    <section ref={heroRef} id="hero"
      style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", background: BG }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{ y: [0, -30, 0], x: [0, Math.sin(i) * 20, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          style={{
            position: "absolute", left: `${5 + (i * 5)}%`, top: `${10 + (i % 5) * 20}%`,
            width: 4 + (i % 3) * 2, height: 4 + (i % 3) * 2, borderRadius: "50%",
            background: i % 2 === 0 ? Y : YD, opacity: 0.3, pointerEvents: "none",
          }}
        />
      ))}

      <motion.div style={{ y: heroY, opacity: heroO, width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 40, alignItems: "center" }} className="hero-grid">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: YL, borderRadius: 50, marginBottom: 24 }}>
              <Sparkles size={12} color={YD} />
              <span style={{ fontSize: 12, fontWeight: 700, color: YD, letterSpacing: "0.1em", textTransform: "uppercase" }}>AI/ML Engineer</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22,1,0.36,1] }}
              style={{ fontSize: "clamp(42px,6.5vw,76px)", fontWeight: 900, lineHeight: 1.05, color: TEXT, letterSpacing: "-2.5px", marginBottom: 28 }}>
              Hello, my name is<br />
              <span className="name-font" style={{ color: Y, position: "relative", display: "inline-block", fontSize: "clamp(48px,7vw,86px)" }}>
                Suhani Pandey
                <motion.svg initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
                  viewBox="0 0 300 20" style={{ position: "absolute", bottom: -5, left: -10, width: "110%", height: 20, overflow: "visible" }}>
                  <motion.path d="M5,15 Q20,8 40,12 T80,10 Q120,14 160,9 T200,13 Q240,10 280,15" stroke={Y} strokeWidth="3" fill="none" strokeLinecap="round"
                    animate={{ d: ["M5,15 Q20,8 40,12 T80,10 Q120,14 160,9 T200,13 Q240,10 280,15", "M5,13 Q20,10 40,14 T80,12 Q120,10 160,15 T200,11 Q240,14 280,13", "M5,15 Q20,8 40,12 T80,10 Q120,14 160,9 T200,13 Q240,10 280,15"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              style={{ fontSize: 17, color: TEXT_SECONDARY, lineHeight: 1.7, maxWidth: 460, marginBottom: 44 }}>
              Master's student at <strong>DTU</strong> specializing in <strong>AI & ML</strong>. 
              Passionate about building intelligent systems with diffusion models, deep learning & creative coding.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <motion.a href="#projects" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}
                style={{ padding: "8px 18px", border: "none", borderRadius: 8, background: `linear-gradient(135deg, ${Y} 0%, ${YD} 100%)`,
                  color: "#0E0E0E", fontWeight: 700, fontSize: 12, textDecoration: "none", boxShadow: `0 8px 24px rgba(245,197,24,0.3)`,
                  display: "flex", alignItems: "center", gap: 5 }}>
                View My Work <ArrowRight size={13} />
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}
                style={{ padding: "2px 20px", border: `1.5px solid ${BORDER}`, borderRadius: 8, fontWeight: 700, fontSize: 12, color: TEXT, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                  style={{ width: 42, height: 42, background: BG_CARD, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: `1.5px solid ${BORDER}`, marginLeft: -14, transition: "all 0.3s" }}>
                  <ExternalLink size={14} color={Y} />
                </motion.div>
                Linkedln
              </motion.a>
              <motion.a href="/CV.pdf" download="Suhani_Pandey_CV.pdf" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}
                style={{ padding: "8px 18px", border: `1.5px solid ${Y}`, borderRadius: 8, background: YL, fontWeight: 700, fontSize: 12, color: YD, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                Download CV <Download size={13} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="hero-img-col" style={{ height: 500, position: "relative" }}>
            <HeroBlobWithImage />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: TEXT_MUTED, letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 22, height: 38, border: `2px solid ${TEXT_MUTED}`, borderRadius: 20, display: "flex", justifyContent: "center", paddingTop: 6 }}>
            <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 4, height: 8, background: TEXT_MUTED, borderRadius: 2 }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
