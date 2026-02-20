"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
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
