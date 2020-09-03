import { compose, withState } from 'recompose';

import ToggleScreen from './SelectView';

export default compose(
  withState('selectedSizeIndex', 'setSelectedSizeIndex', -1),
  withState('selectedQuantityIndex', 'setSelectedQuantityIndex', -1),
)(ToggleScreen);

