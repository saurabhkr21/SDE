//@ts-nocheck
// Early return if no item provided
//   if (!item) {
//     return (
//       <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-8 text-center">
//         <p className="text-gray-400">No movie data provided</p>
//       </div>
//     );
//   }import React from 'react';
import { Star, Calendar, Users, Globe } from 'lucide-react';

const MovieDetail = ({ item }) => {

  // Genre mapping (common TMDB genre IDs)
  const genreMap = {
    14: 'Fantasy',
    10751: 'Family',
    28: 'Action'
  };

  const genres = item.genre_ids?.map(id => genreMap[id] || 'Unknown') || [];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return 'text-green-400';
    if (rating >= 6) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      {/* Backdrop Header */}
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/w1280${item.backdrop_path || ''})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <h1 className="text-4xl font-bold text-white mb-2">{item.title || item.original_title || 'Untitled'}</h1>
          <div className="flex items-center space-x-4 text-gray-300">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              {item.adult ? '18+' : 'All Ages'}
            </span>
            <span className="text-sm">{item.original_language?.toUpperCase() || 'N/A'}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Poster */}
        <div className="flex-shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path || ''}`}
            alt={item.title || 'Movie poster'}
            className="w-48 h-72 object-cover rounded-lg shadow-lg mx-auto lg:mx-0"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500x750/374151/9CA3AF?text=No+Image';
            }}
          />
        </div>

        {/* Details */}
        <div className="flex-1 text-white">
          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center space-x-2">
              <Star className={`w-5 h-5 ${getRatingColor(item.vote_average || 0)} fill-current`} />
              <span className={`font-bold ${getRatingColor(item.vote_average || 0)}`}>
                {item.vote_average?.toFixed(1) || 'N/A'}
              </span>
              <span className="text-gray-400 text-sm">({item.vote_count || 0} votes)</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {item.release_date ? formatDate(item.release_date) : 'TBA'}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-gray-300">
              <Users className="w-4 h-4" />
              <span className="text-sm">Popularity: {Math.round(item.popularity || 0)}</span>
            </div>
          </div>

          {/* Genres */}
          {genres.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          {item.overview && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Overview</h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {item.overview}
              </p>
            </div>
          )}

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="font-semibold">Original Title</span>
              </div>
              <p className="text-gray-300">{item.original_title || 'N/A'}</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold">Movie ID</span>
              </div>
              <p className="text-gray-300">#{item.id || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage:
// <MovieCard item={movieData} />
//
// Example movieData structure:
// const movieData = {
//   "adult": false,
//   "backdrop_path": "/etT14XfDEqhQZdD47ywpyihXPyW.jpg",
//   "genre_ids": [14, 10751, 28],
//   "id": 1087192,
//   "original_language": "en",
//   "original_title": "How to Train Your Dragon",
//   "overview": "Movie overview text...",
//   "popularity": 1075.8358,
//   "poster_path": "/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg",
//   "release_date": "2025-06-06",
//   "title": "How to Train Your Dragon",
//   "video": false,
//   "vote_average": 8.153,
//   "vote_count": 1045
// };

export default MovieDetail;