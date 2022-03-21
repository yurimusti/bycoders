import create from "zustand";
import { persist } from "zustand/middleware";

export const [useHistoric] = create(
  persist(
    (set, get) => ({
      historic: [],
      addToHistoricSearch: (value) =>
        set({ historic: [...get().historic, value] }),
      cleanHistoric: () => set({ historic: [] }),
    }),
    {
      name: "historic",
      getStorage: () => localStorage,
    }
  )
);
