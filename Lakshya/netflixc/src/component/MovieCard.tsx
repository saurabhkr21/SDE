//@ts-nocheck

const MovieComponent = ({item,handleAdd}) => {
    return (
        <div className="w-57 bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Movie Poster */}
            <div className="relative">
                <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="Karate Kid: Legends"
                    className="w-full h-96 object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-black rounded-full border-4 border-green-500 flex items-center justify-center">
                    <span className="text-green-500 text-sm font-bold">{item.vote_average}</span>
                </div>
            </div>

            {/* Movie Info */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.release_date}</p>
                <button onClick={handleAdd}>Favourite</button>
            </div>
        </div>
    );
};

export default MovieComponent;