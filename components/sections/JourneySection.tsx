"use client";

import { SectionHeading, TimelineItem } from "@/components/portfolio";
import { useColors } from "@/lib/theme-utils";
import { timeline } from "@/lib/portfolio-data";

export function JourneySection() {
  const colors = useColors();
  const { BG } = colors;

  return (
    <section id="journey" style={{ padding: "100px 40px", background: BG }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeading label="The Timeline" title="My Professional Journey" center />
        <div className="tl-wrapper" style={{ paddingTop: 20 }}>
          <div className="tl-line" />
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
