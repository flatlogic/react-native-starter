import { compose, withState } from 'recompose';

import HomeScreen from './HomeView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  HomeScreen,
);
