//@ts-nocheck
'use client'
import { useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import results from "../constraints/data";

const MovieSection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Sample movie data - replace with your actual content
 

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 320; // Width of one card plus gap
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className=" text-white py-4 px-3">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Bollywood binge</h2>
        <button className="flex items-center text-gray-300 hover:text-white transition-colors">
          <span className="mr-1">See more</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Movies Container */}
      <div className="relative group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full z-10 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full z-10 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitScrollbar: { display: "none" },
          }}
        >
          {results.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-72 group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Movie Card */}
              <div className="relative rounded-lg overflow-hidden bg-gray-900">
                {/* Movie Image */}
                {/* <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${slide.backdrop_path})` }}
            > */}
                <div className="aspect-video relative">
                  <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                  {/* Prime Badge */}
                  {movie.isPrime && (
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        prime
                      </div>
                    </div>
                  )}

                  {/* Title and Language Overlay */}
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                      {movie.title}
                    </h3>
                    <p className="text-gray-300 text-xs">{movie.language}</p>
                  </div>

                  {/* Play Button Overlay (appears on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
