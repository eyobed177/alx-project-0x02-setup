import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-indigo-600">ALX Project</h1>
        <ul className="flex space-x-4 text-gray-700 font-medium">
          <li><Link href="/">Main</Link></li>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
