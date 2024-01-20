import React from "react";
import Categories from "@/app/ui/search/category-wrapper";
export default function Layout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <Categories />
      {children}
    </>
  );
}
