import { compose, withState } from 'recompose';

import AvatarScreen from './AvatarView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(AvatarScreen);

