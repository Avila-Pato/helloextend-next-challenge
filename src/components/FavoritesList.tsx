"use client";

import FavoriteImage from "@/components/FavoriteImage";
import { useFavoritesStore } from "@/stores/favoritesStore";

export default function FavoritesList() {
  const { favorites } = useFavoritesStore();

  return (
    <section>
      <article className="mt-4 font-bold text-3xl">Favoritos</article>
      {favorites.length === 0 ? (
        <p>No hay favoritos</p>
      ) : (
        <div className="mt-4 grid xl:grid-cols-4 sm:grid-cols-2 gap-4">
          {favorites.map((image) => (
            <FavoriteImage key={image} src={image} />
          ))}
        </div>
      )}
    </section>
  );
}
