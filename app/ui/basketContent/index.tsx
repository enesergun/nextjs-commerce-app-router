import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import useShoppingCart from "@/app/store";
import Link from "next/link";
import BasketElement from "./basket-element";
import Button from "@/app/ui/elements/button";

function BasketContent() {
  const { cart, totalCount, totalPrice } = useShoppingCart();

  return (
    <div className="mt-3">
      <h1 className="text-xl">Sepetim</h1>
      {totalCount === 0 ? (
        <div className="mt-4 flex flex-col gap-3 items-center justify-center">
          <ShoppingCartIcon className="h-14 w-14" />
          <p>Sepet Boş</p>
        </div>
      ) : (
        <>
          <div className="mt-4 flex flex-col gap-10 divide-y">
            {cart.map((element) => (
              <BasketElement
                key={element.id}
                id={element.id}
                name={element.name}
                price={element.price}
                image={element.image}
                count={element.count}
                theme="dark"
              />
            ))}
          </div>
          <div className="mt-5 border-t py-4 ">
            <div className="flex justify-between">
              <span>Ara Toplam ({totalCount} ürün)</span>{" "}
              <span>₺ {totalPrice}</span>
            </div>
            <Link href="/sepet">
              <Button text="Sepete Git" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default BasketContent;
