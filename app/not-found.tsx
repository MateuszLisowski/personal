import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
      <div className="text-9xl mb-6">🦊</div>
      <h1 className="text-7xl font-black mb-4 text-gray-800">404</h1>
      <p className="text-2xl mb-8 text-gray-700">
        Lis ukradł tę stronę. Nie próbuj go gonić - on biega szybciej niż Twój
        internet.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition"
      >
        Wracam do domu
      </Link>
    </main>
  );
}
