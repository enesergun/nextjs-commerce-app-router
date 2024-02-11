import ProductDetail from "@/app/ui/productDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürün Detay",
  description:
    "Aradığın ürünün detaylarına ulaşabilir, sepete ekleyebilir ve hemen sipariş verebilirsin!",
};
export default function Page({ params }: { params: { name: string } }) {
  return <ProductDetail name={params.name} />;
}
