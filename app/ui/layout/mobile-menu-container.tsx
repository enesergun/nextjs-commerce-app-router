import React from "react";
import MobileMenu from "./mobile-menu";
import { fetchCategories } from "@/app/lib/data";

export default async function MobilMenuContainer() {
  const categories = await fetchCategories();

  return <MobileMenu categories={categories} />;
}
