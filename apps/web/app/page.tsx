'use client';

import React from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';

export default function HomePage() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16">
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Реклама, которая{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              работает
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Генерация креативов и авто-A/B-тестирование для VK Ads и Яндекс Директ с объяснимым AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={user ? '/slots' : '/login'}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {user ? 'Перейти в кабинет' : 'Начать бесплатно'}
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-white text-lg font-medium px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-200"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как это работает</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой процесс, который даёт быстрые результаты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Подключение',
                description: 'Подключаете рекламные кабинеты VK Ads или Яндекс Директ',
              },
              {
                step: '02',
                title: 'Генерация',
                description:
                  'Задаёте текст и изображение, AI предложит несколько вариантов креативов',
              },
              {
                step: '03',
                title: 'Тестирование',
                description: 'Платформа создаёт вариации и автоматически следит за результатами',
              },
              {
                step: '04',
                title: 'Результат',
                description: 'Получаете рост CTR и понятные инсайты о причинах успеха',
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-5 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы повысить эффективность рекламы?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам бизнесов, которые уже используют AI для оптимизации креативов
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={user ? '/slots' : '/login'}
              className="bg-white text-orange-600 text-lg font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {user ? 'Перейти в кабинет' : 'Начать бесплатно'}
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white text-lg font-medium px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
