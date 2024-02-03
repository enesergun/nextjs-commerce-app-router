import type { Metadata } from "next";
import React from "react";
import Information from "@/app/ui/checkout/information";
import { getExistData } from "@/app/lib/actions";
export const metadata: Metadata = {
  title: "Sepet",
  description: "Siparişinizi hemen tamamlayın hemen teslim edelim!",
};
export default async function Page() {
  const existInformationData = await getExistData();

  return <Information data={existInformationData} />;
}
