import React from "react";

import ProductCart from "./product-cart";

function TripleCollections() {
  return (
    <div className="grid gap-y-2.5 p-4 lg:px-6 max-w-screen-xl mx-auto md:grid-cols-2 md:gap-x-2.5">
      <div className="md:row-start-1 md:row-end-3">
        <ProductCart
          type="big"
          image="/products/black_hoodie_mockup.png"
          altText="image 1"
        />
      </div>
      <div className="">
        <ProductCart image="/laptop.png" altText="image 2" />
      </div>
      <div className="md:col-start-2">
        <ProductCart image="/headphone.png" altText="image 3" />
      </div>
    </div>
  );
}
function QuaternaryCollections() {
  return (
    <div className="grid gap-y-2.5 p-4 lg:px-6 max-w-screen-xl mx-auto md:grid-cols-2 md:gap-x-2.5">
      <div className="">
        <ProductCart image="/products/jean.png" altText="image 4" />
      </div>
      <div className="">
        <ProductCart image="/products/shoes.png" altText="image 5" />
      </div>
      <div className="">
        <ProductCart image="/products/fridge.png" altText="image 6" />
      </div>
      <div className="">
        <ProductCart image="/products/pan.png" altText="image 7" />
      </div>
    </div>
  );
}

export default function Collections() {
  return (
    <>
      <TripleCollections />
      <QuaternaryCollections />
    </>
  );
}
