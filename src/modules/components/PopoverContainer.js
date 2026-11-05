import { compose } from 'redux';
import withState from '../../utils/withState';

import ModalScreen from './PopoverView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ModalScreen);

