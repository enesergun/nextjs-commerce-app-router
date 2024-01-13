import React from "react";
import type { CATEGORY_NAMES } from "@/app/lib/definitions";
import CategoryCart from "./category-cart";
import { fetchCategories } from "@/app/lib/data";

export default async function categoryList() {
  const categories = await fetchCategories();

  return (
    <div className="p-4 lg:px-6">
      <div className="flex gap-4 overflow-auto text-center max-w-screen-xl mx-auto md:justify-evenly overflow-y-scroll no-scrollbar">
        {categories.map((category: CATEGORY_NAMES) => (
          <CategoryCart key={category.category_id} data={category} />
        ))}
      </div>
    </div>
  );
}
