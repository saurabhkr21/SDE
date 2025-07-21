//@ts-nocheck
"use client";
import { useState } from "react";
import SearchBar from "@/component/SearchBar";
import MovieFetcher from "@/component/Moviefetcher";
import MovieComponent from "@/component/MovieCard";
import { getMovieDetails } from "@/lib/page";


export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fullMovies, setFullMovies] = useState([]);

  async function handleResults(results) {
    const detailed = await Promise.all(
      results.map((movie) => getMovieDetails(movie.imdbID))
    );
    setFullMovies(detailed);
  }

  return (
    <main className="p-6">
      <SearchBar onSearch={setSearchTerm} />
      <MovieFetcher searchTerm={searchTerm} onResults={handleResults} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fullMovies.map((movie) => (
          <MovieComponent key={movie.imdbID} item={movie} />
        ))}
      </div>
    </main>
  );
}
