'use client';

import { differenceInDays } from "date-fns";
import { useMotionValue, motion, useTransform, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export default function HowLong() {
  const dayCount = useMotionValue(0);
  const rounded = useTransform(() => Math.round(dayCount.get()));
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const daysSince = differenceInDays(new Date(), new Date('2024-05-09'));

  useEffect(() => {
    if (isInView) {
      const controls = animate(dayCount, daysSince, { duration: 2 });
      return () => controls.stop();
    }
  }, [isInView, animate, dayCount, daysSince]);

  return(
    <div ref={scope} className="h-[150vh] flex overflow-visible bg-gradient-to-b from-indigo-400 to-rose-400 z-[1]">
      <div
        className="sticky top-0 h-[100vh] flex flex-row"
      >
        <div className="h-[100vh] grow w-[50vw] flex items-center justify-center">
          <p className="text-6xl font-bold">
            so far, we&apos;ve dated for
          </p>
        </div>

        <div className="h-[100vh] grow w-[50vw] flex items-center justify-between p-24">
          <motion.p className="text-9xl font-bold text-red-600">{rounded}</motion.p>
          <p className="text-6xl font-bold">days !!</p>
        </div>
      </div>
    </div>
  );
}