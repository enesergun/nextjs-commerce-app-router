import React from "react";
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit";
}
export default function Button({ text, onClick, type }: Readonly<ButtonProps>) {
  return (
    <button
      className="w-full mt-4 bg-sky-400 text-white p-3 rounded-2xl"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
