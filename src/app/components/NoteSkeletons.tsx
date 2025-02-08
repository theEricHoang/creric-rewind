import ButtonSkeleton from "./ui/ButtonSkeleton";
import SkeletonShimmer from "./ui/SkeletonShimmer";

export default function NoteListSkeleton() {
  return (
    <>
      <div className="flex flex-1 justify-end">
        <ButtonSkeleton />
      </div>

      <NoteCardSkeleton />
      <NoteCardSkeleton />
      <NoteCardSkeleton />
    </>
  );
}

function NoteCardSkeleton() {
  return (
    <div className="h-48 relative overflow-hidden bg-black/10 rounded-md my-4">
      <SkeletonShimmer />
    </div>
  );
}