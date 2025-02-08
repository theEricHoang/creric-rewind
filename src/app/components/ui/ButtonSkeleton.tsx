import SkeletonShimmer from "./SkeletonShimmer";

export default function ButtonSkeleton() {
  return (
    <div
      className="bg-black/10 relative inline-flex h-12 w-20 overflow-hidden items-center justify-center rounded-md px-2"
    >
      <SkeletonShimmer />
    </div>
  );
}