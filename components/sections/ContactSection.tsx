"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Y, YD } from "@/lib/portfolio-data";

export function ContactSection() {
  const contactOptions = [
    {
      icon: Mail,
      title: "Email Me",
      desc: "Send me a message directly",
      value: "iamsuhani5@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=iamsuhani5@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      desc: "Let's connect professionally",
      value: "Suhani Pandey",
      href: "https://www.linkedin.com/in/suhani-pandey-5102872a9/",
    },
    {
      icon: Github,
      title: "GitHub",
      desc: "Check out my code",
      value: "@suhani-pandey",
      href: "https://github.com/suhani-pandey",
    },
  ];

  return (
    <section id="contact" style={{ padding: "100px 40px", background: "linear-gradient(135deg, #0E0E0E 0%, #1a1a1a 100%)", overflow: "hidden", position: "relative", minHeight: 700 }}>
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "10%", right: "10%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ rotate: [0, -360], scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", bottom: "15%", left: "5%",
          width: 350, height: 350, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)",
          filter: "blur(70px)", pointerEvents: "none",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          style={{
            position: "absolute", left: `${5 + (i * 6.5)}%`, top: `${10 + (i % 5) * 20}%`,
            width: 3, height: 3, borderRadius: "50%", background: Y, opacity: 0.3, pointerEvents: "none",
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", border: `1px solid rgba(245,197,24,0.3)`, borderRadius: 50, marginBottom: 28 }}
          >
            <motion.span 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: "50%", background: Y, display: "inline-block" }}
            />
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(245,197,24,0.8)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Open to opportunities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}
            style={{ fontSize: "clamp(38px,5.5vw,64px)", fontWeight: 900, color: "#F5F5F5", lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 16 }}
          >
            Let's start a <span style={{ color: Y }}>conversation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 64 }}
          >
            Choose your preferred way to reach out – I'm always excited to connect!
          </motion.p>
        </motion.div>

        {/* Contact Options */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 900, margin: "0 auto" }}>
          {contactOptions.map((contact, i) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                border: "1.5px solid rgba(255,255,255,0.15)",
                borderRadius: 20,
                padding: 32,
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${Y} 0%, ${YD} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 8px 24px rgba(245,197,24,0.3)`,
                }}
              >
                <contact.icon size={32} color="#0E0E0E" />
              </motion.div>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#F5F5F5", marginBottom: 8 }}>{contact.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>{contact.desc}</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: Y }}>{contact.value}</p>
              </div>
              <div style={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${Y}10 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
