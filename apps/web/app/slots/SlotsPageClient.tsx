'use client';

import Link from 'next/link';
import { useAuthGuard } from '../../hooks/useAuthGuard';
import { useLocalSlots, type Slot } from '@/shared/hooks/useLocalSlots';

export default function SlotsPageClient() {
  useAuthGuard();
  const { slots } = useLocalSlots();

  return (
    <div className="max-w-5xl mx-auto py-8 px-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-700">A/B-тесты</h1>
        <Link
          href="/slot/new"
          className="bg-[#FF6B00] text-white font-medium px-4 py-2 rounded inline-flex items-center hover:opacity-90"
        >
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Создать слот
        </Link>
      </div>
      {slots.length === 0 ? (
        <p className="text-gray-900">
          Слотов пока нет. Нажмите «Создать слот», чтобы добавить первый A/B-тест.
        </p>
      ) : (
        <ul className="space-y-4">
          {slots.map((slot: Slot) => (
            <li key={slot.id} className="bg-gray-50 p-4 rounded flex items-center gap-4">
              {/* Миниатюра изображения */}
              <div className="flex-shrink-0">
                {slot.image ? (
                  <img
                    src={slot.image}
                    alt={slot.name}
                    className="w-16 h-16 object-cover rounded border"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-200 rounded border flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Информация о слоте */}
              <div className="flex-1">
                <Link
                  href={`/slot/${slot.id}`}
                  className="text-blue-700 font-medium hover:underline"
                >
                  {slot.name}{' '}
                  {slot.demo && (
                    <span className="text-xs bg-gray-300 text-gray-800 px-2 py-0.5 rounded ml-1">
                      демо
                    </span>
                  )}
                </Link>
                <div className="text-sm text-gray-900">
                  Платформа: {slot.platform === 'vk' ? 'VK Ads' : 'Яндекс Директ'} • Статус:{' '}
                  {slot.status === 'completed' ? 'Завершён' : 'Запущен'}
                </div>
              </div>

              {/* Кнопка редактирования */}
              {!slot.demo && (
                <Link
                  href={`/slot/${slot.id}/edit`}
                  className="text-blue-700 text-sm hover:underline flex-shrink-0"
                >
                  редактировать
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
