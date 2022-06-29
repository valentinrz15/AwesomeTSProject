module.exports = {
  preset: 'react-native',
  globals: {
    window: {},
    Platform: {},
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  setupFiles: ['./jest.setup.js'],
  moduleDirectories: ['src', '.', 'node_modules'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-gesture-handler|react-native-localize|react-native-webview|react-native-skeleton-placeholder|@react-native-community/masked-view|react-native-picker-select|@react-native-picker|@react-native-community/art/lint-staged)/)',
  ],
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
};
