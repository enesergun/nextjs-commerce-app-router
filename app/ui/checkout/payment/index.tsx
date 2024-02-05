import React from "react";
import ShippingToInfo from "@/app/ui/checkout/shipping/shipping-info";
import { getExistData } from "@/app/lib/actions";
import PaymentSummary from "./payment-summary";
export default async function PaymentApprovement() {
  const basketInformation = await getExistData("basket_information");
  const shippingMethod = await getExistData("shipping_method");

  const infoData = [
    {
      id: 1,
      title: "Email",
      value: basketInformation?.email,
      changeLink: "/sepet",
    },
    {
      id: 2,
      title: "Adres",
      value: basketInformation?.address,
      changeLink: "/sepet",
    },
    {
      id: 3,
      title: "Kargo",
      value: shippingMethod?.method,
      changeLink: "/sepet/kargo",
    },
  ];
  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto sm:w-full">
      <ShippingToInfo data={infoData} />
      <PaymentSummary shippingMethod={shippingMethod?.method} />
    </div>
  );
}
