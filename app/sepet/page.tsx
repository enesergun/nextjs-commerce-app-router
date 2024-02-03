import React from "react";
import Information from "@/app/ui/checkout/information";
import { getExistData } from "@/app/lib/actions";
export default async function Page() {
  const existInformationData = await getExistData();

  return <Information data={existInformationData} />;
}
