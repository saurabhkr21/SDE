// @ts-nocheck
"use client";
import { useContext } from "react";
// import { PageContext } from "../Context";
// import {pageContext} from "../../Context"
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { PageContext } from "@/Context";

function TVshows() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { page, setPage } = useContext(PageContext);

  const fetchTVShows = async (currentPage) => {
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
        `https://api.themoviedb.org/3/search/tv?query=search&include_adult=false&language=en-US&page=${page}`,
        options
      );

      const result = await response.json();
      setMovies(result.results || []);
    } catch (error) {
      console.error("Failed to fetch TV shows:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTVShows(page);
  }, [page]);

  function handleIncrement() {
    setPage((prev) => prev + 1);
  }

  function handleDecrement() {
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex gap-4 text-white justify-center items-center p-5">
        <button onClick={handleDecrement}>
          <img
            width="28"
            height="18"
            src="https://img.icons8.com/ios/FFFFFF/less-than-2.png"
            alt="less-than-2"
          />
        </button>
        <button className="border w-15 h-12">{page}</button>
        <button onClick={handleIncrement}>
          <img
            width="28"
            height="18"
            src="https://img.icons8.com/ios/FFFFFF/more-than-2.png"
            alt="more-than-2"
          />
        </button>
      </div>
    </div>
  );
}

export default TVshows;
