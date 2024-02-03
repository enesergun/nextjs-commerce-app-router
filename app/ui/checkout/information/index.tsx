"use client";
import React from "react";
import { useFormState } from "react-dom";
import BasketForm from "./basket-form";
import { State, basketInformationFnc } from "@/app/lib/actions";
export default function Information() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(basketInformationFnc, initialState);

  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto">
      <BasketForm handleSubmit={dispatch} state={state} />
    </div>
  );
}
