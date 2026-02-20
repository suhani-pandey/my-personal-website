"use client";

import { motion } from "framer-motion";
import { useColors } from "@/lib/theme-utils";
import { Y, YD } from "@/lib/portfolio-data";

export function SectionHeading({ label, title, center = false }: { label: string; title: string; center?: boolean }) {
  const colors = useColors();
  const { TEXT } = colors;
  
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
      <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: TEXT, lineHeight: 1.12, letterSpacing: "-1px", margin: 0, position: "relative", display: "inline-block" }}>
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
