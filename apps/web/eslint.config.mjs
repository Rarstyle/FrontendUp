import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Global settings
  {
    ignores: ['node_modules/', '.next/', 'dist/', 'build/', 'out/'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  // Add Prettier config to avoid conflicts
  ...compat.extends('prettier'),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      // Add any custom rules here
      'react/react-in-jsx-scope': 'off',
      // Disable unescaped entities rule to allow quotes in JSX
      'react/no-unescaped-entities': 'off',
      // Warning instead of error for unused vars
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
];

export default eslintConfig;
