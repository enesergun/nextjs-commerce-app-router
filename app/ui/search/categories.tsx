"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CategoryListProps } from "@/app/lib/definitions";

const Categories: FC<CategoryListProps> = ({ data }) => {
  const pathname = usePathname();
  return (
    <div>
      <ul className="flex gap-4 p-4 lg:px-6 max-w-screen-xl mx-auto overflow-auto md:justify-evenly overflow-y-scroll no-scrollbar">
        {data.map((category) => (
          <li
            key={category.category_id}
            className={`rounded-2xl min-w-[100px] text-center p-2.5 ${
              pathname === `/arama${category.category_link}`
                ? "bg-sky-700"
                : "bg-slate-500"
            } text-white`}
          >
            <Link href={`/arama${category.category_link}`}>
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
