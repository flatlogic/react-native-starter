import { compose } from 'redux';
import withState from '../../utils/withState';

import AvatarScreen from './AvatarView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(AvatarScreen);

