import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Victor Muthomi (Alcodist) — Backend Engineer",
  description: "First principles. No noise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} font-mono bg-carbon text-zinc-300 antialiased selection:bg-zinc-800 selection:text-white min-h-screen py-16 px-6`}
      >
        <main className="max-w-[700px] mx-auto space-y-12">{children}</main>
      </body>
    </html>
  );
}
