import PricingTable from '@/components/PricingTable';

export const metadata = {
  title: 'Тарифы – AdBrain Lab',
  description:
    'Тарифные планы: Start, Grow, Scale, Enterprise. 3 дня бесплатного доступа (или 10 креативов) для новых пользователей.',
};

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-5 text-gray-900">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Тарифы</h1>
      <p className="mb-4">
        Выберите план, подходящий для ваших задач. Каждый платный план включает полный функционал
        AdBrain Lab без ограничений.
      </p>
      <PricingTable />
      <p className="text-sm text-gray-900 mt-4">
        <em>Trial:</em> 3 дня или 10 креативов бесплатно (что наступит раньше).
      </p>
      <div className="mt-6">
        <a
          href="/login"
          className="bg-[#FF6B00] text-white font-medium px-4 py-2 rounded hover:opacity-90"
        >
          Начать бесплатный Trial
        </a>
      </div>
    </div>
  );
}
