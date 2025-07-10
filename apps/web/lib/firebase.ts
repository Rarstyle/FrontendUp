'use client';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Check if config is loaded
if (!firebaseConfig.apiKey) {
  console.error('Firebase API key is missing. Check your .env.local file.');
}

// Initialize Firebase app (singleton)
const app = initializeApp(firebaseConfig);

// Only initialize auth in browser
let auth: ReturnType<typeof getAuth> | undefined;
let provider: GoogleAuthProvider | undefined;

if (typeof window !== 'undefined') {
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
  
  // Configure Google provider with additional scopes and parameters
  provider.addScope('email');
  provider.addScope('profile');
  provider.setCustomParameters({
    prompt: 'select_account',
    access_type: 'offline'
  });
  
  // Google provider configured successfully
} else {
  // Firebase auth not initialized on server side
}

export { auth, provider };

// Only initialize analytics in browser (to avoid SSR issues)
//export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
