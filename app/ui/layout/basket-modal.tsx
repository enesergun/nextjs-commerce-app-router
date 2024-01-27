"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import OpenBasket from "./open-basket";
import BasketContent from "@/app/ui/basketContent";

function BasketModal() {
  const [isOpen, setIsOpen] = useState(false);
  const basketOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <div>
      <button onClick={basketOpen}>
        <OpenBasket />
      </button>

      {isOpen && (
        <div
          className="fixed w-full h-full top-0 right-0 left-0 bottom-0 bg-black z-20 opacity-50"
          onClick={() => basketOpen()}
        ></div>
      )}

      <div
        className={`${
          isOpen
            ? "opacity-100 translate-x-0 overflow-auto"
            : "opacity-0 translate-x-full"
        } transition-all transform duration-500 ease-in-out bg-white fixed  h-screen w-full top-0 right-0 shadow-xl z-40 p-4 lg:w-[450px] lg:px-6`}
      >
        <button
          aria-label="Close mobile menu"
          className="flex  h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 float-right"
          onClick={basketOpen}
        >
          <XMarkIcon className="h-4" />
        </button>

        <BasketContent />
      </div>
    </div>
  );
}

export default BasketModal;
