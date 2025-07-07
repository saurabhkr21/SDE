export default function NewsCard({ article }) {
    const date_time = new Date(article.publishedAt).toLocaleString();
    return (
        <div className="flex flex-col h-[400px] items-center justify-center shadow-md rounded-lg overflow-hidden w-screen sm:w-80">
            {article.source?.name && (
                <span className="absolute bg-amber-200  text-amber-800 text-md px-1  rounded-xl">
                    {article.source.name}
                </span>
            )}
            {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
            )}
            <div className="flex flex-col p-4 ">
                <h2 className="text-md font-bold mb-2 line-clamp-2">{article.title}</h2>
                <p className="text-xs text-gray-500 mb-2">{date_time}</p>
                <p className="text-sm text-gray-600 line-clamp-3">{article.description}</p>
                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-sm mt-2 block"
                >
                    Read more
                </a>
            </div>
        </div>
    );
}
