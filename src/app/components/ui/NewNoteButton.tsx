"use client";

import { useState } from "react";
import NewNoteModal from "../NewNoteModal";

export default function NewNoteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="border-white/40 inline-flex h-12 items-center justify-center rounded-md px-2 text-3xl font-bold shadow-md border hover:bg-white/30"
        onClick={() => setIsModalOpen(true)}
      >
        new +
      </button>

      {isModalOpen &&
        <NewNoteModal onClose={() => setIsModalOpen(false)} />
      }
    </>
  );
}