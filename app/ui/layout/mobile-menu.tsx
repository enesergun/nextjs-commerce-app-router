"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { CATEGORY_NAMES } from "@/app/lib/definitions";

function Categories({ categories }: { categories: CATEGORY_NAMES[] }) {
  return (
    <div className="mt-14 flex flex-col gap-3">
      {categories?.map((category) => (
        <div key={category.category_id} className="text-lg	font-medium">
          <Link href={category.category_link}>{category.category_name}</Link>
        </div>
      ))}
    </div>
  );
}

export default function MobileMenu({
  categories,
}: {
  categories: CATEGORY_NAMES[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenHamburgerMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="sm:hidden">
      <button
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700"
        onClick={handleOpenHamburgerMenu}
      >
        <Bars3Icon className="h-4" />
      </button>

      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-all transform duration-500 ease-in-out bg-white absolute h-screen w-full top-0 left-0 shadow-xl z-40  p-4 lg:px-6  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          aria-label="Close mobile menu"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 float-right"
          onClick={handleOpenHamburgerMenu}
        >
          <XMarkIcon className="h-4" />
        </button>
        <Categories categories={categories} />
      </div>
    </div>
  );
}
