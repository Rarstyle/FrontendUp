import SlotDetailPageClient from './SlotDetailPageClient';

export default async function Page({ params }: { params: { id: string } }) {
  return <SlotDetailPageClient id={params.id} />;
}
