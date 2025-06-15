import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      indent: ['off'],
      semi: ['warn', 'always'],
      'react-refresh/only-export-components': ['off'],
      '@stylistic/indent': ['warn', 2],
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          singleQuote: true,
          useTabs: false,
          tabWidth: 2,
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
);
