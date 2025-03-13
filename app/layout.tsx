import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

// Local font declarations with proper paths and formats
const scientifica = localFont({
  src: [
    {
      path: '../public/fonts/scientifica.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/scientificaItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/scientificaBold.woff',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-scientifica',
  display: 'swap'
})

const akkuratMono = localFont({
  src: '../public/fonts/Akkurat-Mono.woff',
  variable: '--font-akkurat-mono',
  display: 'swap',
  preload: true
})

const creep = localFont({
  src: '../public/fonts/Creep Regular.woff',
  variable: '--font-creep',
  display: 'swap'
})

const garmin = localFont({
  src: [
    {
      path: '../public/fonts/Garmin 10-5.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Garmin 7-4.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Garmin 5-3.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-garmin',
  display: 'swap',
  preload: true
})

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
    <html lang="en" className={`${scientifica.variable} ${akkuratMono.variable} ${creep.variable} ${garmin.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
