import EditSlotPageClient from './EditSlotPageClient';

export default async function Page({ params }: { params: { id: string } }) {
  return <EditSlotPageClient id={params.id} />;
}
