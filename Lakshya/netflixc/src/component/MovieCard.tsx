//@ts-nocheck

const MovieComponent = ({ item }) => {
    return (
        <div className="w-70 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
                <img
                    src={item.Poster}
                    alt={item.Title}
                    className="w-full h-96 object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-black rounded-full border-4 border-green-500 flex items-center justify-center">
                    <span className="text-green-500 text-sm font-bold">{item.imdbRating}</span>
                </div>
            </div>

            {/* Movie Info */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-1">{item.Title}</h2>
                <p className="text-gray-500 text-sm">{item.Released || item.Year}</p>
                {/* <button onClick={handleAdd}>Favourite</button> */}
            </div>
        </div>
    );
};

export default MovieComponent;