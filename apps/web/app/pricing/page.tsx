import PricingTable from "@/components/PricingTable";

export const metadata = {
  title: "Тарифы – AdBrain Lab",
  description:
    "Тарифные планы: Start, Grow, Scale, Enterprise. 3-дневный бесплатный пробный период.",
};

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-5 text-base-900">
      <h1 className="text-3xl font-bold text-primary mb-6">Тарифы</h1>
      <p className="mb-4">
        Выберите план, подходящий для ваших задач. Каждый платный план включает
        полный функционал AdBrain Lab.
      </p>
      <PricingTable />
      <p className="text-sm text-base-900 mt-4">
        <em>Trial:</em> 3 дня или 10 креативов бесплатно (что наступит раньше).
      </p>
      <div className="mt-6">
        <a
          href="/login"
          className="bg-accent text-white font-medium px-4 py-2 rounded hover:opacity-90"
        >
          Начать бесплатный Trial
        </a>
      </div>
    </div>
  );
}
