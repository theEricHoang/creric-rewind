import NoteList from "@/app/components/NoteList";
import { Suspense } from "react";
import NoteListSkeleton from "../components/NoteSkeletons";

export default function Notes() {
  return (
    <div className="min-h-screen flex pt-24 justify-center bg-gradient-to-br from-red-300 to-purple-400">
      <div className="w-full max-w-3xl">
        <Suspense fallback={
          <NoteListSkeleton />
        }>
          <NoteList />
        </Suspense>
      </div>
    </div>
  );
}