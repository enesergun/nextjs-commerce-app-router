"use client";
import React, { FormEvent } from "react";

import BasketForm from "./basket-form";

export default function Information() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/sepet/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        test: 1,
      }),
    });
  };
  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto">
      <BasketForm handleSubmit={handleSubmit} />
    </div>
  );
}
