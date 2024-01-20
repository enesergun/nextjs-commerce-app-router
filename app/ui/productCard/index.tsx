import React from "react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="rounded-2xl border border-neutral-300 max-w-[300px] h-[488px]">
      <Image
        src="/products/black_hoodie_mockup.png"
        alt="product 1"
        width={275}
        height={200}
        className="rounded-2xl object-cover"
      />
      <div className="flex flex-col p-3 gap-2.5">
        <h3 className="text-neutral-600 font-bold">Ürün Adı</h3>
        <span> ₺ 34,55</span>
        <button className="border border-neutral-300 rounded-lg p-1.5 text-sm sm:hover:bg-neutral-100">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}
