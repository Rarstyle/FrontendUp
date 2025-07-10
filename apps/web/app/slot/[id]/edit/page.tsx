'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuthGuard } from '@/shared/hooks/useAuthGuard';
import { useLocalSlots } from '@/shared/hooks/useLocalSlots';
import SlotForm from '@/features/slot-management/ui/SlotForm';
import type { SlotFormData } from '@/features/slot-management/ui/SlotForm';

export default function EditSlotPage() {
  useAuthGuard();
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const { slots, updateSlot, deleteSlot } = useLocalSlots();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Don't redirect immediately if slots are still loading
    if (slots.length === 0) {
      return;
    }

    const slot = slots.find((s) => s.id === id);
    if (!slot || slot.demo) {
      // Redirect if slot not found or is a demo (not editable)
      router.replace('/slots');
    } else {
      setIsLoading(false);
    }
  }, [slots, id, router]);

  // Show loading while slots are being loaded
  if (slots.length === 0 || isLoading) {
    return <div className="py-8 px-5">Загрузка...</div>;
  }

  const slot = slots.find((s) => s.id === id);
  if (!slot || slot.demo) {
    return (
      <div className="py-8 px-5">
        Слот не найден или недоступен для редактирования
      </div>
    );
  }

  const handleUpdate = async (data: SlotFormData) => {
    // Prepare updated fields
    let newImage = slot.image;
    if (data.image && data.image.length > 0) {
      const file = data.image[0];
      const reader = new FileReader();
      reader.onload = () => {
        newImage = reader.result as string;
        updateSlot(id, {
          name: data.name,
          platform: data.platform,
          text: data.text,
          variations: data.variations,
          image: newImage || slot.image,
        });
        router.replace(`/slot/${id}`);
      };
      reader.readAsDataURL(file);
    } else {
      // If no new image selected, keep the old image
      updateSlot(id, {
        name: data.name,
        platform: data.platform,
        text: data.text,
        variations: data.variations,
        image: newImage,
      });
      router.replace(`/slot/${id}`);
    }
  };

  const handleDelete = () => {
    const confirm = window.confirm('Удалить слот? Это действие необратимо.');
    if (confirm) {
      deleteSlot(id);
      router.replace('/slots');
    }
  };

  return (
    <div className="max-w-lg mx-auto py-8 px-5">
      <h1 className="text-2xl font-bold text-primary mb-6">
        Редактировать слот
      </h1>
      <SlotForm onSubmit={handleUpdate} initialSlot={slot} />
      <button
        onClick={handleDelete}
        className="mt-6 text-red-600 hover:underline text-sm"
      >
        Удалить слот
      </button>
    </div>
  );
}
