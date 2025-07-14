'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  useTimeTracking,
  useScrollTracking,
  trackButtonClick,
  trackPricingView,
  trackConversion,
  trackFormSubmission,
} from '../../lib/analytics';

const YOOKASSA_ICON = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="yokassa-blue"
        x1="0"
        y1="0"
        x2="32"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0057FF" />
        <stop offset="1" stopColor="#0077FF" />
      </linearGradient>
    </defs>
    <g>
      <path
        d="M4 28V4h7.5c2.5 0 4.5 2 4.5 4.5S14 13 11.5 13H8v3h3.5c2.5 0 4.5 2 4.5 4.5S14 25 11.5 25H4Z"
        fill="url(#yokassa-blue)"
      />
      <circle cx="22.5" cy="16" r="6.5" fill="url(#yokassa-blue)" />
      <circle cx="22.5" cy="16" r="3.5" fill="white" />
    </g>
  </svg>
);

const SBP_ICON = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="16,2 30,10 16,18 2,10" fill="#6C4AB6" />
    <polygon points="16,18 30,26 16,34 2,26" fill="#009846" />
    <polygon points="16,2 30,10 16,18" fill="#F7931E" />
    <polygon points="16,18 30,26 16,34" fill="#E6007A" />
    <polygon points="16,18 2,10 16,2" fill="#00AEEF" />
    <polygon points="16,18 2,26 16,34" fill="#6C4AB6" />
  </svg>
);

const CARD_ICON = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" fill="#1E40AF" />
    <rect x="2" y="11" width="20" height="2" fill="#60A5FA" />
    <circle cx="6" cy="8" r="1" fill="#FBBF24" />
  </svg>
);

const PLANS = [
  {
    id: 'Start',
    name: 'Start',
    price: '2 900 ₽/мес',
    priceValue: 2900,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'Grow',
    name: 'Grow',
    price: '4 990 ₽/мес',
    priceValue: 4990,
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'Scale',
    name: 'Scale',
    price: '7 900 ₽/мес',
    priceValue: 7900,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'Enterprise',
    name: 'Enterprise',
    price: 'от 40 000 ₽',
    priceValue: 40000,
    color: 'from-orange-500 to-red-600',
  },
];

const METHODS = [
  {
    id: 'yookassa',
    label: 'ЮKassa (карта, СБП, Apple Pay)',
    icon: YOOKASSA_ICON,
  },
  { id: 'card', label: 'Банковская карта', icon: CARD_ICON },
  { id: 'sbp', label: 'СБП (QR-код)', icon: SBP_ICON },
];

export default function PayPage() {
  const params = useSearchParams();
  const planId = params.get('plan') || 'Start';
  const plan = PLANS.find(p => p.id === planId) || PLANS[0];
  const [method, setMethod] = useState(METHODS[0].id);
  const [isProcessing, setIsProcessing] = useState(false);

  // Отслеживание времени на странице и скролла
  useTimeTracking('pay');
  useScrollTracking('pay');

  // Отслеживание просмотра страницы оплаты
  useEffect(() => {
    trackPricingView(plan.id, 'select');
    trackConversion('payment_page_view', plan.priceValue);
  }, [plan.id, plan.priceValue]);

  const handleMethodChange = (methodId: string) => {
    setMethod(methodId);
    trackButtonClick(
      `payment_method_${methodId}`,
      'pay',
      'primary',
      'payment_methods'
    );
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    // Отслеживаем попытку оплаты
    trackButtonClick('payment_submit', 'pay', 'cta', 'payment_form');
    trackFormSubmission('payment_form', true, {
      plan: plan.id,
      plan_price: plan.priceValue,
      payment_method: method,
    });
    trackConversion('payment_attempt', plan.priceValue);

    // Здесь будет реальная логика оплаты
    setTimeout(() => {
      setIsProcessing(false);
      // Перенаправление на страницу успеха или обработка результата
      trackConversion('payment_success', plan.priceValue);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-2 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-4 border border-blue-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Оплата тарифа
        </h1>
        <div
          className={`bg-gradient-to-r ${plan.color} rounded-lg p-4 text-white text-center mb-6 text-base`}
        >
          <div className="font-semibold mb-1">Тариф</div>
          <div className="text-xl font-bold mb-1">{plan.name}</div>
          <div className="font-semibold">{plan.price}</div>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Способ оплаты
            </label>
            <div className="grid gap-2">
              {METHODS.map(m => (
                <label
                  key={m.id}
                  className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-all ${method === m.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:bg-blue-50'}`}
                >
                  <input
                    type="radio"
                    name="method"
                    value={m.id}
                    checked={method === m.id}
                    onChange={() => handleMethodChange(m.id)}
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-xl flex items-center">{m.icon}</span>
                  <span className="font-medium text-gray-900 text-sm">
                    {m.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="button"
            disabled={isProcessing}
            className={`w-full py-3 rounded-lg text-base font-bold shadow-lg transition-all bg-gradient-to-r ${plan.color} text-white hover:from-blue-700 hover:to-cyan-700 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            onClick={handlePayment}
          >
            {isProcessing ? 'Обработка...' : 'Перейти к оплате'}
          </button>
        </form>
      </div>
    </div>
  );
}
