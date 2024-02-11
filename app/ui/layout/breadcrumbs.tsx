"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
type BreadcrumbElement = { id: number; name: string; link: string };
interface BreadcrumbsProps {
  data: BreadcrumbElement[];
}
function Breadcrumbs({ data }: Readonly<BreadcrumbsProps>) {
  const pathname = usePathname();
  const current = data.find(
    (element) => element.link === pathname,
  ) as BreadcrumbElement;
  const matchedPathIndex = data.indexOf(current);

  return (
    <div className="p-4 lg:px-6 max-w-screen-xl">
      <ol className="flex gap-1 text-xs font-extrabold	">
        {data.map((element, index) => (
          <li key={element.id}>
            <Link
              href={element.link}
              className={clsx("pointer-events-none", {
                "pointer-events-auto": index <= matchedPathIndex,
              })}
            >
              <span
                className={clsx("text-gray-600", {
                  underline: pathname === element.link,
                  "text-neutral-800": index <= matchedPathIndex,
                })}
              >
                {element.name}
              </span>
              {index !== data.length - 1 && <span>{" >"}</span>}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Breadcrumbs;
