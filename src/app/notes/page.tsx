import NoteList from "@/app/components/NoteList";
import { getNotesByCreated } from "../actions/note-dao";

export default async function Notes() {
  const notes = await getNotesByCreated();
  return (
    <div className="flex pt-24 justify-center bg-gradient-to-br from-red-300 to-purple-400">
      <div className="w-full max-w-3xl">
        <NoteList initialNotes={notes} />
      </div>
    </div>
  );
}