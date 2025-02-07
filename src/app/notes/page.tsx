import NoteList from "@/app/components/NoteList";
import { Suspense } from "react";

export default function Notes() {
  return (
    <div className="min-h-screen flex pt-24 justify-center bg-gradient-to-br from-red-300 to-purple-400">
      <div className="w-full max-w-3xl">
        <Suspense fallback={
          <h1>loading...</h1>
        }>
          <NoteList />
        </Suspense>
      </div>
    </div>
  );
}