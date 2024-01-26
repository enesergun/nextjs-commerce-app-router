import CampaignDetail from "@/app/ui/campaign/campaign-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kampanya Detay",
  description: "Kampanya detaylarına ulaşmak için linke tıkla!",
};
export default function Page({ params }: { params: { slug: string } }) {
  return <CampaignDetail slug={params.slug} />;
}
