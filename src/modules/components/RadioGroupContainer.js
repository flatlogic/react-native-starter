import { compose, withState } from 'recompose';

import RadioGroupScreen from './RadioGroupView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(RadioGroupScreen);

