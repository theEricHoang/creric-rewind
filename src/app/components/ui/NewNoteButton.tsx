import { useState } from "react";
import NewNoteModal from "../NewNoteModal";
import { Note } from "@/app/actions/note-dao";

export default function NewNoteButton({
  setNotes
}: {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}) {
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
        <NewNoteModal setNotes={setNotes} onClose={() => setIsModalOpen(false)} />
      }
    </>
  );
}