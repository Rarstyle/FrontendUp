'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const user = auth.currentUser;
  return (
    <html lang="ru" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        {/* Шапка сайта */}
        <header className="bg-gray-50 text-gray-900">
          <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-5">
            {/* Логотип / бренд */}
            <Link href="/" className="text-xl font-bold text-blue-700">
              AdBrain Lab
            </Link>
            {/* Навигационные ссылки */}
            <nav className="flex items-center gap-6">
              <Link href="/about" className="hover:underline">
                О нас
              </Link>
              <Link href="/pricing" className="hover:underline">
                Тарифы
              </Link>
              {/* Если пользователь залогинен – показываем ссылку в кабинет, иначе – вход/регистрация */}
              {user ? (
                <Link href="/slots" className="hover:underline">
                  Кабинет
                </Link>
              ) : (
                <>
                  <Link href="/login" className="hover:underline">
                    Войти
                  </Link>
                  <Link
                    href="/login"
                    className="bg-[#FF6B00] text-white font-medium px-4 py-2 rounded hover:opacity-90"
                  >
                    Начать бесплатно
                  </Link>
                </>
              )}
            </nav>
          </div>
        </header>

        {/* Основное содержимое страниц */}
        <main className="flex-1">{children}</main>

        {/* Подвал сайта */}
        <footer className="relative z-0 bg-gray-900 text-gray-50 py-8 px-5 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] before:from-white/10 before:to-transparent before:pointer-events-none before:-z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">© 2025 AdBrain Lab. Все права защищены.</div>
            <div>
              <Link href="/legal/privacy" className="text-gray-50 hover:underline">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
