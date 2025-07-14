'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { usePathname } from 'next/navigation';
import { initGA, usePageTracking } from '../lib/analytics';

export default function ClientHeader() {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();

  // Инициализация Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  // Отслеживание страниц
  usePageTracking();

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
    pathname?.startsWith('/slots') ||
    pathname?.startsWith('/slot/') ||
    pathname?.startsWith('/analytics');

  return (
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
  );
}
