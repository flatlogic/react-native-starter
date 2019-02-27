import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Platform, UIManager } from 'react-native';

import AppView from './AppView';

import { updateStore } from './AppState';

export default compose(
  lifecycle({
    componentWillMount() {
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    },
  }),
)(AppView);
