"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import OpenBasket from "./open-basket";

function BasketModal() {
  const [isOpen, setIsOpen] = useState(false);
  const basketOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <div>
      <button onClick={basketOpen}>
        <OpenBasket />
      </button>

      <div
        className={`${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } transition-all transform duration-500 ease-in-out bg-white fixed  h-screen w-full top-0 right-0 shadow-xl z-40 p-4 lg:w-[450px] lg:px-6`}
      >
        <button
          aria-label="Close mobile menu"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 float-right"
          onClick={basketOpen}
        >
          <XMarkIcon className="h-4" />
        </button>
        {/* Content of the modal */}
      </div>
    </div>
  );
}

export default BasketModal;
