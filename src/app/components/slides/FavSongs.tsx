'use client';

import { StaticImageData } from 'next/image';
import { motion } from "motion/react";

import imogenHeap from '../../../../public/images/imogenheap.jpeg';
import aespa from '../../../../public/images/aespa.png';
import xg from '../../../../public/images/xg.jpeg';
import newjeans from '../../../../public/images/newjeans.jpg';
import tk from '../../../../public/images/tk.jpeg';
import SongCard from '../SongCard';

interface Song {
  cover: StaticImageData;
  title: string;
  artist: string;
}

export default function FavSongs() {
  const songs = [
    {
      cover: imogenHeap,
      title: "Goodnight and Go",
      artist: "Imogen Heap",
    },
    {
      cover: aespa,
      title: "Whiplash",
      artist: "aespa",
    },
    {
      cover: xg,
      title: 'HOWLING',
      artist: "XG",
    },
    {
      cover: newjeans,
      title: 'Cookie',
      artist: 'NEWJEANS',
    },
    {
      cover: tk,
      title: 'unravel',
      artist: 'TK',
    },
  ];

  return (
    <div className="flex h-[200vh] bg-gradient-to-b from-green-200 to-emerald-700 overflow-visible">
      <div className="flex flex-1 flex-col h-[100vh] sticky top-0 items-center justify-center">
        <motion.div
          className="flex flex-row"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                staggerChildren: 0.2,
                when: "beforeChildren",
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
        >
          {
            songs.map(({ cover, title, artist }: Song, i) => (
              <motion.div
                key={`i_${i}`}
                className="m-4"
                initial={{ y: 300 }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring" }}
              >
                <SongCard cover={cover} title={title} artist={artist} />
              </motion.div>
            ))
          }
        </motion.div>

        <p className="text-center font-bold text-6xl text-white">
          OUR MOST PLAYED SONGS! (idk how to check im just guessin)
        </p>
      </div>
    </div>
  );
}