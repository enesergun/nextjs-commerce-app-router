// Loading animation
const shimmer =
  "before:content-'' before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer_2s_infinite before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CategorySkeleton() {
  return (
    <div
      className={`relative overflow-hidden w-16 min-w-16 md:w-24 flex flex-col justify-center items-center p-2 rounded-xl ${shimmer}`}
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

export function CampaignBannerSkeleton() {
  return (
    <div className="loading-skeleton p-4 lg:px-6 max-w-screen-xl mx-auto h-[550px] bg-gray-200 rounded-2xl">
      <div className=" w-full h-full rounded-2xl animate-pulse" />
    </div>
  );
}
export function ProductCartSkeleton({ big }: { big?: boolean }) {
  return (
    <div className="h-full loading-skeleton">
      <div
        className={`w-[343px] sm:w-[640px] md:w-[768px] lg:w-full ${
          big ? "h-full" : "h-[440px]"
        } bg-gray-200 rounded-2xl animate-pulse`}
      ></div>
      <div className="absolute">
        <div className="relative bottom-20 left-7 rounded-full bg-stone-300 p-3 text-sm w-[104px] h-[44px]">
          <span className=""></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
export function TripleCollectionsSkeleton() {
  return (
    <div className="grid gap-y-2.5 p-4 lg:px-6 max-w-screen-xl mx-auto md:grid-cols-2 md:gap-x-2.5">
      <div className="md:row-start-1 md:row-end-3">
        <ProductCartSkeleton big={true} />
      </div>
      <div>
        <ProductCartSkeleton />
      </div>
      <div className="md:col-start-2">
        <ProductCartSkeleton />
      </div>
    </div>
  );
}
export function QuaternaryCollectionsSkeleton() {
  return (
    <div className="grid gap-y-2.5 p-4 lg:px-6 max-w-screen-xl mx-auto md:grid-cols-2 md:gap-x-2.5">
      <ProductCartSkeleton />
      <ProductCartSkeleton />
      <ProductCartSkeleton />
      <ProductCartSkeleton />
    </div>
  );
}

export function CollectionSkeleton() {
  return (
    <>
      <TripleCollectionsSkeleton />
      <QuaternaryCollectionsSkeleton />
    </>
  );
}
export function ProductSkeleton() {
  return (
    <div className="rounded-2xl border border-neutral-300 max-w-[300px] h-[425px] animate-pulse">
      <div className="h-[275px] bg-gray-300 rounded-2xl"></div>
      <div className="flex flex-col p-3 gap-2.5">
        <h3 className="bg-gray-200 text-neutral-600 font-bold w-[125px] h-[20px]"></h3>
        <div className="w-[75px] h-[20px] bg-gray-200"></div>

        <button className=" w-[251px] h-[34px] bg-gray-200 border border-neutral-300 rounded-lg p-1.5 text-sm sm:hover:bg-neutral-100"></button>
      </div>
    </div>
  );
}
export function ProductsSkeleton() {
  return (
    <div className="p-4 lg:px-6 flex flex-col items-center justify-center sm:justify-start gap-6 sm:flex-row flex-wrap w-full max-w-screen-xl mx-auto">
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </div>
  );
}
