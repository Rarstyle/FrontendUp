'use client';

import { useState, useEffect } from 'react';

export interface Slot {
  id: string;
  title: string;
  description: string;
  budget: string;
  createdAt: string;
}

export function useSlots() {
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    // Загружаем слоты из localStorage при инициализации
    const savedSlots = localStorage.getItem('slots');
    if (savedSlots) {
      setSlots(JSON.parse(savedSlots));
    }
  }, []);

  const addSlot = (slot: Omit<Slot, 'id' | 'createdAt'>) => {
    const newSlot: Slot = {
      ...slot,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    
    const updatedSlots = [...slots, newSlot];
    setSlots(updatedSlots);
    localStorage.setItem('slots', JSON.stringify(updatedSlots));
  };

  const deleteSlot = (id: string) => {
    const updatedSlots = slots.filter(slot => slot.id !== id);
    setSlots(updatedSlots);
    localStorage.setItem('slots', JSON.stringify(updatedSlots));
  };

  const getSlot = (id: string) => {
    return slots.find(slot => slot.id === id);
  };

  return {
    slots,
    addSlot,
    deleteSlot,
    getSlot,
  };
} 