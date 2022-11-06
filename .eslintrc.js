module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.jx', '.jsx']
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'no-undef': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'react/no-array-index-key': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
  },
}
