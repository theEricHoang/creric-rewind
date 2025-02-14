'use client';

import { useScroll, MotionValue, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function AnimatedParagraph({
  paragraph,
}: {
  paragraph: string;
}) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.7', 'start 0.4']
  });
  const words = paragraph.split(" ");

  return (
    <p
      ref={container}
      className="text-white text-5xl flex flex-wrap leading-none p-5"
    >
      {
        words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return <AnimatedWord key={i} progress={scrollYProgress} range={[start, end]}>{word}</AnimatedWord>
        })
      }
    </p>
  );
}

function AnimatedWord({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span
      className="relative mr-2 mt-2"
    >
      <span
        className="absolute text-white/20"
      >
        {children}
      </span>

      <motion.span
        style={{ opacity: opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
}