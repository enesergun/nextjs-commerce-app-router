import Image from "next/image";
import Search from "./search";
import Basket from "./basket";
import MobileMenuContainer from "./mobile-menu-container";
import { Suspense } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <nav className="fixed w-full flex items-center justify-between p-4 lg:px-6 bg-white z-20">
      <div className="sm:hidden">
        <Suspense
          fallback={
            <button
              aria-label="Open mobile menu"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700"
            >
              <Bars3Icon className="h-4" />
            </button>
          }
        >
          <MobileMenuContainer />
        </Suspense>
      </div>
      <div>
        <Image alt="logo" src="/logo.png" width={250} height={250} />
      </div>
      <div className="hidden sm:block sm:w-1/2">
        <Search />
      </div>
      <div>
        <Basket />
      </div>
    </nav>
  );
}
