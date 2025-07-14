import React, { Suspense } from 'react';
import HomePageClient from './HomePageClient';

// Static metadata for SEO
export const metadata = {
  title: 'NeuroAd – Повышаем CTR рекламы на 20% за 5 минут',
  description:
    'Инструмент для малого бизнеса: генерация креативов и автоматическое A/B-тестирование в VK и Яндекс с объяснимым AI.',
};

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <Suspense>
      <HomePageClient />
    </Suspense>
  );
}
