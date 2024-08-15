import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const siteDescription = `Welcome to Chapters As Tasks! This innovative web application uses the power of OpenAI's GPT technology to help students break down their lessons or chapters into manageable tasks. By transforming complex subjects into achievable to-dos, students can effectively plan their studies and enhance their learning experience. Say goodbye to overwhelming study sessions and hello to organized, productive learning!`;
const siteTitle = "Task-ify Your Chapter!!!....";

export const metadata: Metadata = {
  metadataBase: new URL("https://chapters_as_tasks.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  icons: "/emojigg/neon.gif",
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/ArnavK-09/chapters_as_tasks",
    creator: "arnavkaushal09@gmail.com",
    images: "/emojigg/neon.gif",
  },
  openGraph: {
    type: "website",
    url: "https://github.com/ArnavK-09/chapters_as_tasks",
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
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
