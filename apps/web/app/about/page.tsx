export const metadata = {
  title: 'О нас – AdBrain Lab',
  description:
    'Миссия, команда и ценности AdBrain Lab – кто стоит за платформой и ради чего мы работаем',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl font-bold mb-4">О нас</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Мы создаём будущее рекламы, где каждый креатив становится эффективнее благодаря
            искусственному интеллекту и прозрачной аналитике
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Наша миссия</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Дать малому бизнесу инструмент, который за 5 минут повышает CTR рекламы на 20%
              благодаря explainable AI.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Команда</h2>
            <p className="text-base text-gray-600">
              Эксперты в области AI и performance-маркетинга
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CEO */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Илья Федоров</h3>
              <p className="text-blue-600 font-medium mb-1">CEO</p>
              <p className="text-gray-600 text-sm">7 лет в performance-маркетинге</p>
            </div>

            {/* CTO */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Мария Соколова</h3>
              <p className="text-purple-600 font-medium mb-1">CTO</p>
              <p className="text-gray-600 text-sm">ex-Mail.ru Ads, эксперт по Gen-AI pipeline</p>
            </div>

            {/* ML Engineer */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Артём Громов</h3>
              <p className="text-green-600 font-medium mb-1">ML-инженер</p>
              <p className="text-gray-600 text-sm">Исследователь eye-tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Наши ценности</h2>
            <p className="text-base text-gray-600">Принципы, которые направляют нашу работу</p>
          </div>

          <div className="space-y-6">
            {/* Value 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Прозрачность результатов</h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы открыто показываем данные: какой креатив выиграл и почему. Никаких чёрных
                  ящиков — только понятная аналитика, которая помогает принимать обоснованные
                  решения.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Экономия времени</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ценим ваше время – автоматизируем рутину, чтобы вы фокусировались на бизнесе. Наша
                  платформа работает за секунды, а не за часы.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Рост клиента = наш рост</h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы растём вместе с успехом наших клиентов, поэтому нацелены на максимальный ROI
                  каждого. Ваш успех — это наш успех.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold mb-3">Готовы повысить эффективность рекламы?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Присоединяйтесь к тысячам бизнесов, которые уже используют AI для оптимизации креативов
          </p>
          <a
            href="/login"
            className="inline-block bg-white text-blue-600 font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Начать бесплатно
          </a>
        </div>
      </section>
    </div>
  );
}
