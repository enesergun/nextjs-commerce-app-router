import CampaignDetail from "@/app/ui/campaign/campaign-detail";
export default function Page({ params }: { params: { slug: string } }) {
  return <CampaignDetail slug={params.slug} />;
}
