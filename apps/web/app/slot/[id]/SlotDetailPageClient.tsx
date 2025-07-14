'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSlots, Slot } from '../../../hooks/useSlots';

export default function SlotDetailPageClient() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const { getSlot } = useSlots();
  const [slot, setSlot] = useState<Slot | undefined>();

  useEffect(() => {
    const foundSlot = getSlot(id);
    if (!foundSlot) {
      router.replace('/slots');
    } else {
      setSlot(foundSlot);
    }
  }, [id, getSlot, router]);

  if (!slot) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-5">
        <div className="text-center">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-5">
      <Link
        href="/slots"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Все тесты
      </Link>

      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{slot.title}</h1>

        <div className="mb-6 space-y-2 text-sm text-gray-600">
          <div>
            <strong>Описание:</strong> {slot.description}
          </div>
          <div>
            <strong>Бюджет:</strong> {slot.budget} ₽
          </div>
          <div>
            <strong>Создан:</strong>{' '}
            {new Date(slot.createdAt).toLocaleDateString()}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold mb-2 text-gray-900">
            Статус тестирования:
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              ⏳ Тест в процессе выполнения. Результаты будут доступны после
              завершения.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            href={`/slot/${slot.id}/edit`}
            className="bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Редактировать тест
          </Link>
          <Link
            href="/slots"
            className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            Назад к списку
          </Link>
        </div>
      </div>
    </div>
  );
}
