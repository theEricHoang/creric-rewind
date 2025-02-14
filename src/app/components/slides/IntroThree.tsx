'use client';

import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

import firstDate from "../../../../public/images/firstdate.jpg";

export default function IntroThree() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative h-[200vh] overflow-visible">
      {/* Background Image */}
      <Image
        src={firstDate}
        alt="first date pic"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent z-[1]" />

      {/* Animated Text */}
      <motion.div
        className="h-[100vh] flex flex-1 items-center justify-center sticky top-0 z-[2]"
        style={{
          opacity: scrollYProgress,
          scale: scrollYProgress,
        }}
      >
        <p className="text-white text-8xl font-bold">
          and they went on their FIRST DATE!!
        </p>
      </motion.div>
    </div>
  );
}