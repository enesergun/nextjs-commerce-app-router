import React from "react";
import clsx from "clsx";
interface InputProps {
  id: string;
  name: string;
  value?: string;
  placeholder: string;
  inputType: "text" | "tel" | "email";
  ariaDescribedby?: string;
  error?: string;
}

export default function Input({
  id,
  name,
  value,
  placeholder,
  inputType,
  ariaDescribedby,
  error,
}: Readonly<InputProps>) {
  return (
    <div
      className={clsx("relative w-full min-w-[200px] h-10", error && "mb-3")}
    >
      <input
        id={id}
        name={name}
        className={clsx(
          "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  border-t-0 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-cyan-950",
          error && "border-red-500",
        )}
        placeholder=" "
        defaultValue={value}
        type={inputType}
        aria-describedby={ariaDescribedby}
      />
      <label
        className={clsx(
          "flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-cyan-950 before:border-blue-gray-200 peer-focus:before:!border-cyan-950 after:border-blue-gray-200 peer-focus:after:!border-cyan-950",
          error && "text-red-500",
        )}
      >
        {placeholder}
      </label>
      <span className="text-red-500 text-xs italic mb-2">{error}</span>
    </div>
  );
}
/*  */
