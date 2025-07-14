export const metadata = {
  title: 'О нас – NeuroAd',
  description:
    'Узнайте больше о NeuroAd и нашей миссии по оптимизации рекламных креативов.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            О команде{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              NeuroAd
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Мы создаём будущее рекламы с помощью искусственного интеллекта
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Миссия */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наша миссия
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6"></div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-purple-100">
            <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed font-medium mb-6">
              Дать малому бизнесу инструмент, который за{' '}
              <span className="text-purple-600 font-bold">5 минут</span>{' '}
              повышает CTR рекламы на{' '}
              <span className="text-purple-600 font-bold">20%</span> благодаря{' '}
              <span className="text-purple-600 font-bold">объяснимому ИИ</span>.
            </p>
            <div className="bg-white/70 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-800 mb-3">
                Что такое "объяснимый ИИ"?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                В отличие от обычного ИИ, который работает как "чёрный ящик",
                наш алгоритм объясняет, почему один креатив работает лучше
                другого. Мы анализируем психологические факторы восприятия:
                цветовые акценты, эмоциональные триггеры, паттерны внимания и
                когнитивные особенности аудитории. Это позволяет не просто
                получить результат, но и понять, как воспроизвести успех в
                будущем.
              </p>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-6">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Команда
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Эксперты в области AI, маркетинга и технологий
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Илья Федоров',
                role: 'CEO',
                experience: '7 лет performance-marketing',
                avatar: '👨‍💼',
                gradient: 'from-blue-500 to-cyan-600',
                description: 'Стратегическое видение и развитие бизнеса',
              },
              {
                name: 'Мария Соколова',
                role: 'CTO',
                experience: 'ex-Mail.ru Ads, Gen-AI pipelines',
                avatar: '👩‍💻',
                gradient: 'from-purple-500 to-pink-600',
                description: 'Техническая архитектура и AI-разработка',
              },
              {
                name: 'Артём Громов',
                role: 'ML-инженер',
                experience: 'Исследователь eye-tracking',
                avatar: '👨‍🔬',
                gradient: 'from-green-500 to-emerald-600',
                description: 'Машинное обучение и поведенческая аналитика',
              },
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-2xl mb-4 text-3xl`}
                    >
                      {member.avatar}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p
                      className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-2`}
                    >
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.experience}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ценности */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Прозрачность результатов',
                description:
                  'Объясняем, почему один креатив работает лучше другого',
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                icon: '⚡',
                title: 'Экономия времени',
                description: 'Автоматизируем рутинные задачи маркетологов',
                gradient: 'from-purple-500 to-pink-600',
              },
              {
                icon: '📈',
                title: 'Рост клиента = наш рост',
                description:
                  'Успех наших клиентов — главный показатель нашей работы',
                gradient: 'from-green-500 to-emerald-600',
              },
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl mb-6 text-2xl`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Что мы предлагаем */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6">
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что мы предлагаем
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border border-orange-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    icon: '🤖',
                    title: 'Генерация креативов с помощью AI',
                    gradient: 'from-purple-500 to-pink-600',
                    description: 'Создаём уникальные рекламные материалы',
                  },
                  {
                    icon: '📊',
                    title: 'Автоматическое A/B-тестирование',
                    gradient: 'from-blue-500 to-cyan-600',
                    description: 'Оптимизируем эффективность креативов',
                  },
                  {
                    icon: '🔗',
                    title: 'Интеграция с VK Ads и Яндекс Директ',
                    gradient: 'from-green-500 to-emerald-600',
                    description: 'Работаем с популярными платформами',
                  },
                  {
                    icon: '📈',
                    title: 'Подробная аналитика и инсайты',
                    gradient: 'from-orange-500 to-red-600',
                    description: 'Понятные отчёты и рекомендации',
                  },
                ].map((feature, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 group-hover:scale-105">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <span className="text-3xl filter drop-shadow-sm">
                          {feature.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <p className="text-lg text-gray-700 font-semibold">
                    Готовы к запуску
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
