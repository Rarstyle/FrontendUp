export const dynamic = 'force-dynamic';
import React, { Suspense } from 'react';
import PricingPageClient from './PricingPageClient';

export default function PricingPage() {
  return (
    <Suspense>
      <PricingPageClient />
    </Suspense>
  );
}
