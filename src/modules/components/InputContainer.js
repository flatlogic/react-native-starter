import { compose } from 'redux';
import withState from '../../utils/withState';

import TextScreen from './InputView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(TextScreen);

