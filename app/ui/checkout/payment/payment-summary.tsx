"use client";
import React from "react";
import useShoppingCart from "@/app/store";
import Button from "@/app/ui/elements/button";
import { completePayment } from "@/app/utils/completePayment";
import { useRouter } from "next/navigation";
export default function PaymentSummary({
  shippingMethod,
}: {
  shippingMethod: string;
}) {
  const router = useRouter() as any;
  const { totalPrice, clearCart } = useShoppingCart();
  let shippingPrice = shippingMethod === "Yürüyerek" ? 75.5 : 123.25;

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold text-cyan-950 my-4">Özet</h1>
      <ul className="divide-y">
        <li className="text-lg flex justify-between py-2">
          <span>Sepet Toplamı:</span> <span>₺ {totalPrice}</span>
        </li>
        <li className="text-lg flex justify-between py-2">
          <span>Kargo:</span> <span> ₺ {shippingPrice}</span>
        </li>
        <li className="text-lg flex justify-between py-2">
          <span className="font-extrabold">Toplam Tutar:</span>
          <span> ₺ {totalPrice + shippingPrice}</span>
        </li>
      </ul>
      <Button
        text="Tamamla"
        onClick={() => completePayment(router, clearCart)}
      />
    </div>
  );
}
