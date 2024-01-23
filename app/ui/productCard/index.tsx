import React from "react";
import Image from "next/image";
import { ProductProps } from "@/app/lib/definitions";

export default function ProductCard({
  name,
  price,
  image,
}: Readonly<ProductProps>) {
  return (
    <div className="rounded-2xl border border-neutral-300 max-w-[300px] h-[425px]">
      <div className="h-[275px]">
        <Image
          src={image}
          alt={name}
          width={275}
          height={200}
          className="rounded-2xl h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-3 gap-2.5">
        <h3 className="text-neutral-600 font-bold">{name}</h3>
        <span> ₺ {price}</span>
        <button className="border border-neutral-300 rounded-lg p-1.5 text-sm sm:hover:bg-neutral-100">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}
