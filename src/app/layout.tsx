import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css'

export const metadata: Metadata = {
  title: 'Tina Flower portfolio'
}

export const josefin = Josefin_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-josefin',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  )
}
