import React from "react";
import { SearchParamsProps } from "@/app/lib/definitions";
import ProductList from "@/app/ui/search/productList";
import { getSearchResult } from "@/app/lib/data";
export default async function SearchResult({
  searchParams,
}: Readonly<SearchParamsProps>) {
  const data = await getSearchResult(searchParams?.q);

  return <ProductList data={data} />;
}
