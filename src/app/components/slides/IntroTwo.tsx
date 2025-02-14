'use client';

import AnimatedParagraph from "../ui/AnimatedParagraph";

export default function IntroTwo() {
  const paragraph = "and after a whole semester of unsuccessfully trying to get her attention solely by glancing in her direction, he finally worked up the courage to give her his number on the last day of class...";


  return (
    <div
      className="flex h-[200vh] overflow-visible bg-black"
    >
      <div
        className="flex items-center justify-center sticky top-0 h-[100vh] p-12"
      >
        <AnimatedParagraph paragraph={paragraph} />
      </div>
    </div>
  );
}