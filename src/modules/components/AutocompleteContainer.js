import { compose } from 'redux';
import withState from '../../utils/withState';

import CardScreen from './AutocompleteView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(CardScreen);

