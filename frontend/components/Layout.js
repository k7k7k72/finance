// components/Layout.js
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}