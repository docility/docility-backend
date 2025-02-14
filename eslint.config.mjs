import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  configPrettier, // Disable conflicting rules between ESLint & Prettier
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error', // Ensure prettier rules are applied
    },
  },
]
