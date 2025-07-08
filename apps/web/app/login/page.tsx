'use client';

import { FormEvent, useState } from 'react';
import { auth, provider } from '@/lib/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Вход – AdBrain Lab',
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // Try sign in with email/password
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/dashboard');
    } catch (err: any) {
      if (err.code === 'auth/user-not-found') {
        // If no user, create a new one (auto sign-up)
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          router.replace('/dashboard');
        } catch (err2: any) {
          setError('Ошибка при регистрации: ' + err2.message);
        }
      } else if (err.code === 'auth/wrong-password') {
        setError('Неверный пароль. Попробуйте ещё раз.');
      } else {
        setError('Ошибка: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, provider);
      router.replace('/dashboard');
    } catch (err: any) {
      setError('Ошибка входа через Google: ' + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-5">
      <h1 className="text-2xl font-bold text-center mb-8">Войти в AdBrain Lab</h1>
      <form onSubmit={handleEmailLogin} className="bg-base-50 p-6 rounded shadow-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block text-base-900 font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-base-900 font-medium mb-1">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="text-red-600 mb-4 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-accent text-white py-2 px-4 rounded font-medium hover:opacity-90 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Вход...' : 'Войти'}
        </button>
      </form>
      <div className="text-center my-4 text-base-900">или</div>
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center bg-white border border-gray-300 text-base-900 py-2 px-4 rounded hover:bg-gray-50"
      >
        <svg className="h-5 w-5 mr-2" viewBox="0 0 48 48">
          <path
            d="M44.5 20H24v8.5h11.8C34.7 34.5 30 38 24 38c-7 0-13-6-13-13s6-13 13-13c3.3 0 6.3 1.2 8.5 3.3l6-6C34.7 5.5 29.7 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.3-.1-2.7-.5-4z"
            fill="#fbbd00"
          />
          <path
            d="M6.3 14.7l6.6 4.8C15 15 19.2 12 24 12c3.3 0 6.3 1.2 8.5 3.3l6-6C34.7 5.5 29.7 3 24 3 16 3 8.9 7.6 6.3 14.7z"
            fill="#ff3333"
          />
          <path
            d="M24 45c5.5 0 10.5-2.1 14.2-5.5l-6.6-5.5C29.8 35.7 27 37 24 37c-6 0-11.1-4-12.8-9.6l-6.6 5C8.7 41.8 15.8 45 24 45z"
            fill="#48a141"
          />
          <path
            d="M44.5 20H24v8.5h11.8c-1.1 3.3-4.2 5.5-7.8 5.5-2.4 0-4.5-1-6-2.5l-6.6 5C17.8 40.4 20.7 42 24 42c8.5 0 15.8-7 15.8-15.5 0-1.1-.1-2.1-.3-3.1z"
            fill="#3b78e7"
          />
        </svg>
        Войти через Google
      </button>
    </div>
  );
}
