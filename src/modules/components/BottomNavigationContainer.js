import { compose } from 'redux';
import withState from '../../utils/withState';

import BottomNavigationScreen from './BottomNavigationView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(BottomNavigationScreen);

