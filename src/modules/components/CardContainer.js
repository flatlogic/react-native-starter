import { compose, withState } from 'recompose';

import CardScreen from './CardView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(CardScreen);

