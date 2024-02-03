import React from "react";
import OrderSummary from "@/app/ui/checkout/layout";
import Breadcrumbs from "@/app/ui/layout/breadcrumbs";
import { basketBreadcrumbs } from "@/app/lib/placeholder-data";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:flex sm:flex-1 sm:overflow-hidden sm:flex-row-reverse p-4 lg:px-6 max-w-screen-xl mx-auto">
      <OrderSummary />
      <div className="sm:w-3/5">
        <Breadcrumbs data={basketBreadcrumbs} />
        {children}
      </div>
    </div>
  );
}
