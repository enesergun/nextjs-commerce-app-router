import type { Metadata } from "next";
import SearchResult from "@/app/ui/searchResult";
import { SearchParamsProps } from "@/app/lib/definitions";
export const metadata: Metadata = {
  title: "Arama Sonuçları",
  description: "Arama Sonuçlarını burada bulabilirsiniz.",
};
export default function Page({ searchParams }: Readonly<SearchParamsProps>) {
  return <SearchResult searchParams={searchParams} />;
}
