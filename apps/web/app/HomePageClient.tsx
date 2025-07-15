'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import {
  ChevronRightIcon,
  SparklesIcon,
  ClockIcon,
  EyeIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

export default function HomePageClient() {
  const [user] = useAuthState(auth);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 md:py-28">
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Увеличьте CTR рекламы на 20% всего за 5 минут
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
            AI-креативы + авто-A/B-тесты в VK Ads и Яндекс Директ без лишней
            рутины.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={user ? '/slots' : '/pricing'}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              {user ? 'Перейти в кабинет' : 'Смотреть тарифы'}
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-white text-lg font-medium px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-200"
            >
              Как это работает
            </Link>
          </div>
        </div>
      </section>

      {/* "Why it's important" Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему это важно
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <SparklesIcon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                +20 % CTR
              </h3>
              <p className="text-gray-600">Подтверждено на 120 кампаниях.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <ClockIcon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Экономия от 5 часов
              </h3>
              <p className="text-gray-600">
                Креативной работы в неделю.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <EyeIcon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Explainable AI
              </h3>
              <p className="text-gray-600">
                Вы видите логику, а не «чёрный ящик».
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой процесс, который даёт быстрые результаты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Подключение',
                description:
                  'Подключаете рекламные кабинеты VK Ads или Яндекс Директ',
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
                description:
                  'Платформа создаёт вариации и автоматически следит за результатами',
              },
              {
                step: '04',
                title: 'Результат',
                description:
                  'Получаете рост CTR и понятные инсайты о причинах успеха',
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Нам доверяют
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <p className="text-xl text-gray-700 italic leading-relaxed">
                «Мы снизили CPA на 30 % и наконец-то можем объяснить это
                клиенту»
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                Ольга Р., SMM-агентство “Медиапушка”
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <p className="text-xl text-gray-700 italic leading-relaxed">
                «Автоматизация A/B-тестов освободила время для стратегии, а
                не рутины. CTR вырос на 18%»
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                Иван П., Маркетолог в e-commerce
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Прозрачные тарифы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Начните с малого и растите вместе с нами.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Start</h3>
                <p className="text-2xl font-bold text-blue-600 mt-2">2 900 ₽</p>
                <p className="text-gray-500 mt-1">20 креативов</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Grow</h3>
                <p className="text-2xl font-bold text-blue-600 mt-2">4 990 ₽</p>
                <p className="text-gray-500 mt-1">50 креативов</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Scale</h3>
                <p className="text-2xl font-bold text-blue-600 mt-2">7 900 ₽</p>
                <p className="text-gray-500 mt-1">100 креативов</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Enterprise</h3>
                <p className="text-lg font-semibold text-gray-700 mt-2">По запросу</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Смотреть все тарифы <ChevronRightIcon className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Можно отменить в любой момент?',
                a: 'Да, в любой момент в один клик из личного кабинета. Без скрытых условий.',
              },
              {
                q: 'Ваш AI хранит мои данные?',
                a: 'Мы храним только зашифрованные метаданные ваших кампаний для обучения AI. Доступа к вашим паролям и личной информации у нас нет.',
              },
              {
                q: 'Какие способы оплаты вы принимаете?',
                a: 'Мы принимаем все основные кредитные карты (Visa, MasterCard), а также оплату через СБП для юридических лиц.',
              },
              {
                q: 'Есть ли у вас поддержка?',
                a: 'Да, наша команда поддержки доступна 24/7 по email и в Telegram для всех пользователей на платных тарифах.',
              },
              {
                q: 'Как происходит возврат средств?',
                a: 'Если вы не удовлетворены сервисом в течение первых 14 дней, мы вернем вам деньги без лишних вопросов.',
              },
              {
                q: 'Могу я сменить тариф позже?',
                a: 'Конечно. Вы можете в любой момент повысить или понизить свой тарифный план в личном кабинете.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <p className="font-semibold text-lg text-gray-900">{faq.q}</p>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      openFaq === i ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-700">{faq.a}</p>
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
            Присоединяйтесь к тысячам бизнесов, которые уже используют AI для
            оптимизации креативов
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={user ? '/slots' : '/pricing'}
              className="bg-white text-orange-600 text-lg font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {user ? 'Перейти в кабинет' : 'Смотреть тарифы'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
