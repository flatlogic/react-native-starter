import { compose, withState } from 'recompose';

import ButtonScreen from './TabGroupView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ButtonScreen);

