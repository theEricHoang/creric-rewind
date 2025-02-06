import NoteList from "@/app/components/NoteList";

export default function Notes() {
  return (
    <div className="flex pt-24 justify-center bg-gradient-to-br from-red-300 to-purple-400">
      <div className="w-full max-w-3xl">
        <NoteList />
      </div>
    </div>
  );
}