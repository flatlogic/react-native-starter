// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import {
  getPosts,
  getPostsLoadingError,
  getIsPostsLoading,
  getIsPostsSubLoading,
  loadPosts,
  loadNextPosts,
} from './PostsState';

import BlogView from './BlogView';

// export default 
//   compose(
//     connect(
//       state => ({
//         posts: () => getPosts(state),
//         isPostsLoading: () => getIsPostsLoading(state),
//         isPostsSubloading: () => getIsPostsSubLoading(state),
//         postsLoadingError: () => getPostsLoadingError(state),
//       }),
//       dispatch => ({
//         loadPosts: () => dispatch(loadPosts()),
//         loadNextPosts: () => dispatch(loadNextPosts()),
//       }),
//     )
//   )(BlogView);
export default connect(
  state => ({
    posts: getPosts(state),
    isPostsLoading: getIsPostsLoading(state),
    isPostsSubloading: getIsPostsSubLoading(state),
    postsLoadingError: getPostsLoadingError(state),
  }),
  {
    loadPosts,
    loadNextPosts,
  },
)(BlogView);