import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Autocomplete from '../Autocomplete';
import Dropdown from '../Dropdown';

test('autocomplete renders its input inside the maintained dropdown button', () => {
  const view = render(<Autocomplete items={['Alpha', 'Beta']} onSelect={() => {}} />);
  expect(view.getByPlaceholderText('Place your text')).toBeTruthy();
});

test('dropdown opens actual menu rows and preserves the legacy index/item callback', () => {
  const onSelect = jest.fn();
  const view = render(<Dropdown items={['Alpha', 'Beta']} placeholder="Choose" onSelect={onSelect} />);
  // Native host measurement is mocked by the official RN Jest preset.
  for (const node of view.UNSAFE_root.findAll(node => typeof node.instance?.measure?.mockImplementation === 'function')) {
    node.instance.measure.mockImplementation(callback => callback(0, 0, 200, 40, 10, 10));
  }
  fireEvent.press(view.getByText('Choose'));
  fireEvent.press(view.getByText('Beta'));
  expect(onSelect).toHaveBeenCalledWith(1, 'Beta');
});

test('autocomplete searches real menu data and displays the selected item', () => {
  const onSelect = jest.fn();
  const view = render(<Autocomplete items={['Alpha', 'Beta']} onSelect={onSelect} />);
  expect(view.getByPlaceholderText('Place your text').props.editable).toBe(false);
  for (const node of view.UNSAFE_root.findAll(node => typeof node.instance?.measure?.mockImplementation === 'function')) {
    node.instance.measure.mockImplementation(callback => callback(0, 0, 200, 40, 10, 10));
  }
  fireEvent.press(view.getByPlaceholderText('Place your text'));
  fireEvent.changeText(view.getByPlaceholderText('Search'), 'bet');
  expect(view.queryByText('Alpha')).toBeNull();
  fireEvent.press(view.getByText('Beta'));
  expect(onSelect).toHaveBeenCalledWith(1, 'Beta');
  expect(view.getByDisplayValue('Beta')).toBeTruthy();
});

test('the real Home screen toggles its existing license control in both directions', () => {
  const HomeScreen = require('../../modules/home/HomeViewContainer').default;
  const view = render(<HomeScreen />);
  expect(view.getByText('$99')).toBeTruthy();
  fireEvent.press(view.getByText('Single Application License'));
  expect(view.getByText('$499')).toBeTruthy();
  fireEvent.press(view.getByText('Multiple Applications License'));
  expect(view.getByText('$99')).toBeTruthy();
});
