import Hero from "@/components/Hero";
import ListedTodos from "@/components/ListedChapters";

export default function Home() {
  return (
    <section className="min-h-screen w-screen overflow-x-hidden grid place-items-center text-center">
      <Hero />
      <ListedTodos />
    </section>
  );
}
