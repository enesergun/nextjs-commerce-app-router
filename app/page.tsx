import CategoryList from "@/app/ui/home/category-list";
import Collections from "@/app/ui/home/collections";
import SectionTitle from "@/app/ui/section-title";
import { Suspense } from "react";
import {
  CategoriesSkeleton,
  CampaignBannerSkeleton,
  CollectionSkeleton,
} from "@/app/ui/skeletons";
import CampaignList from "./ui/home/campaign-list";
export default function Home() {
  return (
    <>
      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoryList />
      </Suspense>
      <Suspense fallback={<CampaignBannerSkeleton />}>
        <CampaignList />
      </Suspense>
      <SectionTitle title="Koleksiyonlar" />
      <Suspense fallback={<CollectionSkeleton />}>
        <Collections />
      </Suspense>
    </>
  );
}
