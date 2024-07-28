'use client';

import { useState } from 'react';

interface SearchResult {
  title: string;
  snippet: string;
  url: string;
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter your search query"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Search
        </button>
      </form>
      <div>
        {results.map((result, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">{result.title}</h3>
            <p>{result.snippet}</p>
            <a href={result.url} className="text-blue-500">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}