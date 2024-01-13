import CategoryList from "@/app/ui/home/category-list";
import CampaignBanner from "@/app/ui/home/campaign-banner";
import Collections from "@/app/ui/home/collections";
import SectionTitle from "@/app/ui/section-title";
import { Suspense } from "react";
import { CategoriesSkeleton } from "@/app/ui/skeletons";
export default function Home() {
  return (
    <main className="pt-[82px] min-h-screen">
      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoryList />
      </Suspense>
      <CampaignBanner />
      <SectionTitle title="Koleksiyonlar" />
      <Collections />
    </main>
  );
}
