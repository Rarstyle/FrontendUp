export const metadata = {
  title: 'Политика конфиденциальности – NeuroAd',
  description: 'Политика конфиденциальности NeuroAd.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-5">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Политика конфиденциальности
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Последнее обновление: 14 июля 2025 г.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. Сбор информации
        </h2>
        <p className="text-gray-600 mb-6">
          Мы собираем информацию, которую вы предоставляете нам при регистрации,
          использовании наших услуг и взаимодействии с нашим сайтом.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          2. Использование информации
        </h2>
        <p className="text-gray-600 mb-6">
          Собранная информация используется для предоставления и улучшения наших
          услуг, связи с вами и обеспечения безопасности.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Защита информации
        </h2>
        <p className="text-gray-600 mb-6">
          Мы принимаем соответствующие меры для защиты вашей личной информации
          от несанкционированного доступа, изменения, раскрытия или уничтожения.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Передача данных
        </h2>
        <p className="text-gray-600 mb-6">
          Мы не продаем, не обмениваем и не передаем вашу личную информацию
          третьим лицам без вашего согласия, за исключением случаев,
          предусмотренных законом.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Контакты</h2>
        <p className="text-gray-600">
          Если у вас есть вопросы по поводу данной политики конфиденциальности,
          свяжитесь с нами по адресу: privacy@neuroad.com
        </p>
      </div>
    </div>
  );
}
