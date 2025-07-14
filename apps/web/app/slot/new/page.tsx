export const dynamic = 'force-dynamic';
import React, { Suspense } from 'react';
import SlotForm from '../../../components/SlotForm';

export default function NewSlotPage() {
  return (
    <Suspense>
      <SlotForm />
    </Suspense>
  );
}
