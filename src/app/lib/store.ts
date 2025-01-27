import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface User {
  id: string;
  name: string;
  email: string;
  photo: string | ArrayBuffer | null;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: get()?.user ?? null,
      setUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
