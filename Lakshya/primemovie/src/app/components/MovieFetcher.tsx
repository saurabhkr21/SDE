//@ts-nocheck
"use client";
import { useContext, useEffect, useState } from "react";
import MovieSection from "./MovieCard";
import Card from "./Card";
import { PageContext } from "@/Context";

function MovieFetcher({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page,setPage]=useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWI2NDJjNDJjMjYzNDc1MDU5MmQwMjMzN2Q3Y2VmMiIsIm5iZiI6MTc1MjU2ODIzOC4yMjQsInN1YiI6IjY4NzYxMWFlYWM3NWY5MjdkYjYzNzJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u33Yaiz5F-twAz4PYG1GSL18gT74Uz2DDnkM7dWEoBA",
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
          options
        );

        const result = await response.json();
        setMovies(result.results || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieFetcher;
