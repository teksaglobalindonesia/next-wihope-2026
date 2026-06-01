import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthStore = {
  name: string;
  setName: (name: string) => void;
  clearName: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      name: '',
      setName: (name) => set({ name }),
      clearName: () => set({ name: '' })
    }),
    {
      name: 'auth-storage'
    }
  )
);
