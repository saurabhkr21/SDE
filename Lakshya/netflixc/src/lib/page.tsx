// lib/api.ts
const API_KEY = "aa89e244"; // Replace with your OMDb key
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(term: string, page: number = 1) {
    const res = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${term}&page=${page}`
    );
    const data = await res.json();
    return data;
}

export async function getMovieDetails(imdbID: string) {
    const res = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
    );
    const data = await res.json();
    return data;
}
