import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-2xl">Zustand library for React</h1>
      <Counter />
    </main>
  );
}
