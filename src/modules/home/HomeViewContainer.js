import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import HomeScreen from './HomeView';

export default compose(
  connect(state => ({})),
  withState('isExtended', 'setIsExtended', false),
)(HomeScreen);
