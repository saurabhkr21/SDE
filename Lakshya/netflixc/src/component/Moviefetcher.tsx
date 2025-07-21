//@ts-nocheck
"use client";
import { searchMovies } from "@/lib/page";
import { useEffect } from "react";
// import { searchMovies } from "@/lib/api";

export default function MovieFetcher({ searchTerm, onResults }) {
    useEffect(() => {
        async function fetch() {
            if (!searchTerm) return;
            const data = await searchMovies(searchTerm);
            if (data.Response === "True") {
                onResults(data.Search);
            } else {
                onResults([]);
            }
        }
        fetch();
    }, [searchTerm, onResults]);

    return null;
}
