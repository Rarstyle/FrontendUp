import {
  SparklesIcon,
  UsersIcon,
  EyeIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'О нас – NeuroAd',
  description:
    'Узнайте о нашей миссии, команде и ценностях. Мы создаем будущее digital-рекламы.',
};

const values = [
  {
    name: 'Инновации в каждой детали',
    description:
      'Мы не просто следуем трендам — мы их создаем. Наш Explainable AI — это шаг в будущее, где технологии работают на вас.',
    icon: SparklesIcon,
  },
  {
    name: 'Прозрачность и доверие',
    description:
      'Никаких "черных ящиков". Мы предоставляем понятную аналитику, чтобы вы видели, что работает и почему.',
    icon: EyeIcon,
  },
  {
    name: 'Ориентация на результат клиента',
    description:
      'Ваш успех — наш главный приоритет. Мы создаем инструменты, которые напрямую влияют на рост вашего CTR и снижение CPA.',
    icon: UsersIcon,
  },
];

const team = [
  {
    name: 'Илья Федоров',
    role: 'CEO & Founder',
    bio: '7 лет в performance-маркетинге, одержим идеей сделать AI-инструменты доступными для каждого бизнеса.',
  },
  {
    name: 'Мария Соколова',
    role: 'CTO & Co-Founder',
    bio: 'Эксперт по Gen-AI. Превращает сложные нейросети в элегантные и понятные продукты.',
  },
  {
    name: 'Артём Громов',
    role: 'Lead ML Engineer',
    bio: 'Исследователь eye-tracking и человеческого внимания. Учит наш AI понимать, что привлекает взгляд.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Будущее рекламы. Прозрачно.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Мы создаем инструменты, которые превращают &quot;черные ящики&quot;
            искусственного интеллекта в понятные и управляемые рычаги роста для
            вашего бизнеса.
          </p>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sm:text-4xl">
              Наши ценности
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Принципы, которые лежат в основе каждого нашего решения и
              каждой строчки кода.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {values.map((value) => (
              <div
                key={value.name}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <value.icon
                  className="h-12 w-12 mx-auto text-blue-600 mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.name}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sm:text-4xl">
              Наша команда
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Мы — команда энтузиастов, объединившая опыт в маркетинге,
              анализе данных и разработке сложных AI-систем.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {team.map((person) => (
              <div
                key={person.name}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center"
              >
                <h3 className="text-xl font-semibold leading-8 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-blue-600 font-semibold">
                  {person.role}
                </p>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Наша команда всегда готова помочь вам с любыми вопросами — от
              технической поддержки до стратегических консультаций.
            </p>
          </div>
          <div className="bg-white max-w-lg mx-auto p-8 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center">
            <div className="flex items-center gap-x-6 mb-4">
              <EnvelopeIcon className="h-8 w-8 text-blue-600" />
              <a
                href="mailto:shakramcash@gmail.com"
                className="text-lg text-gray-800 hover:text-blue-600"
              >
                shakramcash@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-x-6">
              <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-blue-600" />
              <a
                href="https://t.me/neuroad_help"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-800 hover:text-blue-600"
              >
                @neuroad_help
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
