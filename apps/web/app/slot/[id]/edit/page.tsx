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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <EditSlotPageClient />;
}
