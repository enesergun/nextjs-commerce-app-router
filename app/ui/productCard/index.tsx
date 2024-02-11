"use client";
import React from "react";
import Image from "next/image";
import { ProductProps } from "@/app/lib/definitions";
import { addToCartFnc } from "@/app/utils/addToCart";
import useShoppingCart from "@/app/store";
import Link from "next/link";
export default function ProductCard({
  id,
  name,
  price,
  image,
}: Readonly<ProductProps>) {
  const { addToCart } = useShoppingCart();
  return (
    <div className="rounded-2xl border border-neutral-300 max-w-[300px] h-[425px]">
      <Link href={`/urun/${id}`}>
        <div className="h-[275px]">
          <Image
            src={image}
            alt={name}
            width={275}
            height={200}
            className="rounded-2xl h-full object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col p-3 gap-2.5">
        <h1 className="text-neutral-600 font-bold">{name}</h1>
        <span> ₺ {price}</span>

        <button
          className="border border-neutral-300 rounded-lg p-1.5 text-sm sm:hover:bg-neutral-100"
          onClick={() => addToCartFnc({ id, name, price, image }, addToCart)}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}
