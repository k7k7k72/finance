// components/NewsCard.js
export default function NewsCard({ title, content }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    );
  }