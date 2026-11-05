module.exports = {
  preset: '@react-native/jest-preset',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  resolver: 'react-native-reanimated/jest/resolver',
  transform: { '^.+\\.(js|jsx|mjs|ts|tsx)$': 'babel-jest' },
  testMatch: ['<rootDir>/src/**/__tests__/**/*.spec.js'],
  transformIgnorePatterns: ['node_modules/(?!((jest-)?react-native[^/]*|@react-native[^/]*|@react-navigation|react-redux|redux[^/]*|victory[^/]*|d3-[^/]+|internmap)/)'],
};
