'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSlots, Slot } from '../../../../hooks/useSlots';

export default function EditSlotPageClient({ id }: { id: string }) {
  const router = useRouter();
  const { getSlot } = useSlots();
  const [slot, setSlot] = useState<Slot | undefined>();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
  });

  useEffect(() => {
    const foundSlot = getSlot(id);
    if (!foundSlot) {
      router.replace('/slots');
    } else {
      setSlot(foundSlot);
      setFormData({
        title: foundSlot.title,
        description: foundSlot.description,
        budget: foundSlot.budget,
      });
    }
  }, [id, getSlot, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!slot) return;

    // Обновляем слот в localStorage
    const slots = JSON.parse(localStorage.getItem('slots') || '[]');
    const updatedSlots = slots.map((s: Slot) =>
      s.id === id ? { ...s, ...formData } : s
    );
    localStorage.setItem('slots', JSON.stringify(updatedSlots));

    router.push(`/slot/${id}`);
  };

  const handleDelete = () => {
    const confirm = window.confirm('Удалить тест? Это действие необратимо.');
    if (confirm) {
      const slots = JSON.parse(localStorage.getItem('slots') || '[]');
      const updatedSlots = slots.filter((s: Slot) => s.id !== id);
      localStorage.setItem('slots', JSON.stringify(updatedSlots));
      router.replace('/slots');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!slot) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-5">
        <div className="text-center">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-5">
      <h1 className="text-2xl font-bold mb-6">Редактировать тест</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Название теста
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите название теста"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Описание
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Опишите ваш тест"
          />
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Бюджет (руб.)
          </label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Укажите бюджет"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Сохранить изменения
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
          >
            Отмена
          </button>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800 text-sm underline"
        >
          Удалить тест
        </button>
      </div>
    </div>
  );
}
