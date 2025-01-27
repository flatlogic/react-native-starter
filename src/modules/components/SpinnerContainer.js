import { compose, withState } from 'recompose';

import ButtonScreen from './SpinnerView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ButtonScreen);

