import { compose, withState } from 'recompose';

import ModalScreen from './OverflowMenuView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ModalScreen);

