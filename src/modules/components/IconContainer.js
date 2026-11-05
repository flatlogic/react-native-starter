import { compose } from 'redux';
import withState from '../../utils/withState';

import TextScreen from './IconView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(TextScreen);

