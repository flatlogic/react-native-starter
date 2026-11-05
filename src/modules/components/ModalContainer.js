import { compose } from 'redux';
import withState from '../../utils/withState';

import ModalScreen from './ModalView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(ModalScreen);

