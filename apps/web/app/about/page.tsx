import React, { Suspense } from 'react';
import AboutPageClient from './AboutPageClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'О нас – NeuroAd',
  description:
    'Узнайте больше о NeuroAd и нашей миссии по оптимизации рекламных креативов.',
};

export default function AboutPage() {
  return (
    <Suspense>
      <AboutPageClient />
    </Suspense>
  );
}
