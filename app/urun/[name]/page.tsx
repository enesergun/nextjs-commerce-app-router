import ProductDetail from "@/app/ui/productDetail";
export default function Page({ params }: { params: { name: string } }) {
  return <ProductDetail name={params.name} />;
}
