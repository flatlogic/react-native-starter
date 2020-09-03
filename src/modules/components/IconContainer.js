import { compose, withState } from 'recompose';

import TextScreen from './IconView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(TextScreen);

