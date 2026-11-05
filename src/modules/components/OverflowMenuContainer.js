import { compose } from 'redux';
import withState from '../../utils/withState';

import ModalScreen from './OverflowMenuView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ModalScreen);

