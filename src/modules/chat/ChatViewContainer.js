// @flow
import { compose, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';

import ChatView from './ChatView';
import { loadMessagesList } from './ChatState';

export default compose(
  connect(
    state => ({
      messagesList: state.chat.messagesList,
      messagesListLoading: state.chat.messagesListLoading,
    }),
    {
      loadMessagesList,
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadMessagesList();
    },
  }),
  withState('searchText', 'setSearchText', ''),
)(ChatView);
