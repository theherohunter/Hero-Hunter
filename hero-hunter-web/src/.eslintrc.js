module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'simple-import-sort'],
  ignorePatterns: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          accessors: 'no-public',
          constructors: 'off',
          methods: 'no-public',
          properties: 'off',
          parameterProperties: 'off',
        },
      },
    ],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    'sort-imports': 'off',
    'import/order': 'off',

    'react/prop-types': 'off',
    'react/jsx-fragments': ['error', 'syntax'],
    'react-hooks/rules-of-hooks': 'error',

    semi: 'off',
    'newline-after-var': 'error',
  },
};
