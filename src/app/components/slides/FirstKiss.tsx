'use client';

import pocky from "../../../../public/images/pocky.webp";
import drool from "../../../../public/images/drool.webp";
import Image from "next/image";

export default function FirstKiss() {
  return (
    <div className="h-[150vh] flex overflow-visible bg-gradient-to-b from-rose-400 to-green-200 z-[1]">
      <div
        className="sticky top-0 h-[100vh] flex flex-row"
      >
        <div className="h-[100vh] grow w-[50vw] flex relative items-center justify-center">
          <Image
            src={pocky}
            alt="sakura matcha pocky"
            className="absolute rounded-full shadow-2xl animate-spin"
            width={300}
            height={300}
          />
          <Image
            src={drool}
            alt="drooling face"
            className="absolute bottom-1/4 right-1/4 rounded-full shadow-2xl animate-bounce z-[2]"
            width={100}
            height={100}
          />
        </div>

        <div className="h-[100vh] grow w-[50vw] flex items-center justify-end p-12">
          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg">
            <p className="text-5xl font-bold">
              we shared our first kiss with cherry blossom matcha pocky 🤤
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}