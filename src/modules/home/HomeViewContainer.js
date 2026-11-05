import { compose } from 'redux';
import withState from '../../utils/withState';

import HomeScreen from './HomeView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  HomeScreen,
);
