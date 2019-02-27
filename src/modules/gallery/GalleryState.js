const stubImages = [
  {
    id: 0,
    link:
      'https://s-media-cache-ak0.pinimg.com/736x/6d/68/e5/6d68e55c58127d5f8271dc40449e037d--baddie-natural-makeup-pretty-natural-makeup.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 1,
    link:
      'https://s-media-cache-ak0.pinimg.com/736x/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 2,
    link:
      'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 3,
    link:
      'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 4,
    link:
      'https://s-media-cache-ak0.pinimg.com/736x/6d/68/e5/6d68e55c58127d5f8271dc40449e037d--baddie-natural-makeup-pretty-natural-makeup.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 5,
    link:
      'https://s-media-cache-ak0.pinimg.com/736x/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 6,
    link:
      'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 7,
    link:
      'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 8,
    link:
      'https://s-media-cache-ak0.pinimg.com/736x/6d/68/e5/6d68e55c58127d5f8271dc40449e037d--baddie-natural-makeup-pretty-natural-makeup.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 9,
    link:
      'https://s-media-cache-ak0.pinimg.com/736x/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 10,
    link:
      'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
    description: 'Test image in the grid',
  },
  {
    id: 11,
    link:
      'https://pbs.twimg.com/profile_images/1642784826/pretty-girl-jessica-alba_422_8785.jpg',
    description: 'Test image in the grid',
  },
];

// Initial state
const initialState = {
  isLoading: false,
  images: [],
};

// Actions
const START_IMAGES_LOADING = 'GalleryState/START_LOADING';
const IMAGES_LOADED = 'GalleryState/IMAGES_LOADED';
const CLEAR_IMAGES = 'GalleryState/CLEAR_IMAGES';

// Action creators
function startImagesLoading() {
  return { type: START_IMAGES_LOADING };
}

function imagesLoaded(images) {
  return {
    type: IMAGES_LOADED,
    images,
  };
}

function clearImages() {
  return { type: CLEAR_IMAGES };
}

export function loadImages() {
  return dispatch => {
    dispatch(startImagesLoading());
    // Connect to the API here
    dispatch(imagesLoaded(stubImages));
  };
}

export function refreshImages() {
  return dispatch => {
    dispatch(startImagesLoading());
    dispatch(clearImages());
    dispatch(imagesLoaded(stubImages));
  };
}

// Reducer
export default function GalleryStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case START_IMAGES_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case IMAGES_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        images: action.images,
      });
    case CLEAR_IMAGES:
      return Object.assign({}, state, {
        images: [],
      });
    default:
      return state;
  }
}
