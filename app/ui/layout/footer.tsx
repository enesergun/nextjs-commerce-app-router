import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-white rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logoipsum.svg"
              width={180}
              height={100}
              alt="logo footer"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a
                href="https://github.com/enesergun"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/enesergun/"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/eneserrgun"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Enes Ergün
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
