import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import ComponentsScreen from './ComponentsView';

export default compose(
  connect(state => ({})),
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ComponentsScreen);
