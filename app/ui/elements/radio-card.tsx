import React from "react";
import { RadioCardProps } from "@/app/lib/definitions";

export default function RadioCard({
  value,
  header,
  title,
  description,
  checked,
}: RadioCardProps) {
  return (
    <div>
      <input
        className="sr-only peer"
        id={value}
        type="radio"
        name="choice"
        value={value}
        defaultChecked={checked}
      />
      <label
        className="flex flex-col p-4 border-2 rounded-lg  cursor-pointer peer-checked:border-cyan-700"
        htmlFor={value}
      >
        <span className="text-xs font-semibold uppercase"> ₺ {header}</span>
        <span className="text-xl font-bold mt-2">{title}</span>
        <span className="text-sm mt-2">
          <p>{description}</p>
        </span>
      </label>
    </div>
  );
}
/*  */
