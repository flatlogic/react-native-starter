import { compose, withState } from 'recompose';

import ListScreen from './MenuView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ListScreen);

