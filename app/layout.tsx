import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

// Local font declarations
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
    }
  ],
  variable: '--font-scientifica'
})

const akkuratMono = localFont({
  src: '../public/fonts/Akkurat-Mono.woff',
  variable: '--font-akkurat-mono'
})

const creep = localFont({
  src: '../public/fonts/Creep Regular.woff',
  variable: '--font-creep'
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
    <html lang="en" className={`${scientifica.variable} ${akkuratMono.variable} ${creep.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
