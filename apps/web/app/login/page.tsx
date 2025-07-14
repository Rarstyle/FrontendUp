import React, { Suspense } from 'react';
import LoginPageClient from './LoginPageClient';

export const dynamic = 'force-dynamic';
// Static metadata for SEO
export const metadata = {
  title: 'Войти или зарегистрироваться – NeuroAd',
  description:
    'Войдите в свой аккаунт NeuroAd или создайте новый. Начните использовать AI для оптимизации рекламных креативов.',
};

export default function LoginPage() {
  return (
    <Suspense>
      <LoginPageClient />
    </Suspense>
  );
}
