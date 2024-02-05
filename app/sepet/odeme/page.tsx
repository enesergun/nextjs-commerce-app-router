import React from "react";
import PaymentApprovement from "@/app/ui/checkout/payment";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ödeme",
  description:
    "Siparişinizi oluşturmak için özete göz atın ve Tamamla butonuna basın",
};

function Page() {
  return <PaymentApprovement />;
}

export default Page;
