import React, { Suspense } from 'react';
import SlotsPageClient from './SlotsPageClient';

export const dynamic = 'force-dynamic';
// Static metadata for SEO
export const metadata = {
  title: 'A/B-тесты – NeuroAd',
  description:
    'Управляйте вашими A/B-тестами рекламных креативов. Создавайте, редактируйте и отслеживайте результаты тестирования.',
};

export default function SlotsPage() {
  return (
    <Suspense>
      <SlotsPageClient />
    </Suspense>
  );
}
