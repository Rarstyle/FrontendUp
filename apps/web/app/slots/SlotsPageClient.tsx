'use client';

import Link from 'next/link';
import { useSlots } from '../../hooks/useSlots';

export default function SlotsPageClient() {
  const { slots, deleteSlot } = useSlots();

  return (
    <div className="max-w-5xl mx-auto py-8 px-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-700">A/B-тесты</h1>
        <Link
          href="/slot/new"
          className="bg-[#FF6B00] text-white font-medium px-4 py-2 rounded inline-flex items-center hover:opacity-90"
        >
          <svg
            className="h-5 w-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Создать тест
        </Link>
      </div>

      {slots.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Слотов пока нет.</p>
          <p className="text-gray-500">
            Нажмите «Создать тест», чтобы добавить первый A/B-тест.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {slot.title}
                </h3>
                <button
                  onClick={() => deleteSlot(slot.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Удалить
                </button>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {slot.description}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Бюджет: {slot.budget} ₽</span>
                <span>{new Date(slot.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="mt-4 flex gap-2">
                <Link
                  href={`/slot/${slot.id}`}
                  className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  Просмотр
                </Link>
                <Link
                  href={`/slot/${slot.id}/edit`}
                  className="flex-1 bg-gray-200 text-gray-700 text-center py-2 px-4 rounded hover:bg-gray-300 transition-colors"
                >
                  Редактировать
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
