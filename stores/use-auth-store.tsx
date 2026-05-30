import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  name: string;
  email: string;
}

type AuthStore = {
  user: User;
  setUser: (fields: Partial<User>) => void;
  clearState: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: {
        name: '',
        email: '',
      },

      setUser: (fields) => set((state) => ({ user: { ...state.user, ...fields } })),
      clearState: () => set({ user: { name: '', email: '' }})
    }),
    {
      name: 'auth-storage'
    }
  )
);
