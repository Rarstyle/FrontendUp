'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { usePathname } from 'next/navigation';
import '@/shared/styles/globals.css';

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

    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    pathname?.startsWith('/slots') || pathname?.startsWith('/slot/');

  return (
    <html lang="ru" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        {/* Шапка сайта */}
        <header className="bg-gray-50 text-gray-900">
          <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-5">
            {/* Логотип / бренд */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                {/* <Image src="/logo.png" alt="Logo" width={32} height={32} /> */}
                <span className="font-bold text-lg">NeuroAd</span>
              </Link>
            </div>
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
              {/* Если пользователь залогинен – показываем ссылку в кабинет, иначе – вход/регистрация */}
              {user && (
                <Link href="/slots" className="hover:underline">
                  Кабинет
                </Link>
              )}
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
        <footer className="w-full bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">© 2025 NeuroAd. Все права защищены.</div>
            <div className="flex space-x-4 mt-4 md:mt-0">
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
