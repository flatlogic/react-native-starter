import { compose } from 'redux';
import withState from '../../utils/withState';

import ComponentsScreen from './ComponentsView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ComponentsScreen);
