//@ts-nocheck
"use server";

import MovieComponent from "@/component/MovieCard";

export default async function page() {
  // Use cookies if needed
  // const userCookies = cookies();
  // const apiKey = userCookies.get("apiKey")?.value || "aa89e244";
  const key = "aa89e244"; // Replace with your actual API key

  // Correct OMDB API parameter is 'apikey', not 'api'
  const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=Mahabharat&page=1`);
  const data = await res.json();
  const results = data.Search || []; // OMDB returns 'Search' array

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {results.map((item, idx) => (
        <MovieComponent key={item.imdbID || idx} item={item} />
      ))}
    </div>
  );
}
