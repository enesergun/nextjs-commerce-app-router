// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
export function CategorySkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden w-16 min-w-16 md:w-24 flex flex-col justify-center items-center bg-gray-100 p-2 shadow-sm rounded-xl`}
    >
      <div className="w-16 h-16 rounded-full bg-gray-200" />
      <div className="mt-2 w-24 h-4 bg-gray-200 rounded-md" />
    </div>
  );
}

export function CategoriesSkeleton() {
  return (
    <div className="flex gap-4 overflow-auto text-center max-w-screen-xl mx-auto md:justify-evenly overflow-y-scroll no-scrollbar">
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
      <CategorySkeleton />
    </div>
  );
}
