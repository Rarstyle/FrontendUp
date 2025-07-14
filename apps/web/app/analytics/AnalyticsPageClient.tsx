'use client';

import React, { useState, useEffect } from 'react';
import { useTimeTracking, useScrollTracking } from '../../lib/analytics';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  conversionRate: number;
  averageTimeOnPage: number;
  topPages: Array<{ page: string; views: number }>;
  topButtons: Array<{ button: string; clicks: number }>;
  conversions: Array<{ type: string; count: number; value: number }>;
  userJourney: Array<{ step: string; users: number }>;
}

export default function AnalyticsPageClient() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    conversionRate: 0,
    averageTimeOnPage: 0,
    topPages: [],
    topButtons: [],
    conversions: [],
    userJourney: [],
  });

  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);

  // Отслеживание времени на странице и скролла
  useTimeTracking('analytics');
  useScrollTracking('analytics');

  useEffect(() => {
    // Имитация загрузки данных аналитики
    setTimeout(() => {
      setAnalyticsData({
        pageViews: 1247,
        uniqueVisitors: 892,
        conversionRate: 3.2,
        averageTimeOnPage: 127,
        topPages: [
          { page: 'Главная', views: 456 },
          { page: 'Тарифы', views: 234 },
          { page: 'О нас', views: 123 },
          { page: 'Оплата', views: 89 },
        ],
        topButtons: [
          { button: 'Посмотреть тарифы', clicks: 156 },
          { button: 'Оплатить Grow', clicks: 89 },
          { button: 'Оплатить Start', clicks: 67 },
          { button: 'Узнать больше', clicks: 45 },
        ],
        conversions: [
          { type: 'Просмотр тарифов', count: 234, value: 0 },
          { type: 'Клик по тарифу', count: 156, value: 0 },
          { type: 'Попытка оплаты', count: 89, value: 445110 },
          { type: 'Успешная оплата', count: 23, value: 114770 },
        ],
        userJourney: [
          { step: 'Главная', users: 456 },
          { step: 'Тарифы', users: 234 },
          { step: 'Оплата', users: 89 },
          { step: 'Успех', users: 23 },
        ],
      });
      setIsLoading(false);
    }, 1000);
  }, [timeRange]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка аналитики...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ...rest of the AnalyticsPage JSX... */}
    </div>
  );
}
