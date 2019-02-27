import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import GalleryScreen from './GalleryView';
import { loadImages, refreshImages } from './GalleryState';

export default compose(
  connect(
    state => ({
      isLoading: state.gallery.isLoading,
      images: state.gallery.images,
    }),
    dispatch => ({
      loadImages: () => dispatch(loadImages()),
      refreshImages: () => dispatch(refreshImages()),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadImages();
    },
  }),
)(GalleryScreen);
