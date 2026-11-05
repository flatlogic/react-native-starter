import { compose } from 'redux';
import withState from '../../utils/withState';

import CardScreen from './CardView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(CardScreen);

