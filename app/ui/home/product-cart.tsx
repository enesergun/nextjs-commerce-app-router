import React from "react";
import Image from "next/image";
interface Props {
  type?: "big" | "small";
  image: string;
  altText: string;
  name: string;
  price: string;
}
export default function ProductCart({
  type,
  image,
  altText,
  name,
  price,
}: Readonly<Props>) {
  return (
    <div className="h-full">
      <Image
        src={image}
        width={611}
        height={type === "big" ? 800 : 440}
        alt={altText}
        className="w-full h-full rounded-2xl"
      />
      <div className="absolute">
        <div className="relative bottom-20 left-7 rounded-full bg-stone-300 p-3 text-sm">
          <span className="mr-3">{name}</span>
          <span>₺ {price}</span>
        </div>
      </div>
    </div>
  );
}
