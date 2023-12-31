module.exports = {
  presets: [
    ['@babel/preset-env', {loose: true}],
    'module:@react-native/babel-preset',
  ],
  plugins: [
    'nativewind/babel',
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./app/'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@App': './app',
          '@Api': './app/services',
          '@Assets': './app/assets',
          '@Components': './app/components',
          '@Features': './app/features',
          '@Slicers': './app/slicers',
          '@Navigations': './app/navigations',
          '@Store': './app/store',
        },
      },
    ],
  ],
}
