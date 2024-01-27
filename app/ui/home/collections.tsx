import React from "react";
import { fetchProductCollections } from "@/app/lib/data";
import ProductCart from "./product-cart";
import { PRODUCT } from "@/app/lib/definitions";

function TripleCollections({
  firstProduct,
  otherProducts,
}: {
  firstProduct: PRODUCT;
  otherProducts: PRODUCT[];
}) {
  return (
    <div className="grid gap-y-2.5 p-4 lg:px-6 max-w-screen-xl mx-auto md:grid-cols-2 md:gap-x-2.5">
      <div className="md:row-start-1 md:row-end-3">
        <ProductCart
          id={firstProduct.id}
          type="big"
          image={firstProduct.image}
          altText={firstProduct.name}
          name={firstProduct.name}
          price={firstProduct.price}
        />
      </div>
      <div>
        <ProductCart
          id={otherProducts[0].id}
          image={otherProducts[0].image}
          altText={otherProducts[0].name}
          name={otherProducts[0].name}
          price={otherProducts[0].price}
        />
      </div>
      <div className="md:col-start-2">
        <ProductCart
          id={otherProducts[1].id}
          image={otherProducts[1].image}
          altText={otherProducts[1].name}
          name={otherProducts[1].name}
          price={otherProducts[1].price}
        />
      </div>
    </div>
  );
}
function QuaternaryCollections({ products }: { products: PRODUCT[] }) {
  return (
    <div className="grid gap-y-2.5 p-4 lg:px-6 max-w-screen-xl mx-auto md:grid-cols-2 md:gap-x-2.5">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCart
            id={product.id}
            image={product.image}
            altText={product.name}
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
}

export default async function Collections() {
  const data = await fetchProductCollections();

  return (
    <>
      <TripleCollections
        firstProduct={data?.tripleBigProduct[0]}
        otherProducts={data?.tripleSmallProducts}
      />
      <QuaternaryCollections products={data?.quadrantProducts} />
    </>
  );
}
