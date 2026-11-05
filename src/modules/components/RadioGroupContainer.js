import { compose } from 'redux';
import withState from '../../utils/withState';

import RadioGroupScreen from './RadioGroupView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(RadioGroupScreen);

