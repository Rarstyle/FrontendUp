'use client';

import React from 'react';
import { trackButtonClick } from '../lib/analytics';
import { usePathname } from 'next/navigation';

interface TrackedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  trackingName: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TrackedButton({ 
  children, 
  trackingName, 
  onClick, 
  ...props 
}: TrackedButtonProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Отслеживаем клик
    trackButtonClick(trackingName, pathname);
    
    // Вызываем оригинальный onClick если есть
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
} 