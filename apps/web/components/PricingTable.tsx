export default function PricingTable() {
  const plans = [
    {
      name: "Start",
      creatives: 20,
      price: "2 900 ₽",
      target: "ИП / самозанятые",
    },
    { name: "Grow", creatives: 50, price: "4 990 ₽", target: "SMM-студии" },
    { name: "Scale", creatives: 100, price: "7 900 ₽", target: "Агентства" },
    {
      name: "Enterprise",
      creatives: "Индивидуально",
      price: "от 40 000 ₽",
      target: "SLA 24/7",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-base-900">
        <thead className="bg-base-50">
          <tr>
            <th className="px-4 py-2 text-left">План</th>
            <th className="px-4 py-2 text-left">Креативов / мес</th>
            <th className="px-4 py-2 text-left">Цена</th>
            <th className="px-4 py-2 text-left">Для кого</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.name} className="border-t border-gray-200">
              <td className="px-4 py-2 font-medium">{plan.name}</td>
              <td className="px-4 py-2">{plan.creatives}</td>
              <td className="px-4 py-2">{plan.price}</td>
              <td className="px-4 py-2">{plan.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
