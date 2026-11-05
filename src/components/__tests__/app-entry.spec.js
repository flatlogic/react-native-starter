// App, store, providers, navigation and downstream screen imports remain real.
// Only native host storage/localization/insets/keyboard/RPC use boundary mocks.
import React from 'react';
import { renderAsync, waitFor } from '@testing-library/react-native';
jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest'));
jest.mock('react-native-keyboard-controller', () => require('react-native-keyboard-controller/jest'));
jest.mock('react-native-maps/src/specs/NativeAirMapsModule', () => ({ __esModule: true, default: {} }));
jest.mock('react-native-localize', () => require('react-native-localize/mock/jest'));
jest.mock('react-native-safe-area-context', () => require('react-native-safe-area-context/jest/mock').default);

test('the actual App provider and navigation entry hydrates and renders Home', async () => {
  const App = require('../../../App').default;
  const view = await renderAsync(<App />);
  await waitFor(() => expect(view.getAllByText('React Native Starter').length).toBeGreaterThan(0), { timeout: 5000 });
  expect(require('../../redux/store').persistor.getState().bootstrapped).toBe(true);
}, 30000);

afterAll(async () => {
  const { persistor } = require('../../redux/store');
  persistor.pause();
  await persistor.flush();
});
