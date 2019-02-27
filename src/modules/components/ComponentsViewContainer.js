import { compose, withState } from 'recompose';

import ComponentsScreen from './ComponentsView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ComponentsScreen);
