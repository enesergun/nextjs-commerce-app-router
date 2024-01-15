import React from "react";

import { fetchCampaignBanners } from "@/app/lib/data";
import CampaignBanner from "./campaign-banner";

export default async function CampaignList() {
  const categories = await fetchCampaignBanners();

  return <CampaignBanner data={categories} />;
}
