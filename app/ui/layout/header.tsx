import Image from "next/image";
import Search from "./search";
import Basket from "./basket";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <nav className="fixed w-full flex items-center justify-between p-4 lg:px-6 bg-white z-20">
      {/* mobile-icon */}
      <div className="sm:hidden">
        <MobileMenu />
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
