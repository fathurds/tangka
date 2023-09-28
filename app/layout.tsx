import { Providers } from "@/lib/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tangka | Permainan Tebak Angka",
  description: "Tangka adalah permainan tebak angka dari angka 1-40.",
  keywords: "game, permainan, main, tebak, angka, rahasia, sembunyi, clue, petunjuk, wordle, bahasa, indonesia, karya, anak, bangsa, kbbi",
  icons: './favicon.ico'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <main className="max-w-[425px] mx-auto flex flex-col min-h-screen">
            <header className="flex flex-col items-center">
              <Image
                src="/assets/tangka-logo.svg"
                alt="Tangka"
                className="my-5 cursor-pointer"
                width={180}
                height={60}
              />

              <hr className="w-full mb-3" />
            </header>
            {children}
          </main>
        </body>
      </html>
    </Providers>
  );
}
