import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

// Local font declarations with proper paths and formats
const scientifica = localFont({
  src: [
    {
      path: '../app/assets/fonts/scientifica.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/scientificaItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../app/assets/fonts/scientificaBold.woff',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-scientifica',
  display: 'swap'
})

const akkuratMono = localFont({
  src: '../app/assets/fonts/Akkurat-Mono.woff',
  variable: '--font-akkurat-mono',
  display: 'swap',
  preload: true
})

const creep = localFont({
  src: '../app/assets/fonts/Creep Regular.woff',
  variable: '--font-creep',
  display: 'swap',
  preload: true
})

const garmin = localFont({
  src: [
    {
      path: '../app/assets/fonts/Garmin 10-5.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/Garmin 7-4.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/Garmin 5-3.woff2',
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
