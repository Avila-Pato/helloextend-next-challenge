import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import FavoritesList from "@/components/FavoritesList";

export const metadata: Metadata = {
  title: "Dog Breeds Gallery",
  description: "Explore beautiful dog breeds and their images",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen ">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Header />
          <article className="rounded-xl shadow-lg p-6">
            {children}
          </article>
          <hr className="my-8 border-black py-24" />
          <FavoritesList />
        </main>
      </body>
    </html>
  );
}