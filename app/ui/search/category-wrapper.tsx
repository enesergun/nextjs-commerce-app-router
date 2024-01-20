import { fetchCategories } from "@/app/lib/data";
import React from "react";
import Categories from "./categories";

export default async function CategoryWrapper() {
  const data = await fetchCategories();
  return <Categories data={data} />;
}
