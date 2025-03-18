import js from '@eslint/js';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import { globals } from 'globals';

export default [
  js.configs.recommended,
  {
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];