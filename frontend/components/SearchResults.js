// components/SearchResults.js
import { useState } from 'react';

export default function SearchResults({ results }) {
  const [showAllSources, setShowAllSources] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">搜索结果</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">信息来源</h3>
        {results.serper_results.slice(0, 4).map((result, index) => (
          <div key={index} className="mb-2">
            <a href={result.link} className="text-blue-500 hover:underline">{result.title}</a>
            <p className="text-sm text-gray-600">{result.snippet}</p>
          </div>
        ))}
        {!showAllSources && results.serper_results.length > 4 && (
          <button
            onClick={() => setShowAllSources(true)}
            className="mt-2 text-blue-500 hover:underline"
          >
            查看更多
          </button>
        )}
      </div>

      {showAllSources && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">所有信息来源</h3>
          {results.serper_results.slice(4).map((result, index) => (
            <div key={index} className="mb-2">
              <a href={result.link} className="text-blue-500 hover:underline">{result.title}</a>
              <p className="text-sm text-gray-600">{result.snippet}</p>
            </div>
          ))}
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold mb-2">AI 生成的答案</h3>
        <p className="text-gray-800">{results.generated_answer}</p>
      </div>
    </div>
  );
}