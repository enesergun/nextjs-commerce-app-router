import Image from "next/image";
import React from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import useShoppingCart from "@/app/store";
import { ProductProps } from "@/app/lib/definitions";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { addToCartFnc, removeToCartFnc } from "@/app/utils/addToCart";

function BasketElement({
  id,
  name,
  price,
  image,
  count,
}: Readonly<ProductProps>) {
  const { addToCart, removeFromCart } = useShoppingCart();

  const totalPricePerProduct = (parseFloat(price) * count).toFixed(2);
  return (
    <div className="flex justify-between pt-5">
      <div className="h-[75px]">
        <Image
          src={image}
          width={75}
          height={75}
          alt={name}
          className="rounded-2xl h-full"
        />
      </div>
      <div className="w-2/5">
        <p>{name}</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-center">₺ {totalPricePerProduct}</div>
        <div className="flex ml-auto h-9 flex-row items-center rounded-full border border-neutral-200 w-24 justify-evenly">
          <MinusIcon
            className="h-4 w-4"
            onClick={() => removeToCartFnc({ id }, removeFromCart)}
          />
          <span>{count}</span>
          <PlusIcon
            className="h-4 w-4"
            onClick={() => addToCartFnc({ id, name, price, image }, addToCart)}
          />
        </div>
      </div>
    </div>
  );
}

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
              />
            ))}
          </div>
          <div className="mt-5 border-t py-4 ">
            <div className="flex justify-between">
              <span>Ara Toplam ({totalCount} ürün)</span>{" "}
              <span>₺ {totalPrice}</span>
            </div>
            <div>
              <button className="w-full mt-4 bg-sky-400 text-white p-3 rounded-2xl">
                Sepete Git
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BasketContent;
