import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chapters_as_tasks.vercel.app"),
  title: "Task-ify Your Chapter!!!....",
  description: "Task-ify Your Chapter!!!....",
  icons: "/emojigg/neon.gif",
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/ArnavK-09",
    creator: "arnavkaushal09@gmail.com",
    images: "/emojigg/neon.gif",
  },
  openGraph: {
    type: "website",
    url: "https://github.com/ArnavK-09",
    title: "Task-ify Your Chapter!!!....",
    description: "Task-ify Your Chapter!!!....",
    siteName: "Task-ify Your Chapters",
    images: [
      {
        url: "/emojigg/neon.gif",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/assets/Pacifico-Bold.woff2"
          as="font"
          type="font/woff2"
        />
      </Head>
      <body className="min-h-screen overflow-x-hidden word-break">
        <header className="w-screen flex justify-center align-center">
          <Navbar />
        </header>

        <main className="my-24">{children}</main>
      </body>
    </html>
  );
}
