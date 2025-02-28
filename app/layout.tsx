import type { Metadata } from "next";
import "./globals.css";

export const fontLoader = (
  <>
    <link rel="preload" as="font" href="/fonts/Garmin10.woff2" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" as="font" href="/fonts/Garmin7.woff2" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" as="font" href="/fonts/Garmin5.woff2" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" as="font" href="/fonts/AkkuratMono.woff2" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" as="font" href="/fonts/creep.woff2" type="font/woff2" crossOrigin="anonymous" />
  </>
);

export const metadata: Metadata = {
  title: "C:/Users/awhmaisy",
  description: "@awhmaisy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
