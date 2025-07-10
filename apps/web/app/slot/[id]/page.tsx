'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthGuard } from '@/shared/hooks/useAuthGuard';
import { useLocalSlots, Slot } from '@/shared/hooks/useLocalSlots';

export default function SlotDetailPage() {
  useAuthGuard();
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const { slots } = useLocalSlots();
  const [slot, setSlot] = useState<Slot | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Don't redirect immediately if slots are still loading
    if (slots.length === 0) {
      return;
    }

    const found = slots.find((s: Slot) => s.id === id);
    if (!found) {
      // If slot not found (e.g., deleted or bad URL), redirect to slots
      router.replace('/slots');
    } else {
      setSlot(found);
      setIsLoading(false);
    }
  }, [id, slots, router]);

  // Show loading while slots are being loaded
  if (slots.length === 0 || isLoading) {
    return <div className="py-8 px-5">Загрузка...</div>;
  }

  if (!slot) {
    return <div className="py-8 px-5">Загрузка...</div>;
  }

  const isCompleted = slot.status === 'completed';
  const winner = slot.winnerVariant;

  return (
    <div className="max-w-3xl mx-auto py-8 px-5 text-base-900">
      <a href="/slots" className="text-primary hover:underline mb-4 inline-block">
        ← Все слоты
      </a>
      <h1 className="text-2xl font-bold text-primary mb-4">{slot.name}</h1>
      <div className="mb-6">
        <div>
          <strong>Платформа:</strong> {slot.platform === 'vk' ? 'VK Ads' : 'Яндекс Директ'}
        </div>
        <div>
          <strong>Вариаций:</strong> {slot.variations}
        </div>
        <div>
          <strong>Статус:</strong>{' '}
          {isCompleted ? (
            <span className="bg-success text-white py-1 px-2 rounded text-sm">Завершён</span>
          ) : (
            'В процессе'
          )}
        </div>
      </div>
      {slot.image ? (
        <div className="mb-6">
          <img
            src={slot.image}
            alt="Креатив"
            className="max-w-md h-auto rounded shadow-sm border"
          />
        </div>
      ) : null}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">Текст объявления:</h2>
        <p className="p-4 bg-base-50 rounded">{slot.text}</p>
      </div>
      {isCompleted ? (
        <div className="mb-8">
          <h2 className="font-semibold mb-2">Результаты теста:</h2>
          {winner ? (
            <p className="mb-4 text-green-800">
              ✅ Тест завершён. Победила вариация <strong>{winner}</strong>.
            </p>
          ) : (
            <p className="mb-4">Тест завершён.</p>
          )}
          {/* Explanation text of why the winner won */}
          <p>
            {slot.explanation ||
              'Вариант ' +
                winner +
                ' получил значительно более высокий CTR благодаря более привлекательному изображению и чётко сформулированному сообщению. Рекомендуем в дальнейшем использовать подобные элементы для повышения эффективности рекламных кампаний.'}
          </p>
          {/* TODO: Визуализировать результаты с помощью Recharts (например, график CTR по вариациям) */}
        </div>
      ) : (
        <p className="mb-8">
          ⏳ Тест ещё выполняется. Результаты и объяснения будут доступны после завершения.
        </p>
      )}
      {!slot.demo && (
        <Link
          href={`/slot/${slot.id}/edit`}
          className="inline-block bg-accent text-white font-medium px-4 py-2 rounded hover:opacity-90"
        >
          Редактировать слот
        </Link>
      )}
    </div>
  );
}
