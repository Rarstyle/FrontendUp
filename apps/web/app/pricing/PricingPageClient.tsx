'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

interface Plan {
  name: string;
  description: string;
  price: {
    monthly: number | string;
    annually: number | string;
  };
  features: string[];
  mostPopular: boolean;
}

const plans: Plan[] = [
  {
    name: 'Start',
    description: 'Для ИП и самозанятых',
    price: { monthly: 2900, annually: 29900 },
    features: [
      '20 креативов в месяц',
      'A/B-тестирование',
      'Поддержка VK Ads & Yandex Direct',
      'Базовая аналитика',
    ],
    mostPopular: false,
  },
  {
    name: 'Grow',
    description: 'Для SMM-студий и малого бизнеса',
    price: { monthly: 4990, annually: 49900 },
    features: [
      '50 креативов в месяц',
      'Все, что в тарифе Start',
      'Приоритетная поддержка',
      'Расширенная аналитика',
      'Доступ к API',
    ],
    mostPopular: true,
  },
  {
    name: 'Scale',
    description: 'Для растущих агентств',
    price: { monthly: 7900, annually: 79900 },
    features: [
      '100 креативов в месяц',
      'Все, что в тарифе Grow',
      'Персональный менеджер',
      'Помощь с интеграциями',
    ],
    mostPopular: false,
  },
  {
    name: 'Enterprise',
    description: 'Для крупных компаний',
    price: { monthly: 'от\u00A040\u00A0000\u00A0₽', annually: 'Индивидуально' },
    features: [
      'Безлимитные креативы',
      'Выделенная команда',
      'Кастомные интеграции',
      'SLA и обучение',
    ],
    mostPopular: false,
  },
];

const faqs = [
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
    a: 'Мы принимаем все основные кредитные карты (Visa, MasterCard, Мир), а также оплату через СБП для юридических лиц.',
  },
  {
    q: 'Как происходит возврат средств?',
    a: 'Если вы не удовлетворены сервисом в течение первых 14 дней, мы вернем вам деньги.',
  },
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingPageClient() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    return price.toLocaleString('ru-RU');
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Тарифы, которые растут вместе с вами
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Выберите план, который идеально подходит для ваших текущих задач, и
            масштабируйтесь по мере роста вашего бизнеса.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-lg font-medium ${
                billingPeriod === 'monthly' ? 'text-white' : 'text-blue-200'
              }`}
            >
              Ежемесячно
            </span>
            <button
              onClick={() =>
                setBillingPeriod(
                  billingPeriod === 'monthly' ? 'annually' : 'monthly'
                )
              }
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors bg-white/30`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'annually'
                    ? 'translate-x-6'
                    : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-lg font-medium ${
                billingPeriod === 'annually' ? 'text-white' : 'text-blue-200'
              }`}
            >
              Ежегодно
              <span className="ml-2 bg-green-200 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                скидка 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-5 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={classNames(
                plan.mostPopular
                  ? 'ring-2 ring-orange-500 scale-105'
                  : 'ring-1 ring-gray-200',
                'relative rounded-3xl px-6 pt-6 pb-8 bg-white shadow-lg flex flex-col transition-transform transform hover:scale-105'
              )}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
                    Популярный
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold leading-8 text-gray-900 text-center">
                {plan.name}
              </h3>
              <p className="mt-4 text-base leading-6 text-gray-600 text-center">
                {plan.description}
              </p>
              <p className="mt-7 flex items-baseline gap-x-1 justify-center">
                <span className={`${plan.name === 'Enterprise' ? 'text-3xl' : 'text-4xl'} font-bold tracking-tight text-gray-900 whitespace-nowrap`}>
                  {formatPrice(plan.price[billingPeriod])}
                </span>
                <span className="text-base font-semibold leading-6 text-gray-600">
                  {plan.name !== 'Enterprise' && ` / ${billingPeriod === 'monthly' ? 'мес' : 'год'}`}
                </span>
              </p>
              {billingPeriod === 'annually' && plan.name !== 'Free' && (
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-400">Скидка 20% уже включена в годовые тарифы.</p>
                </div>
              )}
              {plan.name !== 'Enterprise' && (
                <p className="text-sm text-gray-500 mt-1 text-center">
                  {plan.name === 'Start' ? '20 креативов' : 
                   plan.name === 'Grow' ? '50 креативов' : 
                   plan.name === 'Scale' ? '100 креативов' : ''}
                </p>
              )}
              {plan.name === 'Enterprise' && (
                <p className="text-sm text-gray-500 mt-1 text-center">
                  Безлимитные креативы
                </p>
              )}
              <ul
                role="list"
                className="mt-9 space-y-4 text-base leading-6 text-gray-700 flex-1 w-full"
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex justify-center">
                    <div className="flex items-center w-[85%] mx-auto">
                      <CheckIcon
                        className="h-5 w-5 flex-none text-blue-600 mr-2"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.name === 'Enterprise' ? '/about' : `/payment?plan=${plan.name}&billing=${billingPeriod}`}
                aria-describedby={plan.name}
                className={classNames(
                  plan.mostPopular
                    ? 'bg-orange-500 text-white shadow-md hover:bg-orange-600'
                    : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                  'mt-8 block rounded-md py-2.5 px-4 text-center text-base font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                )}
              >
                {plan.name === 'Enterprise' ? 'Связаться с нами' : 'Выбрать план'}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
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
    </div>
  );
}
