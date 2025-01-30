import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import tailwindcss from 'eslint-plugin-tailwindcss'
import prettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      tailwindcss: tailwindcss,
      prettier: prettier,
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'prettier/prettier': ['error', { singleQuote: true }],
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-require-imports': [
        'error',
        {
          allow: ['tailwind.config.ts'],
        },
      ],
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest', // nastavuje verzi ECMAScript
      },
    },
  },
]

export default eslintConfig
