import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Task-ify Your Chapter!!!....",
  description: "Todo-ify Your Task!!!....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden word-break">
        <header className="w-screen flex justify-center align-center">
          <Navbar />
        </header>

        <main className="my-24">{children}</main>
      </body>
    </html>
  );
}
