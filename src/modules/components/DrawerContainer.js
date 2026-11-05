import { compose } from 'redux';
import withState from '../../utils/withState';

import ToggleScreen from './DrawerView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ToggleScreen);

