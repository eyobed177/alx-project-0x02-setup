import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-blue-700">Home Page</h1>
        <p className="mt-2 text-gray-600">You are on the home page of the project.</p>
      </main>
    </>
  );
}
