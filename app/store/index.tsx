import { create } from "zustand";
import { PRODUCT } from "@/app/lib/definitions";
import { persist, createJSONStorage } from "zustand/middleware";

interface ShoppingCartState {
  cart: PRODUCT[];
  addToCart: (product: PRODUCT) => void;
  removeFromCart: (productId: PRODUCT["id"]) => void;
  clearCart: () => void;
}
const useShoppingCart = create<ShoppingCartState>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useShoppingCart;
