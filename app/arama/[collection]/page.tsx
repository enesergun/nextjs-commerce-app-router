import Products from "@/app/ui/search/products";
import { Metadata, ResolvingMetadata } from "next";
import { collectionsMetaData } from "@/app/lib/placeholder-data";
import { Suspense } from "react";
import { ProductsSkeleton } from "@/app/ui/skeletons";
type Props = {
  params: { collection: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const category = collectionsMetaData.find(
    (element) => element.link === params.collection,
  );

  return {
    title: category?.title,
    description: category?.description,
    openGraph: {
      images: category?.openGraphImage,
    },
  };
}
export default function Page({ params }: { params: { collection: string } }) {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <Products params={params.collection} />
    </Suspense>
  );
}
