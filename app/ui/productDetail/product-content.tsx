"use client";
import React from "react";
import Image from "next/image";
import { ProductDetailProps } from "@/app/lib/definitions";
import { addToCartFnc } from "@/app/utils/addToCart";
import useShoppingCart from "@/app/store";
export default function ProductContent({ data }: Readonly<ProductDetailProps>) {
  const { addToCart } = useShoppingCart();
  return (
    <>
      <div>
        <Image
          src={data?.image}
          width={450}
          height={250}
          alt={data?.name}
          className="rounded-2xl"
        />
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:w-2/5">
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-950 mb-2 sm:mb-0">
          {data?.name}
        </h1>
        <div className="p-3 bg-blue-200 w-max rounded-xl">₺ {data?.price}</div>
        <article className="border-y py-5 ">{data?.description}</article>
        <div>
          <button
            className="w-full mt-4 bg-sky-400 text-white p-3 rounded-2xl"
            onClick={() =>
              addToCartFnc(
                {
                  id: data?.id,
                  name: data?.name,
                  price: data?.price,
                  image: data?.image,
                },
                addToCart,
              )
            }
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </>
  );
}
