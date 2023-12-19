import type { Metadata } from 'next';
import { Josefin_Sans, Advent_Pro, Albert_Sans, Quicksand } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tina Flower portfolio'
}

const quicksand = Quicksand({
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
    </html>
  )
}
