export const dynamic = 'force-dynamic';
import React, { Suspense } from 'react';
import AnalyticsPageClient from './AnalyticsPageClient';

export default function AnalyticsPage() {
  return (
    <Suspense>
      <AnalyticsPageClient />
    </Suspense>
  );
}
