import { compose, withState } from 'recompose';

import TextScreen from './InputView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(TextScreen);

