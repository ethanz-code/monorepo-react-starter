import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginOxlint from 'eslint-plugin-oxlint';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

export default tseslint.config([
  // 全局忽略
  {
    ignores: ['**/node_modules/**', '**/dist/**', 'pnpm-lock.yaml', '*.md'],
  },
  // 主配置
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
    },
    settings: {
      react: { version: 'detect' },
    },
    extends: [js.configs.recommended, ...eslintPluginOxlint.configs['flat/react']],
    rules: {
      // ESLint 相关规则
      'no-unused-vars': 'off',
      'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
      'no-trailing-spaces': 'error',
      // React 相关
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-key': 'error',
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]);
