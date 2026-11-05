import { compose } from 'redux';
import withState from '../../utils/withState';

import ToggleScreen from './SelectView';

export default compose(
  withState('selectedSizeIndex', 'setSelectedSizeIndex', -1),
  withState('selectedQuantityIndex', 'setSelectedQuantityIndex', -1),
)(ToggleScreen);

