import { create } from "zustand";
import { ShoppingCartState } from "@/app/lib/definitions";
import { persist, createJSONStorage } from "zustand/middleware";

const useShoppingCart = create<ShoppingCartState>()(
  persist(
    (set) => ({
      cart: [],
      totalCount: 0,
      totalPrice: 0,
      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p.id === product.id);

          if (existingProduct) {
            // If the product already exists in the cart, increase the count
            const updatedCart = state.cart.map((p) =>
              p.id === product.id ? { ...p, count: p.count + 1 } : p,
            );
            const updatedTotalCount = state.totalCount + 1;
            const updatedTotalPrice =
              state.totalPrice + parseFloat(product.price);
            return {
              cart: updatedCart,
              totalCount: updatedTotalCount,
              totalPrice: parseFloat(updatedTotalPrice.toFixed(2)), // Round to 2 decimals
            };
          }

          // If the product is not in the cart, add it with count set to 1
          const updatedTotalCount = state.totalCount + 1;
          const updatedTotalPrice =
            state.totalPrice + parseFloat(product.price);
          return {
            cart: [...state.cart, { ...product, count: 1 }],
            totalCount: updatedTotalCount,
            totalPrice: parseFloat(updatedTotalPrice.toFixed(2)), // Round to 2 decimals
          };
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const updatedCart = state.cart
            .map((product) =>
              product.id === productId
                ? { ...product, count: Math.max(0, product.count - 1) } // Min count: 0
                : product,
            )
            .filter((product) => product.count > 0); // Remove products with count 0

          const removedProduct = state.cart.find((p) => p.id === productId);
          const updatedTotalCount = state.totalCount - (removedProduct ? 1 : 0);
          const updatedTotalPrice =
            state.totalPrice -
            (removedProduct ? parseFloat(removedProduct.price) : 0);

          return {
            cart: updatedCart,
            totalCount: Math.max(0, updatedTotalCount), // Min totalCount: 0
            totalPrice: parseFloat(updatedTotalPrice.toFixed(2)), // Round to 2 decimals
          };
        }),
      clearCart: () => set({ cart: [], totalCount: 0, totalPrice: 0 }),
    }),
    {
      name: "cart", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useShoppingCart;
