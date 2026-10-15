import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Catastrophe & Coffee',
  description: 'Coffee. Cats. Chaos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}