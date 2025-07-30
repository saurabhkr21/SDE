//@ts-nocheck
"use client";
import MovieDetail from "@/app/components/MovieDetail";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  async function fetchMovie() {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWI2NDJjNDJjMjYzNDc1MDU5MmQwMjMzN2Q3Y2VmMiIsIm5iZiI6MTc1MjU2ODIzOC4yMjQsInN1YiI6IjY4NzYxMWFlYWM3NWY5MjdkYjYzNzJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u33Yaiz5F-twAz4PYG1GSL18gT74Uz2DDnkM7dWEoBA",
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
        options
      );
      const result = await response.json();
      setMovie(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (params?.id) {
      fetchMovie();
    }
    // eslint-disable-next-line
  }, [params?.id]);

  return (
    <div>
      {movie && <MovieDetail id={params.id} item={movie} />}
    </div>
  );
}