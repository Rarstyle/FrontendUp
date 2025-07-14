import React from 'react';
import SlotDetailPageClient from './SlotDetailPageClient';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Слот ${params.id} – A/B-тест – NeuroAd`,
    description: `Детали A/B-теста для слота ${params.id}.`,
  };
}

const Page: React.FC<{ params: { id: string } }> = ({ params }) => {
  return <SlotDetailPageClient />;
};

export default Page;
