// app/page.tsx
'use client'
import { useState } from 'react';
import Layout from '../components/Layout';
import NewsCard from '../components/NewsCard';
import SearchResults from '../components/SearchResults';

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    // 这里应该调用后端 API 进行搜索
    const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    setSearchResults(data);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="输入搜索内容"
            className="w-full p-4 border rounded-lg shadow-sm"
          />
          <button
            onClick={handleSearch}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            搜索
          </button>
        </div>

        {searchResults ? (
          <SearchResults results={searchResults} />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <NewsCard title="金融新闻 1" content="..." />
            <NewsCard title="金融新闻 2" content="..." />
            <NewsCard title="金融新闻 3" content="..." />
            <NewsCard title="金融新闻 4" content="..." />
          </div>
        )}
      </div>
    </Layout>
  );
}