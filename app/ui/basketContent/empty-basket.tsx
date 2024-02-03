import { ShoppingCartIcon } from "@heroicons/react/24/outline";
export function EmptyBasket() {
  return (
    <div className="mt-4 flex flex-col gap-3 items-center justify-center">
      <ShoppingCartIcon className="h-14 w-14" />
      <p>Sepet Boş</p>
    </div>
  );
}
