"use client";
import React from "react";
import { useFormState } from "react-dom";
import BasketForm from "./basket-form";
import { basketInformationFnc } from "@/app/lib/actions";
import { InformationProps, State } from "@/app/lib/definitions";

export default function Information({ data }: { data: InformationProps }) {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(basketInformationFnc, initialState);

  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto sm:w-full">
      <BasketForm handleSubmit={dispatch} state={state} initialData={data} />
    </div>
  );
}
