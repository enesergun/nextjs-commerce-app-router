"use client";
import React, { useState } from "react";
import useShoppingCart from "@/app/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import BasketElement from "@/app/ui/basketContent/basket-element";
import clsx from "clsx";
import { EmptyBasket } from "@/app/ui/basketContent/empty-basket";
export default function OrderSummary() {
  const { cart, totalPrice, totalCount } = useShoppingCart();
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <aside className="sm:block  sm:w-2/5 sm:overflow-y-auto sm:rounded-2xl">
      {totalCount === 0 && <EmptyBasket />}
      <div
        className={clsx(
          "flex bg-neutral-200 p-4 justify-between ",
          totalCount === 0 && "hidden",
        )}
      >
        <ShoppingCartIcon className="w-6 h-6" />
        <span
          className="underline-offset-1 underline sm:hidden"
          onClick={() => setOpenDetail(!openDetail)}
        >
          Sepet Detayını {openDetail ? "Gizle" : "Göster"}
        </span>
        <span>₺ {totalPrice}</span>
      </div>
      <div
        className={clsx(
          "transition-all ease-in duration-400",
          openDetail ? "h-[300px]" : "h-0",
          totalCount === 0 && "hidden",
        )}
      >
        <div
          className={clsx(
            "p-4 pt-0 transition-all duration-400 ease-in-out bg-neutral-200",
            openDetail ? "block" : "hidden sm:block",
          )}
        >
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
      </div>
    </aside>
  );
}
