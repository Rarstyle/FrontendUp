/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/layout.tsx',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './hooks/**/*.{js,ts,jsx,tsx}',
      ],
      
    theme: {
      extend: {
        colors: {
          primary: '#1D4ED8',
          'gradient-from': '#7C3AED',
          'gradient-to': '#4F46E5',
          accent: '#FF6B00',
          success: '#16A34A',
          'base-50': '#F9FAFB',
          'base-900': '#111827',
        },
      },
    },
    plugins: [
      require('tailwindcss-animate'),
    ],
  };
  