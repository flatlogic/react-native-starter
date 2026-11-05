import React from 'react';
import { Image, Modal } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import ImageLightbox from '../ImageLightbox';

test('gallery opens the actual zoom component inside its modal gesture root and closes both ways', () => {
  const view = render(<ImageLightbox><Image source={{ uri: 'https://example.test/gallery.png' }} /></ImageLightbox>);
  expect(view.queryByRole('button', { name: 'Close image' })).toBeNull();
  fireEvent.press(view.getByLabelText('Open image'));
  expect(view.getByRole('button', { name: 'Close image' })).toBeTruthy();
  const modal = view.UNSAFE_getByType(Modal);
  expect(modal.findByType(GestureHandlerRootView)).toBeTruthy();
  const zoom = view.UNSAFE_getByType(ImageZoom);
  expect(zoom.props.uri).toBe('https://example.test/gallery.png');
  expect(zoom.props.maxScale).toBe(5);
  expect(zoom.props.isDoubleTapEnabled).toBe(true);
  fireEvent.press(view.getByRole('button', { name: 'Close image' }));
  expect(view.queryByRole('button', { name: 'Close image' })).toBeNull();
  fireEvent.press(view.getByLabelText('Open image'));
  fireEvent(view.UNSAFE_getByType(Modal), 'requestClose');
  expect(view.queryByRole('button', { name: 'Close image' })).toBeNull();
});
