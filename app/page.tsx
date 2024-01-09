import CategoryList from "@/app/ui/home/category-list";
import CampaignBanner from "@/app/ui/home/campaign-banner";
import Collections from "@/app/ui/home/collections";
import SectionTitle from "@/app/ui/section-title";
export default function Home() {
  return (
    <main className="pt-[82px] min-h-screen">
      <CategoryList />
      <CampaignBanner />
      <SectionTitle title="Koleksiyonlar" />
      <Collections />
    </main>
  );
}
