"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useColors } from "@/lib/theme-utils";
import { Y } from "@/lib/portfolio-data";

export function SkillTag({ skill, i }: { skill: string; i: number }) {
  const colors = useColors();
  const { TEXT, TEXT_MUTED, BG, BORDER } = colors;
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
        color: hov ? TEXT : TEXT_MUTED,
        background: hov ? Y : BG,
        border: `1.5px solid ${hov ? Y : BORDER}`,
        transition: "all 0.2s ease",
        cursor: "default",
        display: "inline-block",
      }}
    >{skill}</motion.span>
  );
}
