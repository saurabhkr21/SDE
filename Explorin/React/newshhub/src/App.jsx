import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import NewsCard from './components/NewsCards';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const country = 'in';

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Error fetching news:", err.message);
        setArticles([]);
      }
      finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [category]);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='flex flex-col w-full h-screen'>
      <Header
        categoryFilter={category}
        onCategoryChange={setCategory}
        searchTerm={search}
        onSearch={setSearch}
      />

      <main
        className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2">
        {loading ? (
          <p className="text-gray-500 text-lg col-span-full text-center">Loading news...</p>
        ) : filteredArticles.length > 0 ? (
          filteredArticles.map((article, idx) => (
            <NewsCard key={idx} article={article} />
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-full text-center">No news articles found.</p>
        )}
      </main>
    </div>
  );
}
