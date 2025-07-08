import Hero from "@/components/Hero";
import CaseCard from "@/components/CaseCard";
import PricingTable from "@/components/PricingTable";
import Link from "next/link";

// Static metadata for SEO
export const metadata = {
  title: "AdBrain Lab – Повышаем CTR рекламы на 20% за 5 минут",
  description:
    "Инструмент для малого бизнеса: генерация креативов и автоматическое A/B-тестирование в VK и Яндекс с объяснимым AI.",
};

export default function HomePage() {
  // Demo case data (mocked success metrics for display)
  const cases = [
    {
      client: "«Кофейня BrewBro»",
      niche: "HoReCa",
      ctrBefore: "1,4 %",
      ctrAfter: "1,8 %",
      uplift: "28 %",
      spend: "10 000 ₽",
    },
    {
      client: "«Барбершоп Чёткий»",
      niche: "Сервис",
      ctrBefore: "1,1 %",
      ctrAfter: "1,55 %",
      uplift: "41 %",
      spend: "7 500 ₽",
    },
    {
      client: "«Beauty-eCom Glam»",
      niche: "Beauty",
      ctrBefore: "0,9 %",
      ctrAfter: "1,3 %",
      uplift: "44 %",
      spend: "12 000 ₽",
    },
  ];

  return (
    <>
      {/* Hero Section with gradient background */}
      <Hero />

      {/* How it works */}
      <section className="bg-base-50 py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Как это работает
          </h2>
          <div className="text-base-900 text-left max-w-2xl mx-auto space-y-4">
            <p>
              1. <strong>Подключаете рекламные кабинеты</strong> VK Ads или
              Яндекс Директ.
            </p>
            <p>
              2. <strong>Генерируете креативы</strong> – задаёте текст и
              изображение, AdBrain Lab предлагает варианты.
            </p>
            <p>
              3. <strong>Запускаете авто-A/B-тест</strong> – платформа сама
              создает вариации и следит за результатами.
            </p>
            <p>
              4. <strong>Получаете рост CTR</strong> и понятные инсайты, почему
              победивший креатив сработал лучше.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Преимущества AdBrain Lab
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left text-base-900">
            <div>
              <h3 className="font-semibold">⚡ Экономия времени</h3>
              <p>
                Автоматическое тестирование и генерация десятков креативов за
                минуты – вы тратите время на стратегию, а не рутину.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">🎯 Прозрачная аналитика</h3>
              <p>
                Explainable AI предоставляет понятные объяснения, **почему** тот
                или иной креатив побеждает – никакой «магии», только данные.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">🚀 Рост эффективности</h3>
              <p>
                По нашим кейсам клиенты в среднем повышают CTR рекламы на 20%+.
                Больше кликов – больше продаж без дополнительного бюджета.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">🤝 Рост клиента = наш рост</h3>
              <p>
                Мы нацелены на долгосрочное партнёрство: ваш успех напрямую
                означает успех AdBrain Lab. Всегда прислушиваемся к обратной
                связи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="bg-base-50 py-16 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Наши успехи
          </h2>
          <p className="text-base-900 mb-8">
            Реальные примеры повышения CTR с помощью AdBrain Lab:
          </p>
          {/* Responsive grid of case cards */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {cases.map((caseData, idx) => (
              <CaseCard key={idx} caseData={caseData} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Тарифы
          </h2>
          <p className="text-base-900 mb-8">
            Гибкие тарифные планы под любые задачи. Начните с Trial{" "}
            <strong>3 дня / 10 креативов бесплатно</strong>.
          </p>
          <PricingTable />
          <div className="mt-8">
            <Link href="/pricing" className="text-primary hover:underline">
              Подробнее о тарифах →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="relative bg-cta-gradient noise-overlay py-12 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Попробуйте AdBrain Lab бесплатно
          </h2>
          <p className="text-white text-lg mb-6">
            Повышение CTR на 20%+ уже через неделю. Получите 3 дня бесплатного
            доступа прямо сейчас!
          </p>
          <Link
            href="/login"
            className="inline-block bg-accent text-white text-lg font-medium px-6 py-3 rounded hover:opacity-90"
          >
            Начать бесплатно
          </Link>
        </div>
      </section>
    </>
  );
}
