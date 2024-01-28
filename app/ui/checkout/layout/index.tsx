"use client";
import React, { useState } from "react";
import useShoppingCart from "@/app/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import BasketElement from "@/app/ui/basketContent/basket-element";
export default function OrderSummary() {
  const { cart, totalPrice } = useShoppingCart();
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div>
      <div className="flex bg-neutral-200 p-4 justify-between">
        <ShoppingCartIcon className="w-6 h-6" />
        <span
          className="underline-offset-1 underline"
          onClick={() => setOpenDetail(!openDetail)}
        >
          Sepet Detayını {openDetail ? "Gizle" : "Göster"}
        </span>
        <span>₺ {totalPrice}</span>
      </div>
      <div
        className={`transition-all ease-in duration-400  ${
          openDetail ? `h-[300px]` : "h-0"
        }`}
      >
        {openDetail && (
          <div className="p-4 pt-0 transition-all duration-400 ease-in-out bg-neutral-200">
            <div className="flex flex-col gap-10 divide-y divide-neutral-400 ">
              {cart.map((element) => (
                <BasketElement
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  price={element.price}
                  image={element.image}
                  count={element.count}
                  theme="light"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
