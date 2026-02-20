"use client";

import { motion } from "framer-motion";
import { Music, Tv } from "lucide-react";
import { Card } from "@/components/portfolio";
import { useColors } from "@/lib/theme-utils";
import { Y } from "@/lib/portfolio-data";

export function BeyondTheCodeSection() {
  const colors = useColors();
  const { TEXT, TEXT_SECONDARY, BG } = colors;

  const interests = [
    {
      icon: Music,
      title: "Music",
      desc: "Exploring different genres and how sound evokes emotions. I am learning guitar as my hobby.",
    },
    {
      icon: Tv,
      title: "Watching Anime",
      desc: "Fascinated by the storyline and art styles. If anyone wants best content then watch anime.",
    },
  ];

  return (
    <section style={{ padding: "100px 40px", background: BG, position: "relative", overflow: "hidden" }}>
      {/* Floating gradient blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "10%", left: "5%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: 350, height: 350, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <span style={{ fontSize: 11, fontWeight: 800, color: "#C8970A", letterSpacing: "0.2em", textTransform: "uppercase" }}>Beyond The Code</span>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: TEXT, lineHeight: 1.15, marginTop: 12 }}>
            What I Love Outside Work
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Card>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(245,197,24,0.15) 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <interest.icon size={26} color={Y} />
                </motion.div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: TEXT, marginBottom: 12, letterSpacing: "-0.5px" }}>
                  {interest.title}
                </h3>
                <p style={{ fontSize: 14.5, color: TEXT_SECONDARY, lineHeight: 1.7 }}>
                  {interest.desc}
                </p>
                {/* Decorative element */}
                <motion.div
                  animate={{ rotate: i === 0 ? [0, 90, 0] : [0, 360, 0] }}
                  transition={{ duration: i === 0 ? 10 : 15, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute", bottom: 20, right: 20,
                    width: 30, height: 30, opacity: 0.1,
                    pointerEvents: "none",
                  }}
                >
                  <interest.icon size={30} color={Y} />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
