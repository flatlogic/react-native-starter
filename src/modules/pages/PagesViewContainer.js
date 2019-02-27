// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import PagesView from './PagesView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(PagesView);
