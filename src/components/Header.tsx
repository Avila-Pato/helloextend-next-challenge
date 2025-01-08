"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Header() {
  const [term, setTerm] = useState<string>("");
  const [breeds, setBreeds] = useState<string[]>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<string[]>([]);

  // Función para obtener razas de perros desde la API
  const fetchBreeds = async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      const breedList = Object.keys(response.data.message);
      setBreeds(breedList);
      setFilteredBreeds(breedList); // Inicializa la lista filtrada con todas las razas
    } catch (error) {
      console.error("Error fetching breeds", error);
    }
  };

  // Filtra las razas de perros cuando el usuario escribe algo
  useEffect(() => {
    fetchBreeds();
  }, []);

  useEffect(() => {
    if (term) {
      setFilteredBreeds(
        breeds.filter((breed) => breed.toLowerCase().includes(term.toLowerCase()))
      );
    } else {
      setFilteredBreeds(breeds); // Muestra todas las razas si no hay término de búsqueda
    }
  }, [term, breeds]);

  return (
    <header>
      <div>
        {/* Aquí está el campo de búsqueda por separado */}
        <input
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a breed"
          className="mb-4 p-2 border rounded"
        />
      </div>

      {/* Logo y enlaces principales */}
      <Link href="/">
        <h1 className="font-bold text-3xl">Dogs breeds</h1>
      </Link>


      {/* Mostrar las razas filtradas si hay algún término en el input */}
      {filteredBreeds.length > 0 && (
        <nav className="mt-4">
          <ul className="grid grid-cols-5 gap-2">
            {filteredBreeds.map((breed) => (
              <li key={breed}>
                <Link href={`/${breed}`}>{breed}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
