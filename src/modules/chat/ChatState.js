const messagesBackend = {
  0: [
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Sup man?',
      createdAt: new Date(Date.UTC(2016, 8, 30, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'Alex',
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Blah-blah-blah...',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Developer',
      },
      sent: true,
      received: true,
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Yo!',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'Alex',
      },
    },
  ],
  1: [
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Yes, and I use Gifted Chat!',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Developer',
      },
      sent: true,
      received: true,
      location: {
        latitude: 48.864601,
        longitude: 2.398704,
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Are you building a chat app?',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
    },
  ],
  2: [
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Yes, and I use Gifted Chat!',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Developer',
      },
      sent: true,
      received: true,
      location: {
        latitude: 48.864601,
        longitude: 2.398704,
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Are you building a chat app?',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
    },
  ],
  3: [
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Yes, and I use Gifted Chat!',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Developer',
      },
      sent: true,
      received: true,
      location: {
        latitude: 48.864601,
        longitude: 2.398704,
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: 'Are you building a chat app?',
      createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
      },
    },
  ],
};

// Initial state
const initialState = {
  messagesList: [],
  messages: {},
  messagesListLoading: false,
};

// Actions
const MESSAGES_LIST_START_LOADING = 'ChatState/MESSAGES_LIST_START_LOADING';
const MESSAGES_LIST_LOADED = 'ChatState/MESSAGES_LIST_LOADED';
const MESSAGES_LOADED = 'ChatState/MESSAGES_LOADED';
const MESSAGE_SENT = 'ChatState/MESSAGE_SENT';

// Action creators
function startMessagesListLoading() {
  return {
    type: MESSAGES_LIST_START_LOADING,
  };
}

function loadedMessagesList(messagesList) {
  return {
    type: MESSAGES_LIST_LOADED,
    messagesList,
  };
}

export function loadMessagesList() {
  return dispatch => {
    dispatch(startMessagesListLoading());
    // TODO: Load messages list here
    const messagesList = [
      {
        id: 11,
        userName: 'Jassie Evette',
        userAvatar:
          'https://reactnativestarter.com/demo/images/pexels-photo-266046.jpg',
        lastMessage: 'Contact Page - Design inspiration',
        online: true,
        time: '12:12 AM',
      },
      {
        id: 1,
        userName: 'Viddar Josseline',
        userAvatar:
          'https://reactnativestarter.com/demo/images/pexels-photo-179909.jpg',
        lastMessage: 'Check out this latest portfolio',
        online: false,
        time: '9:14 AM',
      },
      {
        id: 2,
        userName: 'Xavier Clair',
        userAvatar:
          'https://reactnativestarter.com/demo/images/pexels-photo-167854.jpg',
        lastMessage: 'Thank you for your business!',
        online: true,
        time: '11:23 PM',
      },
      {
        id: 3,
        userName: 'Lorreta Wisdom',
        userAvatar:
          'https://reactnativestarter.com/demo/images/pexels-photo-108061.jpg',
        lastMessage: 'Hey! Have you heard anyting about that?',
        online: true,
        time: '1:55 PM',
      },
      {
        id: 4,
        userName: 'Subillie Shirilley',
        userAvatar:
          'https://reactnativestarter.com/demo/images/pexels-photo-69212.jpg',
        lastMessage: "Here's your invoice number",
        online: false,
        time: '10:03 PM',
      },
      {
        id: 5,
        userName: 'Elisabeth Nevio',
        userAvatar:
          'https://reactnativestarter.com/demo/images/pexels-photo-69212.jpg',
        lastMessage: 'Check out this awesome photo I made',
        online: false,
        time: '3:13 PM',
      },
      {
        id: 6,
        userName: 'Maxwell Laurence',
        userAvatar:
          'https://reactnativestarter.com/demo/images/pexels-photo-69212.jpg',
        lastMessage: "Let's try something different this time",
        online: true,
        time: '8:11 PM',
      },
    ];

    setTimeout(() => {
      dispatch(loadedMessagesList(messagesList));
    }, 1000);
  };
}

function loadedMessages(userId, messages) {
  return {
    type: MESSAGES_LOADED,
    userId,
    messages,
  };
}

function newMessageSent(userId, message) {
  return {
    type: MESSAGE_SENT,
    userId,
    message,
  };
}

export function loadMessages(userId) {
  return dispatch => {
    dispatch(loadedMessages(userId, messagesBackend[userId]));
  };
}

export function sendMessage(userId, message) {
  return dispatch => {
    // Send message here
    dispatch(newMessageSent(userId, message));
  };
}

// Reducer
export default function ChatStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case MESSAGES_LIST_START_LOADING:
      return Object.assign({}, state, {
        messagesListLoading: true,
      });
    case MESSAGES_LIST_LOADED:
      return Object.assign({}, state, {
        messagesListLoading: false,
        messagesList: action.messagesList,
      });
    case MESSAGES_LOADED:
      return Object.assign({}, state, {
        messages: {
          ...state.messages,
          [action.userId]: action.messages,
        },
      });
    case MESSAGE_SENT:
      return Object.assign({}, state, {
        messages: {
          ...state.messages,
          [action.userId]: [
            ...state.messages[action.userId],
            {
              _id: Math.round(Math.random() * 1000000),
              text: action.message,
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'Developer',
              },
              sent: true,
              received: true,
            },
          ],
        },
      });
    default:
      return state;
  }
}
