import { compose } from 'redux';
import withState from '../../utils/withState';

import ListScreen from './ListView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ListScreen);

