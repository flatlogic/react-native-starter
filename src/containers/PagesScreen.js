import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { NavigationActions } from 'react-navigation';

import * as AuthStateActions from '../reducers/auth';
import PagesScreen from '../screens/PagesScreen';

export default compose(
  connect(
    state => ({

    }),
    dispatch => ({
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    }),
  ),
)(PagesScreen);
