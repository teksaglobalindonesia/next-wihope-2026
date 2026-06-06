import { create } from 'zustand';
import { persist } from 'zustand/middleware'; 

interface AuthState {
    name: string;        
    isLoggedin: boolean;
    login: (name: string) => void;
    logout: () => void;
    setName: (name: string) => void;
    clearName: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            name: '',           
            isLoggedin: false,
            login: (newName) => set({ name: newName, isLoggedin: true }),
            logout: () => set({ name: '', isLoggedin: false }),
            setName: (newName) => set({ name: newName, isLoggedin: true }),
            clearName: () => set({ name: '', isLoggedin: false }),
        }),
        {
            name: 'auth-storage',
        }
    )
);