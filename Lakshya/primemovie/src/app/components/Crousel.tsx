//@ts-nocheck
'use client'
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Info,
  Volume2,
  VolumeX,
} from "lucide-react";
import results from "@/app/constraints/data";
// console.log(results);

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // To fetch the image src address for poster_path, use the TMDB image base URL:
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";


// Result: https://image.tmdb.org/t/p/w500/etT14XfDEqhQZdD47ywpyihXPyW.jpg

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Prime Logo */}
      {/* <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center space-x-2">
          <div className="text-blue-400 text-xl font-bold">prime</div>
          <div className="w-6 h-1 bg-blue-400 rounded"></div>
        </div>
      </div> */}

      {/* Mute/Unmute Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-6 right-6 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Main Carousel Container */}
      <div className="relative w-full h-full">
        {results.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${slide.backdrop_path})` }}
            >
                
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute left-6 bottom-32 max-w-2xl z-10">
              {/* Badge */}
              <div className="text-green-400 text-sm font-semibold mb-2">
                {slide.badge}
              </div>

              {/* Title */}
              <h1 className="text-6xl font-bold text-white mb-4 tracking-wider">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-gray-300 text-lg mb-6">{slide.subtitle}</p>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 mb-6">
                <button className="flex items-center bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch now
                </button>
                <button className="flex items-center bg-gray-600 bg-opacity-80 hover:bg-opacity-100 text-white p-3 rounded-full transition-colors">
                  <Plus className="w-6 h-6" />
                </button>
                <button className="flex items-center bg-gray-600 bg-opacity-80 hover:bg-opacity-100 text-white p-3 rounded-full transition-colors">
                  <Info className="w-6 h-6" />
                </button>
              </div>

              {/* Prime Badge */}
              <div className="flex items-center text-white">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm">Included with Prime</span>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute bottom-32 right-6 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
              {slide.rating}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {results.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-gray-500 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
