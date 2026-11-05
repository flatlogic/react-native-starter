module.exports = {
  preset: '@react-native/jest-preset',
  transform: { '^.+\\.(js|jsx|mjs|ts|tsx)$': 'babel-jest' },
  testMatch: ['<rootDir>/src/**/__tests__/**/*.spec.js'],
  transformIgnorePatterns: ['node_modules/(?!((jest-)?react-native[^/]*|@react-native(-community)?|victory[^/]*|d3-[^/]+|internmap)/)'],
};
