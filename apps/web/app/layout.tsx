'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { usePathname } from 'next/navigation';
import AnalyticsTracker from '../lib/AnalyticsTracker';
import './globals.css';

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
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!auth) {
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    if (!auth) {
      return;
    }

    try {
      await signOut(auth);
      // Пользователь будет автоматически перенаправлен на главную страницу
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  // Проверяем, находится ли пользователь в личном кабинете
  const isInDashboard =
    pathname?.startsWith('/slots') ||
    pathname?.startsWith('/slot/') ||
    pathname?.startsWith('/analytics');

  return (
    <html lang="ru" className={inter.className}>
      <body>
        <Suspense>
          <AnalyticsTracker />
        </Suspense>
        {/* Шапка сайта */}
        <header className="bg-gray-50 text-gray-900">
          <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-5">
            {/* Логотип / бренд */}
            <Link href="/" className="text-xl font-bold text-primary">
              NeuroAd
            </Link>
            {/* Навигационные ссылки */}
            <nav className="flex items-center gap-6">
              <Link href="/" className="hover:underline">
                Главная
              </Link>
              <Link href="/about" className="hover:underline">
                О нас
              </Link>
              <Link href="/pricing" className="hover:underline">
                Тарифы
              </Link>
              {/* Регистрация временно отключена - продукт в разработке */}
              {/* Кнопка выхода появляется только в кабинете */}
              {user && isInDashboard && (
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Выйти
                </button>
              )}
            </nav>
          </div>
        </header>

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
