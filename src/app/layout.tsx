import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tina Flower portfolio'
}

const figtree = Figtree({
	subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={figtree.className}>
			<body>{children}</body>
    </html>
  )
}
