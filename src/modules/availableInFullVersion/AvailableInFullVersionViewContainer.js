// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import AvailableInFullVersionView from './AvailableInFullVersionView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(AvailableInFullVersionView);
