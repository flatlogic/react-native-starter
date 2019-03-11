import { connect } from 'react-redux';
import { compose } from 'recompose';

import MessagesScreen from './messages/MessagesScreen';
import { loadMessages, sendMessage } from './ChatState';

export default compose(
  connect(
    state => ({
      messages: state.chat.messages,
    }),
    {
      loadMessages,
      sendMessage,
    },
  ),
)(MessagesScreen);
