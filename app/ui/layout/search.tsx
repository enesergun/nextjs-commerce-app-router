"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { createURL } from "@/app/utils/createUrl";
export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createURL("/arama", newParams));
  };
  return (
    <form className="w-max-[550px] relative w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Ürün Ara..."
        autoComplete="off"
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}
