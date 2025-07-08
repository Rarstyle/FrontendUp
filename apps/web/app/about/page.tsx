// Static metadata for SEO
export const metadata = {
  title: "О нас – AdBrain Lab",
  description:
    "Миссия, команда и ценности AdBrain Lab – узнайте, кто стоит за платформой.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-5 text-base-900">
      <h1 className="text-3xl font-bold text-primary mb-8">О нас</h1>
      <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
      <p className="mb-8">
        Дать малому бизнесу инструмент, который за 5 минут повышает CTR рекламы
        на 20% благодаря explainable AI.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Команда</h2>
      <ul className="list-disc list-inside mb-8">
        <li>
          <strong>Илья Федоров</strong> — CEO, 7 лет в performance-маркетинге
        </li>
        <li>
          <strong>Мария Соколова</strong> — CTO, ex-Mail.ru Ads, эксперт по
          Gen-AI pipeline
        </li>
        <li>
          <strong>Артём Громов</strong> — ML-инженер, исследователь eye-tracking
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Наши ценности</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          <strong>Прозрачность результатов.</strong> Мы открыто показываем
          данные: какой креатив выиграл и почему.
        </li>
        <li>
          <strong>Экономия времени.</strong> Ценим ваше время – автоматизируем
          рутину, чтобы вы фокусировались на бизнесе.
        </li>
        <li>
          <strong>Рост клиента = наш рост.</strong> Мы растём вместе с успехом
          наших клиентов, поэтому нацелены на ваш максимальный ROI.
        </li>
      </ol>
    </div>
  );
}
