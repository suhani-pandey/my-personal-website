"use client";

import { motion } from "framer-motion";
import { Card, SectionHeading, SkillTag } from "@/components/portfolio";
import { useColors } from "@/lib/theme-utils";
import { techStack, mlSkills, Y, YD, YL } from "@/lib/portfolio-data";

export function SkillsSection() {
  const colors = useColors();
  const { TEXT, TEXT_SECONDARY, BG, BORDER } = colors;

  return (
    <section id="skills" style={{ padding: "100px 40px", background: BG, position: "relative", overflow: "hidden" }}>
      {/* Animated gradient blob */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "20%", right: "10%", width: 400, height: 400,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />
      
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <SectionHeading label="Expertise" title="Tech Stack & AI Arsenal" center />
        
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
                <h4 style={{ fontWeight: 800, fontSize: 15, color: TEXT, marginBottom: 14, letterSpacing: "-0.2px" }}>{cat.name}</h4>
                <ul style={{ listStyle: "none" }}>
                  {cat.items.map((item, idx) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.08 + idx * 0.05 }}
                      whileHover={{ x: 5 }}
                      style={{ fontSize: 13.5, color: TEXT_SECONDARY, marginBottom: 9, display: "flex", alignItems: "center", gap: 8 }}
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
        
        <div style={{ background: BG, borderRadius: 24, padding: 40, border: `1.5px solid ${BORDER}` }}>
          <p style={{ fontSize: 11, fontWeight: 800, color: YD, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>ML / AI Specialist Skills</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {mlSkills.map((skill, i) => <SkillTag key={skill} skill={skill} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
