'use client';

import Image from "next/image";
import AnimatedParagraph from "../ui/AnimatedParagraph";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";

import blondHaircut from '../../../../public/images/blondhaircut.jpg';
import blondMirror from '../../../../public/images/blondmirror.jpg';

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const introParagraph = "there was a chill guy who had a crush on the pretty girl in his chemistry class...";

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
        <motion.div
          className="bg-black h-[100vh] grow w-[50vw] flex relative items-center justify-center"
          style={{
            opacity: scrollYProgress,
            scale: scrollYProgress,
          }}
        >
          <Image
            className="absolute left-1/4 z-[1] rounded-2xl shadow-2xl"
            src={blondHaircut}
            width={250}
            height={250}
            alt="Me in the car with a haircut and i'm blond"
          />
          <Image
            className="absolute right-1/4 bottom-16 z-[2] rounded-2xl shadow-2xl"
            src={blondMirror}
            width={200}
            height={200}
            alt="blond me in the mirror"
          />
        </motion.div>
      </div>
    </div>
  );
}
