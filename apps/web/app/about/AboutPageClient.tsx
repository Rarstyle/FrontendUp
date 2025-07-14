'use client';

export default function AboutPageClient() {
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
      {/* ...rest of the AboutPage JSX... */}
    </div>
  );
}
