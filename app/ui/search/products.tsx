import React from "react";
import { fetchProductWithCategory } from "@/app/lib/data";
import ProductList from "./productList";

async function Products({ params }: { params: string }) {
  const data = await fetchProductWithCategory(params);

  return <ProductList data={data} />;
}

export default Products;
