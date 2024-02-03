import Shipping from "@/app/ui/checkout/shipping";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kargo",
  description:
    "Teslimat seçeneklerini hemen işaretleyin kargoya uçarak gidelim!",
};

function Page() {
  return <Shipping />;
}

export default Page;
