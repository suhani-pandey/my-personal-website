"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Card, SectionHeading } from "@/components/portfolio";
import { useColors } from "@/lib/theme-utils";
import { philosophy, education } from "@/lib/portfolio-data";

export function AboutSection() {
  const colors = useColors();
  const { TEXT, TEXT_SECONDARY, TEXT_MUTED, BG } = colors;

  return (
    <section id="about" style={{ padding: "120px 40px", background: BG, position: "relative", overflow: "hidden" }}>
      {/* Animated background blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "15%", right: "8%", width: 450, height: 450,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 70%)",
          filter: "blur(70px)", pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <SectionHeading label="Introduction" title="Who I Am" />
        
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 44, marginBottom: 56 }} className="about-grid">
          <div>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.85, fontSize: 15.5, marginBottom: 36 }}>
              I'm a Master's student at the <strong>Technical University of Denmark (DTU)</strong> specializing in <strong>Artificial Intelligence</strong>. 
              My journey into AI began during my Bachelor's in Software Engineering at VIA University College, where I discovered my passion for 
              creating intelligent systems that bridge creativity and technology.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
              {philosophy.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: "20px", borderRadius: 16,
                    background: i % 2 === 0 ? "linear-gradient(135deg, rgba(245,197,24,0.05) 0%, transparent 100%)" : "rgba(245,197,24,0.03)",
                    border: "1px solid rgba(245,197,24,0.1)",
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: "rgba(245,197,24,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <item.icon size={20} color="#F5C518" />
                  </motion.div>
                  <p style={{ fontWeight: 800, fontSize: 13, color: TEXT }}>{item.title}</p>
                  <p style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4, lineHeight: 1.5 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: 900, fontSize: 18, color: TEXT, marginBottom: 24, letterSpacing: "-0.4px" }}>Education</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }} className="two-col-edu">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Card style={{ padding: 20 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontWeight: 800, fontSize: 15, color: TEXT, marginBottom: 4 }}>{edu.degree}</p>
                        <p style={{ fontSize: 13, color: TEXT_SECONDARY, fontWeight: 600 }}>{edu.school}</p>
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 800, color: edu.status === "Active" ? "#10B981" : "#F59E0B", background: edu.status === "Active" ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)", padding: "4px 10px", borderRadius: 20, letterSpacing: "0.05em" }}>
                        {edu.status.toUpperCase()}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 12, color: TEXT_MUTED, marginTop: 14 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Calendar size={13} /> {edu.period}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <MapPin size={13} /> {edu.location}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
