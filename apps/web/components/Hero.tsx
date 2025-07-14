import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-hero-gradient noise-overlay text-white py-20 px-5 text-center animate-in fade-in duration-700">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Повышаем CTR рекламы на 20% всего за 5 минут
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Генерация креативов и авто-A/B-тестирование для VK Ads и Яндекс Директ
          с объяснимым AI
        </p>
        <Link
          href="/pricing"
          className="bg-accent text-white text-lg font-medium px-6 py-3 rounded hover:opacity-90"
        >
          Смотреть тарифы
        </Link>
      </div>
    </section>
  );
}
