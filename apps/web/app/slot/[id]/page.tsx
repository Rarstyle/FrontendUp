import SlotDetailPageClient from './SlotDetailPageClient';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Слот ${params.id} – A/B-тест – AdBrain Lab`,
    description: `Детали A/B-теста для слота ${params.id}.`,
  };
}

export default function Page() {
  return <SlotDetailPageClient />;
}
