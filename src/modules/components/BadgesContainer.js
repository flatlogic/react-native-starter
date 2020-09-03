import { compose, withState } from 'recompose';

import CardScreen from './BadgesView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(CardScreen);

