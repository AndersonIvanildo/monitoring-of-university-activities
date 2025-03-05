import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "../../public/favicon.svg"

import { ActivityProvider } from '@/app/context/ActivityContext';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Click na UFC",
  description: "Descubra o que está rolando na UFC Sobral",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      {/* 
          O valor de inter.variable é uma string com o nome da classe que define a variável CSS.
          Ao aplicar essa classe no <body>, a variável --font-inter passa a estar disponível para ser usada
          em seus módulos CSS.
      */}
      <body className={inter.variable}><ActivityProvider>{children}</ActivityProvider></body>
    </html>
  );
}
