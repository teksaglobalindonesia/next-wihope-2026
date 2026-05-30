import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  name: '',

  setName: (name: string) => set({ name }),

  clearName: () => set({ name: '' }),
}))
