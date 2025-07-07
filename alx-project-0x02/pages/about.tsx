import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-green-700">About Page</h1>
        <p className="mt-2 text-gray-600">This project is built using Next.js, TypeScript, and Tailwind CSS.</p>
      </main>
    </>
  );
}
