import React from "react";
import OrderSummary from "@/app/ui/checkout/layout";
import Breadcrumbs from "@/app/ui/layout/breadcrumbs";
import { basketBreadcrumbs } from "@/app/lib/placeholder-data";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrderSummary />
      <Breadcrumbs data={basketBreadcrumbs} />
      {children}
    </>
  );
}
