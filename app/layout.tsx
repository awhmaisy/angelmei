import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

// Primary font: MS Gothic only
const msGothic = localFont({
  src: './assets/fonts/MS Gothic Font.ttf',
  variable: '--font-msgothic',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "C:/Users/awhmaisy",
  description: "@awhmaisy",
};

import { ThemeProvider } from './context/ThemeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${msGothic.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
