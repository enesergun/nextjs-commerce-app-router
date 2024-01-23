import React from "react";
import ProductCard from "../productCard";
import { fetchProductWithCategory } from "@/app/lib/data";
import { NoSymbolIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

async function Products({ params }: { params: string }) {
  const data = await fetchProductWithCategory(params);

  return (
    <div
      className={clsx(
        "p-4 lg:px-6 flex flex-col items-center justify-center sm:justify-start gap-6 sm:flex-row flex-wrap w-full max-w-screen-xl mx-auto",
        {
          "sm:justify-center": data.length === 0,
        },
      )}
    >
      {data.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <NoSymbolIcon className="h-20 w-20" />
          <h1 className="text-2xl sm:text-3xl font-bold text-cyan-950 mb-2 sm:mb-0">
            Ürün Bulunamadı
          </h1>
        </div>
      )}
      {data.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Products;
