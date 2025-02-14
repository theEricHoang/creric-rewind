import LeggoButton from "./components/ui/LeggoButton";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-l from-rose-300 to-pink-400">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl font-bold mb-6">
          welcome to creric rewind!
        </h1>

        <LeggoButton />
      </div>
    </div>
  );
}
