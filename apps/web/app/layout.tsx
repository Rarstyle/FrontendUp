import { Inter } from 'next/font/google';
import Link from 'next/link';
import '@/shared/styles/globals.css';
import { Analytics } from './Analytics';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata = {
  metadataBase: new URL('https://neuroad.tech'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.className}>
      <head></head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Analytics />
        {/* Шапка сайта */}
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-5">
            {/* Логотип / бренд */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NeuroAd
              </span>
            </Link>

            {/* Навигационные ссылки и CTA */}
            <nav className="flex items-center gap-6">
              <Link
                href="/"
                className="hidden sm:block text-gray-600 font-medium hover:text-blue-600 transition-colors"
              >
                Главная
              </Link>
              <Link
                href="/about"
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
              >
                О нас
              </Link>
              <Link
                href="/pricing"
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-sm"
              >
                Тарифы
              </Link>
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
