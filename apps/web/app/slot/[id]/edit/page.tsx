import React from 'react';
import EditSlotPageClient from './EditSlotPageClient';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Редактировать слот ${params.id} – NeuroAd`,
    description: `Редактирование A/B-теста для слота ${params.id}.`,
  };
}

const Page: React.FC<{ params: { id: string } }> = ({ params }) => {
  return <EditSlotPageClient />;
};

export default Page;
