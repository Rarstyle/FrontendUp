import React, { Suspense } from 'react';
import EditSlotPageClient from './EditSlotPageClient';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Suspense>
      <EditSlotPageClient id={id} />
    </Suspense>
  );
}
