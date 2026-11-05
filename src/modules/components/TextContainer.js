import { compose } from 'redux';
import withState from '../../utils/withState';

import ToggleScreen from './TextView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ToggleScreen);

