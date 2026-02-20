"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, SectionHeading } from "@/components/portfolio";
import { useColors } from "@/lib/theme-utils";
import { repos, Y, YD, YL } from "@/lib/portfolio-data";

export function ProjectsSection() {
  const colors = useColors();
  const { TEXT, TEXT_SECONDARY, BG } = colors;

  return (
    <section id="projects" style={{ padding: "100px 40px", background: BG, position: "relative", overflow: "hidden" }}>
      {/* Floating sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: [0, -50] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
          style={{
            position: "absolute", left: `${10 + (i * 8)}%`, top: `${20 + (i % 3) * 30}%`,
            width: 4, height: 4, borderRadius: "50%", background: Y, pointerEvents: "none",
          }}
        />
      ))}
      
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <SectionHeading label="Portfolio" title="Selected Works" center />
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
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: TEXT, marginBottom: 10, letterSpacing: "-0.3px" }}>{project.name}</h4>
                  <p style={{ fontSize: 13.5, color: TEXT_SECONDARY, lineHeight: 1.65, marginBottom: 20 }}>{project.desc}</p>
                </div>
                <motion.a 
                  href={project.url} target="_blank" rel="noreferrer"
                  whileHover={{ x: 5 }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700, color: TEXT, fontSize: 13, textDecoration: "none", borderBottom: `1.5px solid ${Y}`, paddingBottom: 2, width: "fit-content" }}
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
  );
}
