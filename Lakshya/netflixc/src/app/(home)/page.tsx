//@ts-nocheck
'use client'
import { useMemo } from "react";
import MovieCard from "@/component/MovieCard";
import { Item } from "@radix-ui/themes/components/checkbox-group.primitive";
import { useSearch } from "./layout";

import results from "@/constraint/data";


// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGYyMjc0NzhhZjkzOGYxODkwOTc5MTkxNTg4MDE3MyIsIm5iZiI6MTc0MjgzMTMwMC4zMjcwMDAxLCJzdWIiOiI2N2UxN2VjNGI4ZTBmZWE5MzQwODJjYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-yXMrDKSX5C740uzhFtMHnG0-pRrNfgxfrxUknUnu8M'
//   }
// };



const url = "https://omdbapi.com/?apikey=aa89e244&s=iron";


export default function Home() {
  const { searchTerm, categoryFilter } = useSearch();

  // const response = await fetch(url, options);
  // const data = await response.json();
  // const movies = data.results;

  // Filter movies based on search term and category
  const filteredMovies = useMemo(() => {
    let filtered = results;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.original_title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category (you can extend this based on your data structure)
    if (categoryFilter !== "all") {
      switch (categoryFilter) {
        case "popular":
          filtered = filtered.filter(movie => movie.popularity > 10);
          break;
        case "top_rated":
          filtered = filtered.filter(movie => movie.vote_average > 7);
          break;
        case "latest":
          filtered = filtered.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
          break;
        case "upcoming":
          const currentDate = new Date();
          filtered = filtered.filter(movie => new Date(movie.release_date) > currentDate);
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [searchTerm, categoryFilter]);

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-start">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((item, index) => (
          <MovieCard
            key={item.id}
            item={item} />
        ))
      ) : (
        <div className="w-full text-center py-12">
          <p className="text-gray-500 text-lg">No movies found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}
