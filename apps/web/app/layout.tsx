'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { auth } from '@/lib/firebase';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

// Default SEO metadata for all pages (can be overridden in individual pages)
// export const metadata = {
//   title: 'AdBrain Lab – генерация креативов с AI',
//   description:
//     'AdBrain Lab – платформа для генерации рекламных креативов и автоматических A/B-тестов (VK Ads, Яндекс Директ)',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/slots') || pathname?.startsWith('/slot');
  // Check if user is logged in (for conditional nav – single account logic)
  const user = auth.currentUser;
  return (
    <html lang="ru" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        {/* Header / Navigation */}
        <header className="bg-base-50 text-base-900">
          <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-5">
            {/* Logo / Brand */}
            <Link href="/" className="text-xl font-bold text-primary">
              AdBrain Lab
            </Link>
            {/* Navigation Links */}
            <nav className="flex items-center gap-6">
              <Link href="/about" className="hover:underline">
                О нас
              </Link>
              <Link href="/pricing" className="hover:underline">
                Тарифы
              </Link>
              {/* Show dashboard link if logged in, otherwise login/signup */}
              {user ? (
                <>
                  <Link href="/slots" className="hover:underline">
                    Кабинет
                  </Link>
                  {/* For simplicity, we don't implement full logout here */}
                </>
              ) : (
                <>
                  <Link href="/login" className="hover:underline">
                    Войти
                  </Link>
                  <Link
                    href="/login"
                    className="bg-accent text-white font-medium px-4 py-2 rounded hover:opacity-90"
                  >
                    Начать бесплатно
                  </Link>
                </>
              )}
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-footer text-base-50 py-8 px-5 mt-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">© 2025 AdBrain Lab. Все права защищены.</div>
            <div>
              <Link href="/legal/privacy" className="text-base-50 hover:underline">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
