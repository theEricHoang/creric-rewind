"use client";

import { Note } from "@/app/actions/note-dao";
import NoteCard from "./NoteCard";
import { useState } from "react";
import NewNoteButton from "./ui/NewNoteButton";

export default function NoteList({
  initialNotes
}: {
  initialNotes: Note[]
}) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  return (
    <>
      <div className="flex flex-1 justify-end">
        <NewNoteButton setNotes={setNotes} />
      </div>

      <ul>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </ul>
    </>
  );
}