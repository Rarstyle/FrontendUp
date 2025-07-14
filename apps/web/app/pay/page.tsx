export const dynamic = 'force-dynamic';
import React, { Suspense } from 'react';
import PayPageClient from './PayPageClient';

export default function PayPage() {
  return (
    <Suspense>
      <PayPageClient />
    </Suspense>
  );
}
