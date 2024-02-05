import React from "react";
import type { Metadata } from "next";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
export const metadata: Metadata = {
  title: "Sipariş Başarılı",
  description: "Siparişinizi bcaşarılı bir şekilde oluşturdunuz",
};

function SuccessState() {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center">
      <CheckCircleIcon className="text-green-600 w-24 h-24 sm:w-36 sm:h-36" />
      <h1 className="text-xl sm:text-2xl font-bold text-cyan-950 my-4 text-center">
        Siparişiniz başarılı bir şekilde oluşturulmuştur.{" "}
      </h1>
    </div>
  );
}

function Page() {
  return (
    <div>
      <SuccessState />
    </div>
  );
}

export default Page;
