'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { trackTestCreation, trackFormSubmission } from '../lib/analytics';
import TrackedButton from './TrackedButton';

interface SlotFormData {
  title: string;
  description: string;
  budget: string;
}

export default function SlotForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<SlotFormData>({
    title: '',
    description: '',
    budget: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Простое сохранение в localStorage
      const slots = JSON.parse(localStorage.getItem('slots') || '[]');
      const newSlot = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString(),
      };
      slots.push(newSlot);
      localStorage.setItem('slots', JSON.stringify(slots));
      
      // Отслеживаем успешное создание теста
      trackTestCreation('ab_test');
      trackFormSubmission('slot_form', true);
      
      router.push('/slots');
    } catch (error) {
      // Отслеживаем ошибку
      trackFormSubmission('slot_form', false);
      console.error('Ошибка при создании теста:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Создать новый A/B-тест</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
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
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
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
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
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
          <TrackedButton
            type="submit"
            trackingName="create_test_submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Создать тест
          </TrackedButton>
          <TrackedButton
            type="button"
            trackingName="create_test_cancel"
            onClick={() => router.back()}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
          >
            Отмена
          </TrackedButton>
        </div>
      </form>
    </div>
  );
}
