// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-full">
      <div className="p-4">
        <h1 className="text-2xl font-bold">金融 AI 搜索</h1>
      </div>
      <nav className="mt-6">
        <Link href="/" className="block py-2 px-4 hover:bg-gray-200">搜索</Link>
        <Link href="/history" className="block py-2 px-4 hover:bg-gray-200">历史记录</Link>
        <Link href="/login" className="block py-2 px-4 hover:bg-gray-200">登录</Link>
        <Link href="/settings" className="block py-2 px-4 hover:bg-gray-200">设置</Link>
      </nav>
    </div>
  );
}