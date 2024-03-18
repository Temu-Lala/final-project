import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uni Connect Ethiopia ",
  description: "Uni Connect Ethiopia is a pioneering social media platform designed to foster connections among governmental and non-governmental universities across Ethiopia. Our platform serves as a centralized hub where faculty, students, and staff from various universities can interact, collaborate, and share knowledge effortlessly. Whether it's exchanging research findings, organizing collaborative projects, or simply engaging in academic discussions, Uni Connect Ethiopia provides the digital infrastructure to facilitate seamless communication and networking within the academic community. By breaking down barriers and bridging gaps between institutions, we aim to promote synergy, innovation, and collective growth in the Ethiopian higher education landscape. Join Uni Connect Ethiopia today and be a part of a vibrant community dedicated to advancing education and research across the nation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
