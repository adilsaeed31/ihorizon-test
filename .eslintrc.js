module.exports = {
  root: true,
  extends: [
    '@react-native',
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    'no-extra-semi': 'off',
  },
}
