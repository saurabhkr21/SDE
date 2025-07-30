//@ts-nocheck

// export default function Card({ item }) {
//    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
//    return (
//      <div key={item.id} className="border-amber-100 border-2">
//        <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt="" />
//        <p>{item.original_title}</p>
//      </div>
//    );
//  }

// components/MovieCard.js

import { useState } from "react";
import DetailBtn from "./DetailBtn";

export default function Card({ movie }) {
  const [showDetail, setShowDetail] = useState(false);
  const [liked, setLiked] = useState(false);
  const [open,setOpen]=useState(false);

  const handleToggleDetail = () => setShowDetail((prev) => !prev);
  const handleLike = (e) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
  };

  if(movie.adult == true){
    setOpen(true)
  }

  return (
    <div
      onClick={handleToggleDetail}
      className="max-w-xs bg-slate-400 rounded-lg shadow hover:shadow-lg transition cursor-pointer p-4 relative"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-fit rounded-md"
      />
      
      <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
        {movie.title}
      </h3>
      
      {
        open ? <p>A+</p> : ""
      }
      <p className="mt-4 mb-2 text-gray-800 hover:text-violet-800 line-clamp-2 text-xs transition">
        {movie.overview}
      </p>
      <div className="flex items-center gap-4 justify-between">
        <span className="text-yellow-500 text-xl">⭐</span>
        <span className="text-gray-700 font-medium">{movie.vote_average}</span>
        <DetailBtn item={movie}/>
        <button
          aria-label="Like"
          onClick={handleLike}
          className={`ml-auto text-2xl transition ${
            liked ? "text-pink-500" : "text-gray-900 hover:text-pink-300"
          }`}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
      
      {/* {showDetail && (
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-3">
          <div className="text-sm text-gray-600 mb-2">
            <strong>Release Date:</strong> {movie.release_date}
          </div>
          <p className="text-gray-700">{movie.overview}</p>
        </div>
      )} */}
    </div>
  );
}
