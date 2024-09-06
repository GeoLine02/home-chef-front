import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const english = Montserrat({
  subsets: ["latin", "cyrillic", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Home Chef",
  description: "Food delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${english.className} w-full`}>
        <Header />
        <main className="w-full min-h-screen max-w-customMax mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
