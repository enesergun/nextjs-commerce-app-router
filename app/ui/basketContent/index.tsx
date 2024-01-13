import Image from "next/image";
import React from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

function BasketElement() {
  return (
    <div className="flex justify-between pt-5">
      <Image
        src="https://picsum.photos/75/75"
        width={75}
        height={75}
        alt="product"
        className="rounded-2xl"
      />
      <div className="w-2/5">
        <p>Sweatshirt</p>
        <small>Sweatshirt</small>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-center">$ 7.00</div>
        <div className="flex ml-auto h-9 flex-row items-center rounded-full border border-neutral-200 w-24 justify-evenly">
          <MinusIcon className="h-4 w-4" />
          <span>1</span>
          <PlusIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

function BasketContent() {
  return (
    <div className="mt-3">
      <h1 className="text-xl">My Cart</h1>
      <div className="mt-4 flex flex-col gap-10 divide-y">
        <BasketElement />
        <BasketElement />
        <BasketElement />
        <BasketElement />
      </div>
      <div className="mt-5 border-t py-4 ">
        <div className="flex justify-between">
          <span>Ara Toplam (1 ürün)</span> <span>78,99</span>
        </div>
        <div>
          <button className="w-full mt-4 bg-sky-400 text-white p-3 rounded-2xl">
            Sepete Git
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketContent;
