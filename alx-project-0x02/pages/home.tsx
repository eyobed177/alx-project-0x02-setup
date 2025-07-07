import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Home Page</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="First Card" content="This is the content of the first card." />
          <Card title="Second Card" content="Another card with different content." />
          <Card title="Third Card" content="Cards are reusable and styled with Tailwind CSS." />
        </div>
      </main>
    </>
  );
}
