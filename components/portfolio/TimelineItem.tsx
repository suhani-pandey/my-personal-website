"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useColors } from "@/lib/theme-utils";
import { timeline, Y, YD } from "@/lib/portfolio-data";

export function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const colors = useColors();
  const { TEXT, TEXT_SECONDARY, BG_CARD } = colors;
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
        <h4 style={{ fontWeight: 800, fontSize: 17, color: TEXT, marginBottom: 8, letterSpacing: "-0.3px" }}>{item.title}</h4>
        <p style={{ fontSize: 14, color: TEXT_SECONDARY, lineHeight: 1.7 }}>{item.desc}</p>
      </div>
      <div className="tl-dot">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          style={{ width: 14, height: 14, borderRadius: "50%", background: Y, border: `3px solid ${BG_CARD}`, boxShadow: "0 0 0 4px rgba(245,197,24,0.25)" }}
        />
      </div>
    </motion.div>
  );
}
