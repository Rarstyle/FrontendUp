/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        gradient: {
          from: '#7C3AED',
          to: '#4F46E5',
        },
        accent: '#FF6B00',
        success: '#16A34A',
        base: {
          50: '#F9FAFB',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};
