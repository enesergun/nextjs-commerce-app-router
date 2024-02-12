import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  id: string;
  type?: "big" | "small";
  image: string;
  altText: string;
  name: string;
  price: string;
}
export default function ProductCart({
  id,
  type,
  image,
  altText,
  name,
  price,
}: Readonly<Props>) {
  return (
    <Link href={`/urun/${id}`}>
      <div className="h-full">
        <Image
          src={image}
          width={611}
          height={type === "big" ? 800 : 440}
          alt={altText}
          className="w-full h-full rounded-2xl object-cover"
          sizes="100vw"
        />
        <div className="absolute">
          <div className="relative bottom-20 left-7 rounded-full bg-stone-300 p-3 text-sm">
            <span className="mr-3">{name}</span>
            <span>₺ {price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
