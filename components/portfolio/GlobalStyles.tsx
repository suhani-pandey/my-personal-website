"use client";

import { useColors } from "@/lib/theme-utils";
import { Y } from "@/lib/portfolio-data";

export function GlobalStyles({ colors }: { colors: ReturnType<typeof useColors> }) {
  const { TEXT, BG, BG_CARD, BORDER } = colors;
  
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Dancing+Script:wght@700&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { 
        scroll-behavior: smooth; 
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
      }
      body { font-family: 'Plus Jakarta Sans', sans-serif !important; background: ${BG}; color: ${TEXT}; -webkit-font-smoothing: antialiased; }
      .name-font { font-family: 'Dancing Script', cursive; }
      
      .snap-section {
        scroll-snap-align: start;
        scroll-snap-stop: always;
        min-height: 100vh;
      }

      .tl-wrapper { position: relative; max-width: 860px; margin: 0 auto; }
      .tl-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, ${BORDER} 10%, ${BORDER} 90%, transparent); transform: translateX(-50%); }
      .timeline-item { display: grid; grid-template-columns: 1fr 40px 1fr; align-items: center; margin-bottom: 52px; gap: 0; }
      .timeline-item[data-side="right"] .tl-card { grid-column: 3; grid-row: 1; }
      .timeline-item[data-side="right"] .tl-dot { grid-column: 2; grid-row: 1; display: flex; justify-content: center; }
      .timeline-item[data-side="right"]::before { content: ''; grid-column: 1; }
      .timeline-item[data-side="left"] .tl-card { grid-column: 1; grid-row: 1; }
      .timeline-item[data-side="left"] .tl-dot { grid-column: 2; grid-row: 1; display: flex; justify-content: center; }
      .timeline-item[data-side="left"]::after { content: ''; grid-column: 3; }
      .tl-card { background: ${BG_CARD}; border: 1.5px solid ${BORDER}; border-radius: 18px; padding: 24px 28px; transition: border 0.2s, box-shadow 0.2s; }
      .tl-card:hover { border-color: ${Y}; box-shadow: 0 8px 32px rgba(245,197,24,0.15); }

      @media(max-width:768px){
        .sp-desktop{display:none!important;}.sp-mobile{display:flex!important;}
        .hero-grid{grid-template-columns:1fr!important; padding-top:100px!important;}
        .hero-img-col{height:400px!important; margin-top:32px;}
        .tl-wrapper{padding:0 16px;}
        .timeline-item{grid-template-columns:1fr!important;}
        .tl-line{left:20px;}
        .timeline-item[data-side="right"] .tl-card,
        .timeline-item[data-side="left"] .tl-card { grid-column:1; padding-left:50px; }
        .tl-dot{position:absolute; left:12px;}
        .timeline-item{ position:relative; }
        .about-grid{grid-template-columns:1fr!important;}
        .two-col-edu{grid-template-columns:1fr!important;}
      }
    `}</style>
  );
}
