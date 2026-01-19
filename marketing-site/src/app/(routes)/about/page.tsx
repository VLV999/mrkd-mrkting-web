// pages/index.tsx
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="w-full h-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-blue-500 text-white p-8 border-4 border-black">
        <h1 className="text-5xl font-bold mb-6 border-2 border-white p-4">Hero Section</h1>
        <p className="text-xl text-center mb-4 border-2 border-white p-2">
          Centered vertically and horizontally
        </p>
        <div className="bg-white text-black px-4 py-2 rounded border-2 border-black">
          Spacing Box
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-200 text-gray-900 p-8 border-4 border-black">
        <h2 className="text-4xl font-semibold mb-6 border-2 border-gray-500 p-4">About Section</h2>
        <p className="max-w-xl text-center text-lg mb-4 border-2 border-gray-500 p-2">
          Centered content with padding
        </p>
        <div className="bg-gray-400 text-white px-4 py-2 rounded border-2 border-black">
          Centered Box
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-green-500 text-white p-8 border-4 border-black">
        <h2 className="text-4xl font-semibold mb-6 border-2 border-white p-4">Services Section</h2>
        <p className="max-w-xl text-center text-lg mb-4 border-2 border-white p-2">
          Check spacing and height
        </p>
        <div className="bg-white text-black px-4 py-2 rounded border-2 border-black">Box</div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-purple-600 text-white p-8 border-4 border-black">
        <h2 className="text-4xl font-semibold mb-6 border-2 border-white p-4">Contact Section</h2>
        <p className="max-w-xl text-center text-lg mb-4 border-2 border-white p-2">
          Centered correctly
        </p>
        <div className="bg-white text-purple-600 px-4 py-2 rounded border-2 border-black">Box</div>
      </section>
    </main>
  );
};

export default Home;
