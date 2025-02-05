import NewNoteButton from "../components/ui/NewNoteButton";

export default function Notes() {
  return (
    <div className="h-screen flex pt-24 justify-center bg-gradient-to-br from-red-300 to-purple-400">
      <div className="w-full max-w-3xl">
        <div className="flex flex-1 justify-end">
          <NewNoteButton />
        </div>

        
      </div>
    </div>
  );
}