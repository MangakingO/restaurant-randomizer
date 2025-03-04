export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-200 text-center">
      <h1 className="text-4xl font-bold text-gray-800">SettleBite</h1>
      <p className="text-lg text-gray-600 mt-2">No more "I don’t know, you pick!" </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
      Stop Debating, Start Eating!
      </button>
    </main>
  );
}
