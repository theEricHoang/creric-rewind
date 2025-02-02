import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-l from-rose-300 to-pink-400">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl font-bold mb-6">
          welcome to creric rewind!
        </h1>

        <Link
          className="p-2 border-white/40 border-2 shadow-md rounded-md text-3xl hover:bg-white/30"
          href="/leggo"
        >
          leggo →
        </Link>
      </div>
    </div>
  );
}
