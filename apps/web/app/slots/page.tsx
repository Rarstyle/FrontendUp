"use client";

import Link from "next/link";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useLocalSlots } from "@/hooks/useLocalSlots";
import { PlusIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Мои слоты – AdBrain Lab",
};

export default function SlotsPage() {
  useAuthGuard();
  const { slots } = useLocalSlots();

  return (
    <div className="max-w-5xl mx-auto py-8 px-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-primary">A/B-тесты</h1>
        <Link
          href="/slot/new"
          className="bg-accent text-white font-medium px-4 py-2 rounded inline-flex items-center hover:opacity-90"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Создать слот
        </Link>
      </div>
      {slots.length === 0 ? (
        <p className="text-base-900">
          Слотов пока нет. Нажмите «Создать слот», чтобы добавить первый
          A/B-тест.
        </p>
      ) : (
        <ul className="space-y-4">
          {slots.map((slot) => (
            <li
              key={slot.id}
              className="bg-base-50 p-4 rounded flex items-center justify-between"
            >
              <div>
                <Link
                  href={`/slot/${slot.id}`}
                  className="text-primary font-medium hover:underline"
                >
                  {slot.name}{" "}
                  {slot.demo && (
                    <span className="text-xs bg-gray-300 text-gray-800 px-2 py-0.5 rounded ml-1">
                      демо
                    </span>
                  )}
                </Link>
                <div className="text-sm text-base-900">
                  Платформа:{" "}
                  {slot.platform === "vk" ? "VK Ads" : "Яндекс Директ"}
                  {" • "}Статус:{" "}
                  {slot.status === "completed" ? "Завершён" : "Запущен"}
                </div>
              </div>
              {!slot.demo && (
                <Link
                  href={`/slot/${slot.id}/edit`}
                  className="text-primary text-sm hover:underline"
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
