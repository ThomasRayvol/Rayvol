import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomas Richard | Rayvol - Développeur Fullstack & DevOps",
  description: "Portfolio et CV de Thomas Richard, développeur fullstack spécialisé dans la création de MVP et applications métier robustes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
