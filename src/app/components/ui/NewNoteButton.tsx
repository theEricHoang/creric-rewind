"use client";

import { useState } from "react";
import NewNoteModal from "../NewNoteModal";
import { AnimatePresence, motion } from "motion/react";

export default function NewNoteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        className="border-white/40 inline-flex h-12 items-center justify-center rounded-md px-2 text-3xl font-bold shadow-md border hover:bg-white/30"
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        new +
      </motion.button>
      {isModalOpen &&
        <NewNoteModal onClose={() => setIsModalOpen(false)} />
      }
    </>
  );
}