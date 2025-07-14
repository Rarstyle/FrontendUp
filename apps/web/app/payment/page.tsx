'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import Image from 'next/image';

function PaymentContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  const billing = searchParams.get('billing');

  const [paymentMethod, setPaymentMethod] = useState('card');

  const billingText = billing === 'yearly' ? 'годовой' : 'месячный';
  const price = 2900; // Placeholder price

  const customerRoles = [
    'Владелец малого бизнеса',
    'Маркетолог в штате',
    'Маркетинговое агентство',
    'Индивидуальный предприниматель (ИП)',
    'Другое',
  ];

  if (!plan || !billing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <p className="text-red-500">
            Информация о тарифе не была выбрана. Пожалуйста, вернитесь на
            страницу с тарифами.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Customer Info Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Информация о клиенте
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Полное имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Иван Петров"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Кто вы?
              </label>
              <select
                id="role"
                name="role"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                {customerRoles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </div>
          </form>
        </div>

        {/* Order Summary and Payment */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ваш заказ</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Тариф</span>
              <span className="font-bold text-gray-900">{plan}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Тип подписки</span>
              <span className="font-bold text-gray-900 capitalize">
                {billingText}
              </span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center text-lg">
              <span className="font-medium text-gray-800">Итого</span>
              <span className="font-bold text-blue-600">
                {price.toLocaleString('ru-RU')} ₽
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Способ оплаты
          </h3>
          <div className="space-y-4 mb-8">
            <div
              onClick={() => setPaymentMethod('card')}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                paymentMethod === 'card'
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-300'
              }`}
            >
              <div className="mr-4 text-blue-600">
                <FaCreditCard size={24} />
              </div>
              <span className="font-medium text-gray-800">
                Банковская карта
              </span>
            </div>
            <div
              onClick={() => setPaymentMethod('yukassa')}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                paymentMethod === 'yukassa'
                  ? 'border-yellow-500 ring-2 ring-yellow-200'
                  : 'border-gray-300'
              }`}
            >
              <span className="font-bold text-yellow-500 mr-4 text-lg">Ю</span>
              <span className="font-medium text-gray-800">ЮKassa</span>
            </div>
            <div
              onClick={() => setPaymentMethod('sbp')}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                paymentMethod === 'sbp'
                  ? 'border-green-500 ring-2 ring-green-200'
                  : 'border-gray-300'
              }`}
            >
              <Image src="/sbp_logo.svg" alt="СБП" width={60} height={17} className="mr-4" />
              <span className="font-medium text-gray-800">СБП</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Оплатить {price.toLocaleString('ru-RU')} ₽
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Загрузка...
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}
