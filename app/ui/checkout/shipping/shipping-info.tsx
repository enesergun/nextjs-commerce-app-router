import { ShippingToInfoProps } from "@/app/lib/definitions";
import Link from "next/link";
import React from "react";

function InformationElement({
  title,
  value,
  link,
}: {
  title: string;
  value: string;
  link: string;
}) {
  return (
    <div className="flex justify-between items-center p-3 text-sm">
      <span className="text-cyan-950">{title}</span>
      <span className="max-w-[170px] line-clamp-3">{value}</span>
      <Link href={link}>
        <span className="text-xs text-cyan-700 hover:underline">Değiştir</span>
      </Link>
    </div>
  );
}

function ShippingToInfo({ data }: { data: ShippingToInfoProps[] }) {
  return (
    <div className="border rounded-lg divide-y divide-dashed">
      {data?.map((element: any) => (
        <InformationElement
          key={element?.id}
          title={element?.title}
          value={element?.value}
          link={element?.changeLink}
        />
      ))}
    </div>
  );
}

export default ShippingToInfo;
