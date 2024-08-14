"use client";

import { preload } from "react-dom";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import ListedTodos from "@/components/ListedChapters";

export function PreloadResources() {
  preload("/fonts/Minecraft.otf", {
    as: "font",
    type: "font/opentype",
    crossOrigin: "",
  });
  preload("/fonts/Minecraft-Bold.otf", {
    as: "font",
    type: "font/opentype",
    crossOrigin: "",
  });
  return "...";
}

export default function Home() {
  return (
    <section className="min-h-screen w-screen overflow-x-hidden grid place-items-center text-center">
      <Hero />
      <Divider />
      <ListedTodos />
    </section>
  );
}
