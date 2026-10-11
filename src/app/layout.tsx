import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

const siteUrl = "https://victormuthomi-omega.vercel.app";

export const metadata: Metadata = {
  title: "Victor Muthomi // Alcodist — Backend Engineer",
  description:
    "Backend systems, architecture, and resilient design. First principles. No noise.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Victor Muthomi // Alcodist — Backend Engineer",
    description:
      "Backend systems, architecture, and resilient design. First principles. No noise.",
    url: siteUrl,
    siteName: "Victor Muthomi // Alcodist",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Muthomi // Alcodist — Backend Engineer",
    description:
      "Backend systems, architecture, and resilient design. First principles. No noise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <Analytics />
      </body>
    </html>
  );
}
