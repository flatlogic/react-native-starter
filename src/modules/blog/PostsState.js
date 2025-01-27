import config from './config';

const START_POSTS_LOADING = 'PostsState/START_POSTS_LOADING';
const POSTS_LOADING_SUCCESS = 'PostsState/POSTS_LOADING_SUCCESS';
const POSTS_LOADING_FAILURE = 'PostsState/POSTS_LOADING_FAILURE';
const START_POSTS_SUBLOADING = 'PostsState/START_POSTS_SUBLOADING';
const POSTS_SUBLOADING_SUCCESS = 'PostsState/POSTS_SUBLOADING_SUCCESS';
const POSTS_SUBLOADING_FAILURE = 'PostsState/POSTS_SUBLOADING_FAILURE';

export const initialState = {
  posts: [],
  isPostsLoading: false,
  isPostsSubLoading: false,
  postsLoadingError: null,
};

const POSTS_PER_PAGE = 10;

export const getPosts = (state) => state.posts.posts;
export const getIsPostsLoading = (state) => state.posts.isPostsLoading;
export const getIsPostsSubLoading = (state) =>
  state.posts.isPostsSubLoading;
export const getPostsLoadingError = (state) =>
  state.posts.postsLoadingError;

const startPostsLoading = () => ({
  type: START_POSTS_LOADING,
});

const startPostsSubloading = () => ({
  type: START_POSTS_SUBLOADING,
});

const endPostsLoading = (
  posts,
  addToTheBottom = false,
) => ({
  type: POSTS_LOADING_SUCCESS,
  payload: {
    posts,
    addToTheBottom,
  },
});

// TODO: Better to make error an object
const failPostsLoading = (errorMessage) => ({
  type: POSTS_LOADING_FAILURE,
  payload: errorMessage || 'Unknown error',
});

export const loadPosts = () => async (dispatch, getState) => {
  const state = getState();

  if (getIsPostsLoading(state)) {
    return;
  }

  dispatch(startPostsLoading());

  try {
    // TODO: Create a service
    const rawResponse = await fetch(
      `${config.apiEndpoint}/wp/v2/posts?per_page=${POSTS_PER_PAGE}&page=${1}`,
    );

    const parsedResponse = await rawResponse.json();

    if (parsedResponse) {
      dispatch(endPostsLoading(parsedResponse, false));
    } else {
      throw parsedResponse;
    }
  } catch (e) {
    console.log(e);
    dispatch(failPostsLoading(e.message));
  }
};

export const loadNextPosts = () => async (dispatch, getState) => {
  const state = getState();

  if (getIsPostsSubLoading(state)) {
    return;
  }

  const currentPosts = getPosts(state);
  const currentPage = currentPosts.length / POSTS_PER_PAGE;

  dispatch(startPostsSubloading());

  try {
    // TODO: Create a service
    const rawResponse = await fetch(
      `${
        config.apiEndpoint
      }/wp/v2/posts?per_page=${POSTS_PER_PAGE}&page=${currentPage + 1}`,
    );

    const parsedResponse = await rawResponse.json();

    if (parsedResponse) {
      dispatch(endPostsLoading(parsedResponse, true));
    } else {
      throw parsedResponse;
    }
  } catch (e) {
    dispatch(failPostsLoading(e.message));
  }
};

export default function AppStateReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case START_POSTS_LOADING:
      return {
        ...state,
        isPostsLoading: true,
        postsLoadingError: null,
      };
    case START_POSTS_SUBLOADING:
      return {
        ...state,
        isPostsSubLoading: true,
        postsLoadingError: null,
      };
    case POSTS_LOADING_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        isPostsSubLoading: false,
        posts: action.payload.addToTheBottom
          ? [...state.posts, ...action.payload.posts]
          : action.payload.posts,
      };
    case POSTS_LOADING_FAILURE:
      return {
        ...state,
        isPostsLoading: false,
        isPostsSubLoading: false,
        postsLoadingError: action.payload,
      };
    default:
      return state;
  }
}
