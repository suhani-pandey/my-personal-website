"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Y, YD } from "@/lib/portfolio-data";

export function HeroBlobWithImage() {
  const [showAltImage, setShowAltImage] = useState(false);
  
  // The blob path used for BOTH the fill and the clipPath mask
  const blobA = "M280,25 Q340,-5 420,35 Q485,68 495,145 Q510,225 485,295 Q470,350 410,395 Q340,450 250,458 Q165,465 100,415 Q40,370 25,295 Q8,210 45,135 Q80,65 155,38 Q215,15 280,25Z";
  const blobB = "M265,18 Q330,-8 410,28 Q478,60 492,138 Q505,218 478,290 Q465,348 402,390 Q335,445 245,455 Q160,462 95,408 Q35,362 22,288 Q5,205 48,130 Q85,60 160,35 Q220,12 265,18Z";

  return (
    <motion.svg
      viewBox="0 0 520 520"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
      initial={{ scale: 0.88, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        {/* clipPath uses the SAME animated blob path so image is always inside */}
        <clipPath id="blobClip">
          <motion.path
            animate={{ d: [blobA, blobB, blobA] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </clipPath>
      </defs>

      {/* Outer soft glow halo */}
      <motion.path
        fill="rgba(245,197,24,0.20)"
        animate={{
          d: [
            "M285,10 Q350,-10 435,40 Q500,75 512,155 Q528,240 500,315 Q482,380 415,430 Q340,490 240,498 Q150,505 80,450 Q20,400 8,315 Q-5,225 35,145 Q75,70 155,40 Q225,12 285,10Z",
            "M270,5 Q338,-12 425,35 Q492,68 505,150 Q520,235 492,310 Q475,378 408,425 Q335,485 235,495 Q145,502 78,445 Q18,395 5,310 Q-8,220 38,140 Q80,65 162,35 Q230,8 270,5Z",
            "M285,10 Q350,-10 435,40 Q500,75 512,155 Q528,240 500,315 Q482,380 415,430 Q340,490 240,498 Q150,505 80,450 Q20,400 8,315 Q-5,225 35,145 Q75,70 155,40 Q225,12 285,10Z",
          ],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main yellow blob fill */}
      <motion.path
        fill={Y}
        animate={{ d: [blobA, blobB, blobA] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Inner highlight shimmer */}
      <motion.path
        fill="rgba(255,248,160,0.45)"
        animate={{
          d: [
            "M265,85 Q310,68 365,95 Q410,118 420,175 Q430,235 410,285 Q395,325 355,350 Q305,382 245,388 Q190,392 145,360 Q105,330 95,275 Q85,218 115,165 Q145,115 195,95 Q235,78 265,85Z",
            "M258,80 Q305,65 362,92 Q408,115 418,172 Q428,232 408,282 Q393,322 352,348 Q302,380 242,386 Q187,390 142,358 Q102,328 92,272 Q82,215 112,162 Q142,112 192,92 Q232,75 258,80Z",
            "M265,85 Q310,68 365,95 Q410,118 420,175 Q430,235 410,285 Q395,325 355,350 Q305,382 245,388 Q190,392 145,360 Q105,330 95,275 Q85,218 115,165 Q145,115 195,95 Q235,78 265,85Z",
          ],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* ── IMAGE clipped to the exact blob shape ── */}
      <motion.g
        animate={{ 
          scale: showAltImage ? [1, 0.85, 1] : [1, 0.85, 1],
          rotateY: showAltImage ? [0, 180, 360] : [0, -180, -360],
          opacity: [1, 0.7, 1]
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center", cursor: "pointer" }}
        onClick={() => setShowAltImage(!showAltImage)}
      >
        <image
          href={showAltImage ? "/profile.jpg" : "/suhani-char.png"}
          x="0" y="0" width="520" height="520"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#blobClip)"
          style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.18))" }}
        />
      </motion.g>

      {/* Sparkle accent dots around the blob */}
      {[
        { cx: 448, cy: 110, r: 7,  delay: 0   },
        { cx: 68,  cy: 195, r: 5,  delay: 1.0 },
        { cx: 462, cy: 375, r: 6,  delay: 0.5 },
        { cx: 105, cy: 440, r: 4,  delay: 1.6 },
        { cx: 310, cy: 12,  r: 5,  delay: 0.8 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx} cy={dot.cy} r={dot.r}
          fill={YD}
          animate={{ opacity: [0.25, 1, 0.25], r: [dot.r * 0.7, dot.r * 1.35, dot.r * 0.7] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
        />
      ))}
    </motion.svg>
  );
}
