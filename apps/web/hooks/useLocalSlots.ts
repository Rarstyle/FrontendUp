'use client';

import { useState, useEffect } from 'react';

// Define Slot type for TypeScript (no 'any' usage)
export interface Slot {
  id: string;
  name: string;
  platform: 'vk' | 'yandex';
  text: string;
  image: string;
  variations: number;
  status: 'running' | 'completed';
  winnerVariant?: number;
  explanation?: string;
  demo?: boolean;
}

export function useLocalSlots() {
  // Initialize slots state from localStorage (or with demo slot if empty)
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem('slots');
      let initialSlots: Slot[] = stored ? JSON.parse(stored) : [];
      if (!initialSlots || initialSlots.length === 0) {
        // Insert a demo slot example for first-time users
        initialSlots = [
          {
            id: 'demo',
            name: 'Пример теста',
            platform: 'vk',
            text: 'Лучший кофе в городе! Заходите к нам в BrewBro ☕',
            image: '', // no actual image for demo
            variations: 2,
            status: 'completed',
            winnerVariant: 2,
            explanation: 'Вариант 2 показал более высокий CTR благодаря привлекательному изображению кофейной чашки и упоминанию скидки в тексте.',
            demo: true,
          },
        ];
        localStorage.setItem('slots', JSON.stringify(initialSlots));
      }
      setSlots(initialSlots);
    } catch (e) {
      console.error('Ошибка при загрузке слотов из LocalStorage', e);
    }
  }, []);

  // Save current slots to localStorage whenever they change
  const saveSlots = (newSlots: Slot[]) => {
    try {
      localStorage.setItem('slots', JSON.stringify(newSlots));
    } catch (e) {
      console.error('Ошибка при сохранении слотов', e);
    }
  };

  const createSlot = (data: Omit<Slot, 'id'>): string => {
    const id = Date.now().toString();
    const newSlot: Slot = { id, ...data };
    const updatedSlots = [...slots, newSlot];
    setSlots(updatedSlots);
    saveSlots(updatedSlots);
    return id;
  };

  const updateSlot = (id: string, data: Partial<Omit<Slot, 'id' | 'demo'>>) => {
    const updatedSlots = slots.map(s => s.id === id ? { ...s, ...data } : s);
    setSlots(updatedSlots);
    saveSlots(updatedSlots);
  };

  const deleteSlot = (id: string) => {
    const updatedSlots = slots.filter(s => s.id !== id);
    setSlots(updatedSlots);
    saveSlots(updatedSlots);
  };

  // TODO: Заменить LocalStorage на Firestore для сохранения слотов (при подключении базы данных)
  return { slots, createSlot, updateSlot, deleteSlot };
}
