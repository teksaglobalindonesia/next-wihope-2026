import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/type';

type CardItem = {
  id: number;
  product: Product;
  quantity: number;
};

type CartStore = {
  cart: CardItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()((set, get) => ({
  cart: [],

  // Actions
  addToCart: (product, quantity = 1) =>
    set((state) => {
      const itemExist = state.cart.find((item) => item.id === product.id);

      if (itemExist) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }
      return { cart: [...state.cart, { id: product.id, product, quantity }] };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId)
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          cart: state.cart.filter((item) => item.id !== productId)
        };
      }

      return {
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      };
    }),

  getTotalPrice: () =>
    get().cart.reduce(
      (total, item) => total + item.product.price * item.quantity, 0
    ),

  clearCart: () => set({ cart: [] })
}));
