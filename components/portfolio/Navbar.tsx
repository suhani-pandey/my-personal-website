"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useColors, goTo } from "@/lib/theme-utils";
import { NAV_LINKS, Y, YL, YD } from "@/lib/portfolio-data";

export function Navbar() {
  const colors = useColors();
  const { TEXT, TEXT_SECONDARY, BG_CARD, BORDER, BG } = colors;
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["about","skills","journey","projects","contact"];
      const sp = window.scrollY + 140;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && sp >= el.offsetTop && sp < el.offsetTop + el.offsetHeight) { setActive(s); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = theme === "light" 
    ? (scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)")
    : (scrolled ? "rgba(14,14,14,0.95)" : "rgba(14,14,14,0.8)");
  const navBorderUnscrolled = theme === "light" ? "rgba(232,232,232,0.4)" : "rgba(42,42,42,0.4)";
  const navShadow = scrolled 
    ? (theme === "light" ? "0 4px 24px rgba(0,0,0,0.04)" : "0 4px 24px rgba(0,0,0,0.3)")
    : "none";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: navBg,
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(10px)",
        borderBottom: scrolled ? `1px solid ${BORDER}` : `1px solid ${navBorderUnscrolled}`,
        boxShadow: navShadow,
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
          style={{ fontWeight: 900, fontSize: 17, color: TEXT, background: "none", border: "none", cursor: "pointer", letterSpacing: "-0.5px" }}
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
                    color: isActive ? YD : TEXT_SECONDARY,
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
            style={{ background: BG_CARD, borderTop: `1px solid ${BORDER}`, padding: "16px 28px", display: "flex", flexDirection: "column", gap: 4 }}
          >
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => { goTo(l.toLowerCase()); setOpen(false); }}
                style={{ background: "none", border: "none", textAlign: "left", fontSize: 14, fontWeight: 600, color: TEXT, padding: "10px 0" }}>{l}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`@media(max-width:768px){.sp-desktop{display:none!important;}.sp-mobile{display:flex!important;}}`}</style>
    </motion.nav>
  );
}
