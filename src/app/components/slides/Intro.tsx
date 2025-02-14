'use client';

import Image, { StaticImageData } from "next/image";
import AnimatedParagraph from "../ui/AnimatedParagraph";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import blondHaircut from '../../../../public/images/blondhaircut.jpg';
import blondMirror from '../../../../public/images/blondmirror.jpg';

interface ParallaxImage {
  src: StaticImageData;
  alt: string;
  y: MotionValue<number>;
  className: string;
  width: number;
  height: number;
}

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const parallaxOffset1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxOffset2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const introParagraph = "there was a chill guy who had a crush on the pretty girl in his chemistry class...";
  const images = [
    {
      src: blondHaircut,
      alt: "Me in the car with a haircut and i'm blond",
      y: parallaxOffset1,
      className: "absolute left-1/4 z-[1]",
      width: 200,
      height: 200,
    },
    {
      src: blondMirror,
      alt: "blond me in the mirror",
      y: parallaxOffset2,
      className: "absolute right-1/3 bottom-16 z-[2]",
      width: 150,
      height: 150,
    },
  ];
  // rounded-2xl shadow-2xl

  return (
    <div
      className="flex h-[200vh] overflow-visible bg-black"
      ref={container}
    >
      <div className="flex flex-row h-[100vh] sticky top-0">
        {/* left section */}
        <div className="bg-black h-[100vh] grow w-[50vw] flex justify-start items-center px-8">
          <AnimatedParagraph paragraph={introParagraph}/>
        </div>

        {/* right section */}
        <div
          className="bg-black h-[100vh] grow w-[50vw] flex relative items-center justify-center"
        >
          {
            images.map(({ src, alt, y, className, width, height }: ParallaxImage, i) => (
              <motion.div
                style={{ y }}
                key={`i_${i}`}
                className={className}
              >
                <Image
                  src={src}
                  alt={alt}
                  className="rounded-2xl shadow-2xl grayscale"
                  width={width}
                  height={height}
                />
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
