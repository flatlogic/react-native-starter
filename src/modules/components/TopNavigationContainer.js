import { compose, withState } from 'recompose';

import ToggleScreen from './TopNavigationView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ToggleScreen);

