module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier', // <-- descomenta cuando configures Prettier
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off', // <--- Desactiva la importación obligatoria de React
    'react/prop-types': 'off', // <--- Desactiva prop-types (usas TypeScript)
    // Ejemplo de reglas personalizadas:
    // 'quotes': ['error', 'single'],
    // 'semi': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
