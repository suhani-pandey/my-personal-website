"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useColors } from "@/lib/theme-utils";
import { Y } from "@/lib/portfolio-data";

export function Card({ children, style: s = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const colors = useColors();
  const { BG_CARD, BORDER } = colors;
  const { theme } = useTheme();
  const [h, setH] = useState(false);
  
  const cardShadow = h 
    ? (theme === "light" 
        ? `0 20px 60px rgba(245,197,24,0.15), 0 0 0 1px ${Y}` 
        : `0 20px 60px rgba(245,197,24,0.25), 0 0 0 1px ${Y}, 0 0 30px rgba(245,197,24,0.1)`)
    : (theme === "light" 
        ? "0 2px 12px rgba(0,0,0,0.03)" 
        : "0 2px 12px rgba(0,0,0,0.3)");
  
  return (
    <motion.div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      whileHover={{ y: -8, rotateY: 2 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        background: BG_CARD, borderRadius: 20, padding: 28,
        border: `1.5px solid ${h ? Y : BORDER}`,
        boxShadow: cardShadow,
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
