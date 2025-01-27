import { compose, withState } from 'recompose';

import BottomNavigationScreen from './BottomNavigationView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(BottomNavigationScreen);

