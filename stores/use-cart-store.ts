import { create } from 'zustand'

export const useCartStore = create((set) => ({
  carts: [],

  setCarts: (carts: any[]) =>
    set({
      carts,
    }),

  clearCarts: () =>
    set({
      carts: [],
    }),
}))