'use client';

import Link from 'next/link';
import {
  useTimeTracking,
  useScrollTracking,
  trackButtonClick,
  trackPricingView,
  trackConversion,
} from '../../lib/analytics';
import { useEffect } from 'react';

export default function PricingPage() {
  // Отслеживание времени на странице и скролла
  useTimeTracking('pricing');
  useScrollTracking('pricing');

  // Отслеживание просмотра тарифов
  useEffect(() => {
    trackPricingView('all_plans', 'view');
  }, []);

  const handlePlanClick = (planName: string, planPrice: number) => {
    trackButtonClick(
      `pricing_${planName.toLowerCase()}`,
      'pricing',
      'cta',
      'pricing_cards'
    );
    trackPricingView(planName, 'click');
    trackConversion('pricing_click', planPrice);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Выберите свой{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              тариф
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
            Начните с любого плана и масштабируйтесь по мере роста бизнеса
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Без скрытых платежей</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Возврат средств в течение 14 дней</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Техподдержка 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают NeuroAd?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Доказанная эффективность и простота использования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📈',
                title: 'Рост CTR на 20%',
                description:
                  'Средний результат наших клиентов за первые 30 дней',
              },
              {
                icon: '⚡',
                title: 'Результат за 5 минут',
                description: 'От загрузки креатива до получения вариантов',
              },
              {
                icon: '🎯',
                title: 'Объяснимый ИИ',
                description:
                  'Понимаете, почему ИИ предлагает именно эти варианты',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Тарифные планы
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Выберите план, который подходит вашему бизнесу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Start план */}
          <div className="group relative">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Start</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  2 900 ₽
                </div>
                <div className="text-gray-500 mb-4">в месяц</div>
                <div className="bg-blue-50 rounded-xl p-3 mb-4">
                  <p className="text-blue-800 font-semibold">
                    20 креативов / мес
                  </p>
                  <p className="text-blue-600 text-sm">ИП / самозанятые</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  20 креативов в месяц
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Базовая аналитика
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Поддержка по email
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  VK Ads + Яндекс Директ
                </li>
              </ul>
              <div className="mt-auto">
                <button
                  onClick={() => handlePlanClick('Start', 2900)}
                  className="w-full block bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  <Link href={`/pay?plan=Start`}>Оплатить Start</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Grow план */}
          <div className="group relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Популярный
              </span>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-200 hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2 relative h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Grow</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  4 990 ₽
                </div>
                <div className="text-gray-500 mb-4">в месяц</div>
                <div className="bg-purple-50 rounded-xl p-3 mb-4">
                  <p className="text-purple-800 font-semibold">
                    50 креативов / мес
                  </p>
                  <p className="text-purple-600 text-sm">SMM-студии</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  50 креативов в месяц
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Расширенная аналитика
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Приоритетная поддержка
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Интеграция с CRM
                </li>
              </ul>
              <div className="mt-auto">
                <button
                  onClick={() => handlePlanClick('Grow', 4990)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  <Link href={`/pay?plan=Grow`}>Оплатить Grow</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Scale план */}
          <div className="group relative">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  7 900 ₽
                </div>
                <div className="text-gray-500 mb-4">в месяц</div>
                <div className="bg-green-50 rounded-xl p-3 mb-4">
                  <p className="text-green-800 font-semibold">
                    100 креативов / мес
                  </p>
                  <p className="text-green-600 text-sm">Агентства</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  100 креативов в месяц
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Персональный менеджер
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  API доступ
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Белый лейбл
                </li>
              </ul>
              <div className="mt-auto">
                <button
                  onClick={() => handlePlanClick('Scale', 7900)}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  <Link href={`/pay?plan=Scale`}>Оплатить Scale</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Enterprise план */}
          <div className="group relative">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4">
                  <span className="text-2xl">👑</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  от 40 000 ₽
                </div>
                <div className="text-gray-500 mb-4">индивидуально</div>
                <div className="bg-orange-50 rounded-xl p-3 mb-4">
                  <p className="text-orange-800 font-semibold">Неограниченно</p>
                  <p className="text-orange-600 text-sm">SLA 24/7</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Неограниченные креативы
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Выделенный менеджер
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  Кастомные интеграции
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  SLA 24/7
                </li>
              </ul>
              <div className="mt-auto">
                <button
                  onClick={() => handlePlanClick('Enterprise', 40000)}
                  className="w-full block bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  <Link href={`/pay?plan=Enterprise`}>
                    Запросить Enterprise
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Отзывы клиентов */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реальные отзывы от тех, кто уже использует NeuroAd
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Петрова',
                company: 'Кофейня BrewBro',
                text: 'CTR вырос с 1.4% до 1.8% за месяц. Платформа действительно работает!',
                rating: 5,
              },
              {
                name: 'Дмитрий Соколов',
                company: 'Барбершоп Чёткий',
                text: 'Простота использования поражает. Результаты превзошли ожидания.',
                rating: 5,
              },
              {
                name: 'Елена Козлова',
                company: 'Beauty-eCom Glam',
                text: 'AI предлагает действительно креативные варианты. Рекомендую всем!',
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ответы на популярные вопросы о NeuroAd
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Можно ли отменить подписку в любой момент?',
                answer:
                  'Да, вы можете отменить подписку в любое время. При отмене в течение 14 дней мы возвращаем полную стоимость.',
              },

              {
                question: 'Какие рекламные сети поддерживаются?',
                answer:
                  'Сейчас поддерживаются VK Ads и Яндекс Директ. В ближайшее время добавим другие сети.',
              },
              {
                question: 'Как быстро я увижу результаты?',
                answer:
                  'Первые результаты обычно видны в течение 1-2 недель после начала использования.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы повысить эффективность рекламы?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам бизнесов, которые уже используют AI для
            оптимизации креативов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handlePlanClick('Grow', 4990)}
              className="bg-white text-purple-600 text-lg font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Link href="/pay?plan=Grow">Начать с Grow</Link>
            </button>
            <button
              onClick={() =>
                trackButtonClick('learn_more', 'pricing', 'secondary', 'footer')
              }
              className="text-white/90 hover:text-white text-lg font-medium px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              <Link href="/about">Узнать больше</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
