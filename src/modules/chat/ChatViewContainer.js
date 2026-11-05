import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ChatView from './ChatView';
import { loadMessagesList } from './ChatState';

function ChatViewContainer(props) {
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    props.loadMessagesList();
  }, [props.loadMessagesList]);

  return <ChatView {...props} searchText={searchText} setSearchText={setSearchText} />;
}

export default connect(
  state => ({
    messagesList: state.chat.messagesList,
    messagesListLoading: state.chat.messagesListLoading,
  }),
  { loadMessagesList },
)(ChatViewContainer);
