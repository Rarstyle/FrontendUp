import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import ClientHeader from '../components/ClientHeader';
import React, { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        {/* Шапка сайта */}
        <Suspense>
          <ClientHeader />
        </Suspense>
        {/* Основное содержимое страниц */}
        <main className="flex-1">{children}</main>
        {/* Подвал сайта */}
        <footer className="relative z-0 bg-base-900 text-gray-50 py-8 px-5 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] before:from-white/10 before:to-transparent before:pointer-events-none before:-z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">© 2025 NeuroAd. Все права защищены.</div>
            <div>
              <Link
                href="/legal/privacy"
                className="text-gray-50 hover:underline"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
