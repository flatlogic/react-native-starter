import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
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

test('the existing Paper checkbox still toggles without the unused community native module', () => {
  const Checkbox = require('../Checkbox').default;
  const Control = () => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(value => !value)} />;
  };
  const view = render(<Control />);
  expect(view.getByRole('checkbox')).not.toBeChecked();
  fireEvent.press(view.getByRole('checkbox'));
  expect(view.getByRole('checkbox')).toBeChecked();
  fireEvent.press(view.getByRole('checkbox'));
  expect(view.getByRole('checkbox')).not.toBeChecked();
});


test('camera roll modal retains Cancel, Send and selected image mapping with the native header', () => {
  const CustomActions = require('../../modules/chat/messages/CustomActions').default;
  const { SafeAreaProvider } = require('react-native-safe-area-context');
  const onSend = jest.fn();
  const metrics = { frame: { x: 0, y: 0, width: 320, height: 640 }, insets: { top: 0, left: 0, right: 0, bottom: 0 } };
  const view = render(<SafeAreaProvider initialMetrics={metrics}><CustomActions onSend={onSend} /></SafeAreaProvider>);
  const actions = view.UNSAFE_getByType(CustomActions).instance;
  act(() => { actions.selectImages([{ uri: 'https://example.test/selected.png' }]); actions.setModalVisible(true); });
  fireEvent.press(view.getByRole('button', { name: 'Send' }));
  expect(onSend).toHaveBeenCalledWith([{ image: 'https://example.test/selected.png' }]);
  expect(actions.getImages()).toEqual([]);
  act(() => actions.setModalVisible(true));
  fireEvent.press(view.getByRole('button', { name: 'Cancel' }));
  expect(onSend).toHaveBeenCalledTimes(1);
});
