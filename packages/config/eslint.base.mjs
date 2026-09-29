import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [js.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/*.{ts,tsx,mts,cts}'],
  languageOptions: { globals: { process: 'readonly' }, parserOptions: { ecmaVersion: 'latest', sourceType: 'module' } },
  rules: { 'no-console': 'error' }
}];
