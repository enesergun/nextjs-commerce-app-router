import React from "react";
import { fetchProductDetail } from "@/app/lib/data";
import ProductContent from "./product-content";
export default async function ProductDetail({ name }: { name: string }) {
  const data = await fetchProductDetail(name);

  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto gap-3 sm:flex sm:border sm:p-12 rounded-2xl justify-around mt-5">
      <ProductContent data={data} />
    </div>
  );
}
