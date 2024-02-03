import React from "react";
import RadioCard from "@/app/ui/elements/radio-card";

function ShippingMethod() {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold text-cyan-950 my-4">
        Teslimat Tercihi
      </h1>
      <fieldset className="flex flex-col gap-4">
        <RadioCard
          value={"walking"}
          title="Yürüyerek"
          header={15.22}
          description="Kargonuzu yürüyerek getireceğiz. Tahmini teslimat süresi 10-15 gün.Belki birkaç gün daha uzayabilir yolda güzel bir yöresel lezzete denk gelirsek"
        />
        <RadioCard
          value={"running"}
          title="Koşarak"
          header={33.22}
          description="Kargonuzu yürüyerek getireceğiz. Tahmini teslimat süresi 10-15 gün.Belki birkaç gün daha uzayabilir yolda güzel bir yöresel lezzete denk gelirsek"
        />
      </fieldset>
    </div>
  );
}

export default ShippingMethod;
