"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

/* --- FEATURE LAYOUT DATA AND COMPONENT ---------------------------------- */

// Only "Until now." animated in first paragraph
const firstParagraphData = [
  {
    line: 1,
    words: [
      { text: "For", animated: false },
      { text: "decades,", animated: false },
      { text: "broker", animated: false },
      { text: "accounting", animated: false },
      { text: "teams", animated: false },
      { text: "managed", animated: false },
    ],
  },
  {
    line: 2,
    words: [
      { text: "increasing", animated: false },
      { text: "workloads", animated: false },
      { text: "and", animated: false },
      { text: "complexity", animated: false },
      { text: "without", animated: false },
      { text: "end.", animated: false },
    ],
  },
  {
    line: 3,
    words: [
      { text: "Until", animated: true },
      { text: "now.", animated: true },
    ],
  },
];

// All words below "Until now." animate from light to dark
const animatedTextData = [
  {
    line: 1,
    words: [
      { text: "Comulate", animated: true },
      { text: "is", animated: true },
      { text: "the", animated: true },
      { text: "accounting", animated: true },
      { text: "automation", animated: true },
      { text: "platform", animated: true },
    ],
  },
  {
    line: 2,
    words: [
      { text: "decisively", animated: true },
      { text: "chosen", animated: true },
      { text: "by", animated: true },
      { text: "today's", animated: true },
      { text: "and", animated: true },
      { text: "tomorrow's", animated: true },
      { text: "top", animated: true },
    ],
  },
  {
    line: 3,
    words: [
      { text: "100,", animated: true },
      { text: "powering", animated: true },
      { text: "turnkey", animated: true },
      { text: "transformation", animated: true },
      { text: "with", animated: true },
    ],
  },
  {
    line: 4,
    words: [
      { text: "end-to-end", animated: true },
      { text: "automation", animated: true },
      { text: "across", animated: true },
      { text: "direct", animated: true },
      { text: "bill", animated: true },
      { text: ",", animated: true },
      { text: "cash", animated: true },
    ],
  },
  {
    line: 5,
    words: [
      { text: "application,", animated: true },
      { text: "carrier", animated: true },
      { text: "payables,", animated: true },
      { text: "revenue", animated: true },
      { text: "integrity,", animated: true },
    ],
  },
  {
    line: 6,
    words: [
      { text: "and", animated: true },
      { text: "beyond.", animated: true },
    ],
  },
];

// Component to animate the feature text
export function FeatureLayoutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const allLines = [...firstParagraphData, ...animatedTextData];
  const animatedIndices: { lineIndex: number; wordIndex: number }[] = [];
  allLines.forEach((line, i) => {
    line.words.forEach((word, j) => {
      if (word.animated) animatedIndices.push({ lineIndex: i, wordIndex: j });
    });
  });

  const startReading = 0.2;
  const endReading = 0.8;
  const segment =
    animatedIndices.length > 0
      ? (endReading - startReading) / animatedIndices.length
      : 0;
  const colorRanges = animatedIndices.map((_, idx) => {
    const s = startReading + idx * segment;
    return [s, s + segment] as [number, number];
  });

  const wordColors = colorRanges.map(([start, end]) =>
    useTransform(
      scrollYProgress,
      [start, end],
      ["rgba(15,79,72,0.3)", "#0f4f48"]
    )
  );

  const containerOpacity = useTransform(
    scrollYProgress,
    [startReading - 0.05, startReading, endReading, endReading + 0.05],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[250vh] overflow-hidden"
    >
      <motion.div
        className="fixed left-1/2 top-1/4 z-10 w-full max-w-[716px] px-8"
        style={{
          opacity: containerOpacity,
          transform: "translateX(-50%)",
        }}
      >
        <div className="flex flex-col space-y-3">
          {allLines.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className="flex flex-wrap items-baseline gap-x-2"
            >
              {line.words.map((word, wordIndex) => {
                const animIdx = animatedIndices.findIndex(
                  (ai) =>
                    ai.lineIndex === lineIndex && ai.wordIndex === wordIndex
                );
                const color = animIdx >= 0 ? wordColors[animIdx] : "#0f4f48";

                return (
                  <motion.span
                    key={`${lineIndex}-${wordIndex}`}
                    style={{
                      color,
                      fontFamily: "'Inter-Medium', Helvetica",
                      fontWeight: 500,
                      fontSize: "30.1px",
                      lineHeight: "40px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {word.text}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* --- TESTIMONIAL SECTION WITH EXTENDED LAST CARD AND CLEAN CLOSE ------- */

export function TestimonialSection(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Curtains open later (0.1) with more delay, close smoothly over longer duration
  const curtainScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75, 0.9],
    [0, 1, 1, 0]
  );

  // Card flip ranges: start after curtains open, end before they close
  const ranges: [number, number][] = [
    [0.2, 0.35],
    [0.35, 0.5],
    [0.5, 0.65],
    [0.65, 0.75],
  ];

  const cards = [
    {
      quote: "Comulate changed our lives",
      author: "Chelle George",
      position: "Senior Accountant",
    },
    {
      quote:
        "Comulate continually pushes the boundaries of what we imagined possible",
      author: "Philip Mortimer",
      position: "Chief Financial Officer",
    },
    {
      quote: "Best thing since sliced bread",
      author: "Lexi Luce",
      position: "Billing Specialist",
    },
    {
      quote: "Our accounting team raves about it with unique passion",
      author: "Jeff Nickles",
      position: "Chief Innovation Officer",
    },
  ];

  // 3D tilt configurations for each card
  const cardTilts = [
    { x: 0, z: 0, depth: 0 },           // Card 1: straight
    { x: -5, z: 3, depth: 10 },         // Card 2: slight tilt
    { x: 8, z: -4, depth: 15 },         // Card 3: more tilt
    { x: -10, z: 6, depth: 20 },        // Card 4: maximum tilt
  ];

  // Motion values for each card
  const cardMotion = ranges.map(([start, end]) => ({
    opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
    rotateY: useTransform(scrollYProgress, [start, end], [-90, 0]),
  }));

  // Container fades in after curtains open, fades out before curtains start closing
  const containerOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.2, 0.75, 0.8],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[300vh] overflow-hidden"
    >
      {/* Curtains */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-[#FFC300]"
          style={{ scaleX: curtainScale, transformOrigin: "right center" }}
        />
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-[#FFC300]"
          style={{ scaleX: curtainScale, transformOrigin: "left center" }}
        />
      </div>

      {/* Fixed card container that appears only during the flip sequence */}
      <motion.div
        className="fixed left-1/2 top-1/2 z-10"
        style={{
          opacity: containerOpacity,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative w-[600px] h-[400px]" style={{ perspective: "1500px" }}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex justify-center items-center"
              style={{
                opacity: cardMotion[index].opacity,
                rotateY: cardMotion[index].rotateY,
                rotateX: cardTilts[index].x,
                rotateZ: cardTilts[index].z,
                translateZ: cardTilts[index].depth,
                transformStyle: "preserve-3d",
              }}
            >
              <Card className="w-full h-full bg-white border border-gray-300 shadow-lg" style={{ filter: `drop-shadow(0 ${4 + cardTilts[index].depth / 2}px ${8 + cardTilts[index].depth}px rgba(0,0,0,0.15))` }}>
                <CardContent className="flex flex-col justify-center items-center p-8 h-full">
                  <p className="font-medium text-xl text-[#0f4f48] text-center mb-4">
                    “{card.quote}”
                  </p>
                  <span className="font-medium text-[#0f4f48]">
                    {card.author}
                  </span>
                  <span className="text-sm text-[#0f4f48]">
                    {card.position}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
