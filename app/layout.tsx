import type { Metadata } from 'next';
import { Merriweather, Lato } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'BSCCT907 - การเตรียมความพร้อมฝึกประสบการณ์วิชาชีพ',
  description: 'Preparation for Professional Experience in Information Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${merriweather.variable} ${lato.variable}`}>
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}