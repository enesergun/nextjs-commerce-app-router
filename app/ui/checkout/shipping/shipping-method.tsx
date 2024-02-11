import React from "react";
import RadioCard from "@/app/ui/elements/radio-card";
import Button from "@/app/ui/elements/button";
import { submitShipping } from "@/app/lib/actions";
function ShippingMethod({ data }: { data: string }) {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold text-cyan-950 my-4">
        Teslimat Tercihi
      </h1>
      <form action={submitShipping}>
        <fieldset className="flex flex-col gap-4">
          <RadioCard
            value="Yürüyerek"
            title="Yürüyerek"
            header={75.5}
            description="Kargonuzu yürüyerek getireceğiz. Tahmini teslimat süresi 10-15 gün.Belki birkaç gün daha uzayabilir yolda güzel bir yöresel lezzete denk gelirsek onu yemek için durabiliriz."
            checked={data === "Yürüyerek" || !data}
          />
          <RadioCard
            value="Koşarak"
            title="Koşarak"
            header={123.25}
            description="Kargonuzu koşarak getireceğiz. Tahmini teslimat süresi 7-8 gün. Kuryelerimiz kondisyonu çok iyi olmadığı için arada bir dinleneceklerdir."
            checked={data === "Koşarak"}
          />
        </fieldset>
        <Button text="Devam Et" type="submit" />
      </form>
    </div>
  );
}

export default ShippingMethod;
