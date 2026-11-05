import { compose } from 'redux';
import withState from '../../utils/withState';

import ButtonScreen from './ButtonGroupView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ButtonScreen);

