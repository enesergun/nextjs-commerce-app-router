import React from "react";
import { categories } from "@/app/lib/placeholder-data";
import type { CATEGORY_NAMES } from "@/app/lib/definitions";
import CategoryCart from "./category-cart";

export default function categoryList() {
  return (
    <div className="p-4 lg:px-6">
      <div className="flex gap-4 overflow-auto text-center max-w-screen-xl mx-auto md:justify-evenly overflow-y-scroll no-scrollbar">
        {categories.map((category: CATEGORY_NAMES) => (
          <CategoryCart key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
}
