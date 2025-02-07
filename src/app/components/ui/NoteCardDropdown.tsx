"use client";

import { deleteNote, Note } from "@/app/actions/note-dao";
import { useEffect, useRef, useState } from "react";

export default function NoteCardDropdown({
  note
}: {
  note: Note
}) {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDeletePost = async () => {
    try {
      await deleteNote(note.id);
    } catch (error) {
      console.error(error);
    } finally {
      setIsVisible(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl font-bold rounded-full hover:bg-white/20"
      >
        <span className="inline-block align-text-top absolute -top-1.5 text-white">...</span>
      </button>

      {isVisible &&
        <div
          ref={dropdownRef}
          className="absolute top-11 right-3 bg-white rounded-md shadow-lg"
        >
          <button
            className="text-red-500 text-xl block w-full text-left p-2 hover:bg-black/30 rounded-md"
            onClick={handleDeletePost}
          >
            delete 🗑️
          </button>
        </div>
      }
    </>
  );
}