import { compose, withState } from 'recompose';

import ButtonScreen from './ButtonView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ButtonScreen);

