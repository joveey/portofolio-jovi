// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Muhammad Jovi Syawal Difa",
  description: "Portofolio pribadi Muhammad Jovi Syawal Difa menggunakan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        <main className="pt-20 px-4 md:px-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}