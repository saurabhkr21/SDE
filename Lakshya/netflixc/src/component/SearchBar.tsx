//@ts-nocheck
"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleInputChange = (e) => {
    setTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value); // Live search as user types
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(term);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by title or genre..."
        className="border p-2 rounded"
        value={term}
        onChange={handleInputChange}
      />
      <button
        className="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSearchClick}
        type="button"
      >
        Search
      </button>
    </div>
  );
}
