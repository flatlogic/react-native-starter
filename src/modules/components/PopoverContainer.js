import { compose, withState } from 'recompose';

import ModalScreen from './PopoverView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ModalScreen);

