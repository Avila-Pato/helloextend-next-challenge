import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesStore {
  favorites: string[];
  addFavorite: (image: string) => void;
  removeFavorite: (image: string) => void;
}

export const useFavoritesStore = create(
  persist<FavoritesStore>(
    (set) => ({
      favorites: [],
      addFavorite: (image) =>
        set((state) => ({ favorites: [...state.favorites, image] })),
      removeFavorite: (image) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== image),
        })),
    }),
    {
      name: "favorites-storage", // Nombre de la clave en localStorage
    }
  )
);
