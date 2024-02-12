import React from "react";
import { ProductProps } from "@/app/lib/definitions";
import { addToCartFnc, removeToCartFnc } from "@/app/utils/addToCart";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import useShoppingCart from "@/app/store";
import clsx from "clsx";
export default function BasketElement({
  id,
  name,
  price,
  image,
  count,
  theme,
}: Readonly<ProductProps>) {
  const { addToCart, removeFromCart } = useShoppingCart();

  const totalPricePerProduct = (parseFloat(price) * count).toFixed(2);
  return (
    <div className="flex justify-between pt-5">
      <div className="h-[75px] w-[75px]">
        <Image
          src={image}
          alt={name}
          width={75}
          height={75}
          className="rounded-2xl h-full w-full object-contain"
          sizes="100vw"
          priority
        />
      </div>
      <div className="w-2/5">
        <p>{name}</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-center">₺ {totalPricePerProduct}</div>
        <div
          className={clsx(
            "flex ml-auto h-9 flex-row items-center rounded-full border border-neutral-200 w-24 justify-evenly",
            {
              "bg-neutral-50": theme === "light",
            }
          )}
        >
          <MinusIcon
            className="h-4 w-4 cursor-pointer"
            onClick={() => removeToCartFnc({ id }, removeFromCart)}
          />
          <span>{count}</span>
          <PlusIcon
            className="h-4 w-4 cursor-pointer"
            onClick={() => addToCartFnc({ id, name, price, image }, addToCart)}
          />
        </div>
      </div>
    </div>
  );
}
