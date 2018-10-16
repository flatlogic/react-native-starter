import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import GalleryScreen from '../screens/GalleryScreen';
import {
  loadImages,
  refreshImages,
} from '../reducers/gallery';

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
