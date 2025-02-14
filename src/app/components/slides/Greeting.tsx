'use client';

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export default function Greeting() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      className="flex justify-center h-[200vh] overflow-visible bg-black"
      ref={containerRef}
    >
      <motion.div
        className="h-[100vh] flex items-center justify-center flex-1 sticky top-0"
        style={{ opacity: scrollYProgress, scale: scrollYProgress }}
      >
        <p className="text-9xl text-white font-bold">once upon a time...</p>
      </motion.div>
    </div>
  );
}