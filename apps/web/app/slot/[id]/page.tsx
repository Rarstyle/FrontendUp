import React, { Suspense } from 'react';
import SlotDetailPageClient from './SlotDetailPageClient';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Suspense>
      <SlotDetailPageClient id={id} />
    </Suspense>
  );
}
