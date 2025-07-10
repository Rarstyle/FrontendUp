'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Start',
      description: 'Для ИП и самозанятых',
      creatives: 20,
      price: { monthly: 2900, yearly: 26100 },
      features: [
        '20 креативов в месяц',
        'A/B тестирование',
        'Поддержка VK Ads и Яндекс Директ',
        'Базовые аналитики',
        'Email поддержка',
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Grow',
      description: 'Для SMM-студий',
      creatives: 50,
      price: { monthly: 4990, yearly: 44910 },
      features: [
        '50 креативов в месяц',
        'Все функции Start',
        'Приоритетная поддержка',
        'Расширенная аналитика',
        'API доступ',
      ],
      popular: true,
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Scale',
      description: 'Для агентств',
      creatives: 100,
      price: { monthly: 7900, yearly: 71100 },
      features: [
        '100 креативов в месяц',
        'Все функции Grow',
        'Персональный менеджер',
        'Индивидуальные интеграции',
        'Обучение команды',
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Enterprise',
      description: 'Для крупных компаний',
      creatives: 'Индивидуально',
      price: { monthly: 40000, yearly: 360000 },
      features: [
        'Неограниченное количество креативов',
        'SLA 24/7',
        'Выделенный аккаунт-менеджер',
        'Кастомные интеграции',
        'Белый лейбл',
      ],
      popular: false,
      color: 'from-gray-700 to-gray-800',
    },
  ];

  const currentPrice = (plan: any) =>
    billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly;
  const formatPrice = (price: number) => price.toLocaleString('ru-RU');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Выберите свой план</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            От стартапов до крупных агентств — у нас есть решение для каждого
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-lg ${billingPeriod === 'monthly' ? 'text-white' : 'text-blue-200'}`}
            >
              Ежемесячно
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                billingPeriod === 'yearly' ? 'bg-white' : 'bg-blue-200'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-blue-600 transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-lg ${billingPeriod === 'yearly' ? 'text-white' : 'text-blue-200'}`}
            >
              Ежегодно
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                -10%
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {typeof plan.creatives === 'number' ? (
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {formatPrice(currentPrice(plan))} ₽
                        <span className="text-lg text-gray-500 font-normal">
                          /{billingPeriod === 'monthly' ? 'мес' : 'год'}
                        </span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        от {formatPrice(currentPrice(plan))} ₽
                        <span className="text-lg text-gray-500 font-normal">
                          /{billingPeriod === 'monthly' ? 'мес' : 'год'}
                        </span>
                      </div>
                    )}

                    <div className="text-sm text-gray-500">
                      {typeof plan.creatives === 'number'
                        ? `${plan.creatives} креативов`
                        : plan.creatives}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/login"
                  className={`w-full block text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Связаться с нами' : 'Начать бесплатно'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Попробуйте бесплатно</h3>
            <p className="text-gray-600 mb-6 text-lg">
              3 дня или 10 креативов бесплатно — что наступит раньше. Никаких обязательств, полный
              доступ ко всем функциям.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Начать бесплатный trial
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
