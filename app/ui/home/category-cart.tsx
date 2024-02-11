import React from "react";
import type { CATEGORY_NAMES } from "@/app/lib/definitions";
import Image from "next/image";

export default function CategoryCart({ data }: { data: CATEGORY_NAMES }) {
  return (
    <div className="w-16 min-w-16 md:w-24 flex flex-col justify-center items-center">
      <Image
        src={data.category_image}
        width={50}
        height={50}
        alt={data.category_name + "Kart"}
        className="w-16 h-16 rounded-full"
      />
      <p className="text-[11px] mt-2 md:text-base line-clamp-1	">
        {data.category_name}
      </p>
    </div>
  );
}
