import type { Metadata } from 'next';
import { Josefin_Sans, Advent_Pro, Albert_Sans, Quicksand } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tina Flower portfolio'
}

export const josefin = Josefin_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-josefin',
});

export const advent = Advent_Pro({
	subsets: ['latin'],
  display: 'swap',
});

export const albert = Albert_Sans({
	subsets: ['latin'],
  display: 'swap',
});

export const quicksand = Quicksand({
	subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={quicksand.className}>
			<body>{children}</body>
      {/* <body className={josefin.className}>{children}</body> */}
    </html>
  )
}
