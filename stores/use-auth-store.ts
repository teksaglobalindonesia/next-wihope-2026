import { create } from 'zustand';

type AuthStore = {
  name: string;
  telp: string;
  email: string;
  username: string;
  password: string;

  setName: (name: string) => void;
  setTelp: (telp: string) => void;
  setEmail: (email: string) => void;
  setUser: (user: string) => void;
  setPass: (pass: string) => void;

  clearData: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  name: '',
  telp: '',
  email: '',
  username: '',
  password: '',

  setName: (name: string) => set({ name }),
  setTelp: (telp: string) => set({ telp }),
  setEmail: (email: string) => set({ email }),
  setUser: (username: string) => set({ username }),
  setPass: (password: string) => set({ password }),

  clearData: () =>
    set({ name: '', telp: '', email: '', username: '', password: ''})
}));
