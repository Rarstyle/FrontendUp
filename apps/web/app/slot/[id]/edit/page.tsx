import EditSlotPageClient from './EditSlotPageClient';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Редактировать слот ${params.id} – AdBrain Lab`,
    description: `Редактирование A/B-теста для слота ${params.id}.`,
  };
}

export default function Page() {
  return <EditSlotPageClient />;
}
