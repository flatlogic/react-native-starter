import { compose, withState } from 'recompose';

import ListScreen from './ListView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ListScreen);

