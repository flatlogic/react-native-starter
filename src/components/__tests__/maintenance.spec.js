import React from 'react';
import { Text, Pressable } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import withState from '../../utils/withState';
import galleryReducer, { loadImages, refreshImages } from '../../modules/gallery/GalleryState';
import AreaExample from '../../modules/charts/chartsCollection/charts/area-chart/with-line';

test('hook state adapter supports functional updates used by screen controls', () => {
  const Screen = ({ value, setValue }) => <Pressable onPress={() => setValue(current => current + 1)}><Text>{String(value)}</Text></Pressable>;
  const Stateful = withState('value', 'setValue', props => props.start)(Screen);
  const view = render(<Stateful start={2} />);
  fireEvent.press(view.getByText('2'));
  expect(view.getByText('3')).toBeTruthy();
});

test('Redux thunk loading and gallery refresh preserve all sample records', () => {
  let state = galleryReducer(undefined, {});
  const dispatch = action => { state = galleryReducer(state, action); };
  loadImages()(dispatch);
  expect(state.images).toHaveLength(12);
  const ids = state.images.map(image => image.id);
  refreshImages()(dispatch);
  expect(state.isLoading).toBe(false);
  expect(state.images.map(image => image.id)).toEqual(ids);
});

test('maintained D3/SVG libraries render an actual chart path after layout', () => {
  const view = render(<AreaExample />);
  const layoutNode = view.UNSAFE_root.findAll(node => typeof node.props.onLayout === 'function')[0];
  fireEvent(layoutNode, 'layout', { nativeEvent: { layout: { width: 320, height: 200 } } });
  expect(JSON.stringify(view.toJSON())).toMatch(/"d":"M/);
});

test('all existing SVG and Victory chart examples render paths with current D3', () => {
  const ChartsScreen = require('../../modules/charts/ChartsView').default;
  const { loadChartsData } = require('../../modules/charts/ChartsState');
  let data;
  loadChartsData()(action => { if (action.data) data = action.data; }, () => ({ charts: { data: null } }));
  const view = render(<ChartsScreen data={data} isLoading={false} />);
  const handlers = view.UNSAFE_root.findAll(node => typeof node.props.onLayout === 'function');
  for (const node of handlers) {
    fireEvent(node, 'layout', { nativeEvent: { layout: { width: 320, height: 200 } } });
  }
  const output = JSON.stringify(view.toJSON());
  expect((output.match(/"d":"M/g) || []).length).toBeGreaterThan(30);
  expect(output).not.toMatch(/"d":"[^"]*NaN/);
});
