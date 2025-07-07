import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the ALX Project Setup</h1>
        <p className="mt-4 text-lg text-gray-700">This is your first Next.js + TypeScript + Tailwind page!</p>
      </main>
    </>
  );
}
