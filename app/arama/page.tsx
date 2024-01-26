import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arama Sonuçları",
  description: "Arama Sonuçlarını burada bulabilirsiniz.",
};
export default function Page({ params }: { params: { slug: string } }) {
  return <>search</>;
}
