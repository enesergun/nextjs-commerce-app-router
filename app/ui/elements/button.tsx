import React from "react";
import clsx from "clsx";
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit";
  disabled?: boolean | undefined;
}
export default function Button({
  text,
  onClick,
  type,
  disabled,
}: Readonly<ButtonProps>) {
  return (
    <button
      className={clsx(
        "w-full mt-4 bg-cyan-800 text-white p-3 rounded-2xl",
        disabled && "disabled:opacity-40",
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label="Button"
    >
      {text}
    </button>
  );
}
