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

export default function AnalyticsPage() {
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
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Аналитика</h1>
              <p className="text-gray-600">Метрики и поведение пользователей</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="1d">Последние 24 часа</option>
                <option value="7d">Последние 7 дней</option>
                <option value="30d">Последние 30 дней</option>
                <option value="90d">Последние 90 дней</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Основные метрики */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Просмотры страниц</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.pageViews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Уникальные посетители</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.uniqueVisitors.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Конверсия</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.conversionRate}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Время на странице</p>
                <p className="text-2xl font-bold text-gray-900">{analyticsData.averageTimeOnPage}с</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Популярные страницы */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Популярные страницы</h3>
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{page.page}</span>
                  <span className="font-semibold text-gray-900">{page.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Популярные кнопки */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Популярные кнопки</h3>
            <div className="space-y-3">
              {analyticsData.topButtons.map((button, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm">{button.button}</span>
                  <span className="font-semibold text-gray-900">{button.clicks.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Конверсии */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Конверсии</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Тип конверсии</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Количество</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.conversions.map((conversion, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{conversion.type}</td>
                    <td className="py-3 px-4 text-right font-semibold text-gray-900">{conversion.count.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right font-semibold text-gray-900">
                      {conversion.value > 0 ? `${conversion.value.toLocaleString()} ₽` : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Путь пользователя */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Путь пользователя</h3>
          <div className="flex items-center justify-between">
            {analyticsData.userJourney.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600 font-semibold text-sm">{step.users}</span>
                  </div>
                  <p className="text-xs text-gray-600">{step.step}</p>
                </div>
                {index < analyticsData.userJourney.length - 1 && (
                  <div className="w-16 h-0.5 bg-gray-300 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 