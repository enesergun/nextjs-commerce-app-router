import React, { FormEvent } from "react";
import Input from "@/app/ui/elements/input";
import Button from "@/app/ui/elements/button";
interface BasketFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function BasketForm({ handleSubmit }: BasketFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-cyan-950 mb-2 sm:mb-0">
          İletişim
        </h1>
        <fieldset className="flex flex-col gap-4">
          <Input
            id="email"
            name="email"
            placeholder="E-mail"
            inputType="email"
          />
          <Input
            id="phone"
            name="phone"
            placeholder="Telefon Numarası"
            inputType="tel"
          />
        </fieldset>
      </div>
      <div className="mt-3">
        <h1 className="text-xl sm:text-2xl font-bold text-cyan-950 mb-2 sm:mb-0">
          Kargo Adresi
        </h1>
        <fieldset className="flex flex-col gap-4">
          <Input
            id="addresType"
            name="addressType"
            placeholder="Adres Tipi"
            inputType="text"
          />
          <Input id="name" name="name" placeholder="Ad" inputType="text" />
          <Input
            id="surname"
            name="surname"
            placeholder="Soyad"
            inputType="text"
          />
          <Input
            id="address"
            name="address"
            placeholder="Adres"
            inputType="text"
          />
        </fieldset>
      </div>
      <Button text="Devam Et" type="submit" />
    </form>
  );
}
