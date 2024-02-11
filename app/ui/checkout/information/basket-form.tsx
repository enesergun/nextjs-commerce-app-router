import React from "react";
import Input from "@/app/ui/elements/input";
import Button from "@/app/ui/elements/button";
import { State, InformationProps } from "@/app/lib/definitions";
import useShoppingCart from "@/app/store";
interface BasketFormProps {
  handleSubmit: (payload: FormData) => void;
  state: State | undefined;
  initialData: InformationProps;
}

export default function BasketForm({
  handleSubmit,
  state,
  initialData,
}: BasketFormProps) {
  const { totalCount } = useShoppingCart();
  return (
    <form action={handleSubmit}>
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-cyan-950 mb-4 ">
          İletişim
        </h1>
        <fieldset className="flex flex-col gap-4">
          <Input
            id="email"
            name="email"
            placeholder="E-mail"
            value={initialData?.email}
            inputType="email"
            ariaDescribedby="email-error"
            error={state?.errors?.email}
          />
          <Input
            id="phone"
            name="phone"
            value={initialData?.phone}
            placeholder="Telefon Numarası"
            ariaDescribedby="phone-error"
            inputType="tel"
            error={state?.errors?.phone}
          />
        </fieldset>
      </div>
      <div className="mt-3">
        <h1 className="text-xl sm:text-2xl font-bold text-cyan-950 mb-4">
          Kargo Adresi
        </h1>
        <fieldset className="flex flex-col gap-4">
          <Input
            id="addressType"
            name="addressType"
            value={initialData?.addressType}
            placeholder="Adres Tipi"
            ariaDescribedby="addressType-error"
            inputType="text"
          />
          <Input
            id="name"
            name="name"
            value={initialData?.name}
            placeholder="Ad"
            inputType="text"
            ariaDescribedby="name-error"
            error={state?.errors?.name}
          />
          <Input
            id="surname"
            name="surname"
            value={initialData?.surname}
            placeholder="Soyad"
            inputType="text"
            ariaDescribedby="surname-error"
            error={state?.errors?.surname}
          />
          <Input
            id="address"
            name="address"
            value={initialData?.address}
            placeholder="Adres"
            inputType="text"
            ariaDescribedby="adress-error"
            error={state?.errors?.address}
          />
        </fieldset>
      </div>
      <Button text="Devam Et" type="submit" disabled={totalCount === 0} />
    </form>
  );
}
