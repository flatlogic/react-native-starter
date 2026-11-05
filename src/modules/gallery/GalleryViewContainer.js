import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GalleryScreen from './GalleryView';
import { loadImages, refreshImages } from './GalleryState';

function GalleryViewContainer(props) {
  useEffect(() => {
    props.loadImages();
  }, [props.loadImages]);

  return <GalleryScreen {...props} />;
}

export default connect(
  state => ({
    isLoading: state.gallery.isLoading,
    images: state.gallery.images,
  }),
  dispatch => ({
    loadImages: () => dispatch(loadImages()),
    refreshImages: () => dispatch(refreshImages()),
  }),
)(GalleryViewContainer);
