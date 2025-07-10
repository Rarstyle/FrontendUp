import React from 'react';
import HomePageClient from './HomePageClient';

// Static metadata for SEO
export const metadata = {
  title: 'AdBrain Lab – Повышаем CTR рекламы на 20% за 5 минут',
  description:
    'Инструмент для малого бизнеса: генерация креативов и автоматическое A/B-тестирование в VK и Яндекс с объяснимым AI.',
};

export default function HomePage() {
  return <HomePageClient />;
}
