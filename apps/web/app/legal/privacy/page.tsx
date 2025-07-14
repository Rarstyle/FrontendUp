import React, { Suspense } from 'react';
import PrivacyPageClient from './PrivacyPageClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Политика конфиденциальности – NeuroAd',
  description: 'Политика конфиденциальности NeuroAd.',
};

export default function PrivacyPage() {
  return (
    <Suspense>
      <PrivacyPageClient />
    </Suspense>
  );
}
