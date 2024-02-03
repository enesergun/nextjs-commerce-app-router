import Link from "next/link";
import React from "react";

function InformationElement({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center p-3 text-sm">
      <span className="text-cyan-950">{title}</span>
      <span className="max-w-[170px] line-clamp-3">{value}</span>
      <Link href="/sepet">
        <span className="text-xs text-cyan-700 hover:underline">Değiştir</span>
      </Link>
    </div>
  );
}

function ShippingToInfo() {
  return (
    <div className="border rounded-lg divide-y divide-dashed">
      <InformationElement title="Email" value="enesergun1515@gmail.com" />
      <InformationElement
        title="Adres"
        value="ATatürk mahallesi ahmet ruhi yeşilyurt caddesi dostkent sitesiATatürk mahallesi ahmet ruhi yeşilyurt caddesi dostkent sitesi"
      />
    </div>
  );
}

export default ShippingToInfo;
