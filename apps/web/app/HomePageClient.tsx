'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import { useTimeTracking, useScrollTracking, trackButtonClick, trackLinkClick, useReadingTracking } from '../lib/analytics';
import TrackedLink from '../components/TrackedLink';

export default function HomePageClient() {
  const [user] = useAuthState(auth);

  // Refs для отслеживания чтения
  const heroRef = useRef<HTMLElement>(null);
  const successCasesRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const finalCTARef = useRef<HTMLElement>(null);

  // Отслеживание времени на странице и скролла
  useTimeTracking('home');
  useScrollTracking('home');

  // Отслеживание времени чтения секций
  useReadingTracking('home', 'hero', heroRef);
  useReadingTracking('home', 'success_cases', successCasesRef);
  useReadingTracking('home', 'how_it_works', howItWorksRef);
  useReadingTracking('home', 'final_cta', finalCTARef);

  const handleButtonClick = (buttonName: string, buttonType: 'primary' | 'secondary' | 'cta' = 'primary', position?: string) => {
    trackButtonClick(buttonName, 'home', buttonType, position);
  };

  const handleLinkClick = (linkName: string, destination: string) => {
    trackLinkClick(linkName, 'home', destination);
  };

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Повышаем CTR рекламы на{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              20%
            </span>{' '}
            за 5 минут
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Генерация креативов и авто-A/B-тестирование для VK Ads и Яндекс Директ с объяснимым ИИ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleButtonClick('hero_cta_main', 'cta', 'hero')}
              className="bg-gradient-to-r from-accent to-orange-500 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Link href="/pricing" onClick={() => handleLinkClick('hero_cta_main', '/pricing')}>
                Посмотреть тарифы
              </Link>
            </button>
            <button
              onClick={() => handleButtonClick('hero_cta_secondary', 'secondary', 'hero')}
              className="text-white/80 hover:text-white text-lg font-medium px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-200"
            >
              <Link href="/about" onClick={() => handleLinkClick('hero_cta_secondary', '/about')}>
                Узнать больше
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section ref={successCasesRef} className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши успехи</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                client: 'Кофейня BrewBro',
                niche: 'HoReCa',
                ctrBefore: '1.4%',
                ctrAfter: '1.8%',
                uplift: '28%',
                spend: '10 000 ₽',
              },
              {
                client: 'Барбершоп Чёткий',
                niche: 'Сервис',
                ctrBefore: '1.1%',
                ctrAfter: '1.55%',
                uplift: '41%',
                spend: '7 500 ₽',
              },
              {
                client: 'Beauty-eCom Glam',
                niche: 'Beauty',
                ctrBefore: '0.9%',
                ctrAfter: '1.3%',
                uplift: '44%',
                spend: '12 000 ₽',
              },
            ].map((case_, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{case_.client}</h3>
                <p className="text-gray-500 mb-4">{case_.niche}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">CTR до</p>
                    <p className="font-semibold text-gray-900">{case_.ctrBefore}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">CTR после</p>
                    <p className="font-semibold text-green-600">{case_.ctrAfter}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Рост</p>
                    <p className="font-semibold text-green-600">+{case_.uplift}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Расход</p>
                    <p className="font-semibold text-gray-900">{case_.spend}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section ref={howItWorksRef} className="py-16 bg-white">
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
      <section ref={finalCTARef} className="py-16 bg-gradient-to-r from-accent to-orange-500 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-5 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы повысить эффективность рекламы?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам бизнесов, которые уже используют AI для оптимизации креативов
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleButtonClick('bottom_cta_main', 'cta', 'footer')}
              className="bg-white text-accent text-lg font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Link href="/pricing" onClick={() => handleLinkClick('bottom_cta_main', '/pricing')}>
                Посмотреть тарифы
              </Link>
            </button>
            <button
              onClick={() => handleButtonClick('bottom_cta_secondary', 'secondary', 'footer')}
              className="text-white/90 hover:text-white text-lg font-medium px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              <Link href="/about" onClick={() => handleLinkClick('bottom_cta_secondary', '/about')}>
                Узнать больше
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
