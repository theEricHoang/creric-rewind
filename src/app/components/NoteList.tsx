import { getNotesByCreated } from "@/app/actions/note-dao";
import NoteCard from "./NoteCard";
import NewNoteButton from "./ui/NewNoteButton";

export default async function NoteList() {
  const notes = await getNotesByCreated();

  return (
    <>
      <div className="flex flex-1 justify-end">
        <NewNoteButton />
      </div>

      <ul>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </ul>
    </>
  );
}