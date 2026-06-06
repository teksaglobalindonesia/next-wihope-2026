import { create } from 'zustand';

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];

  addToCart: (product: CartItem) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  removeCart: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity
                }
              : item
          )
        };
      }

      return {
        cart: [...state.cart, product]
      };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity - 1, 1)
            }
          : item
      )
    })),

  removeCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)
    }))
}));
