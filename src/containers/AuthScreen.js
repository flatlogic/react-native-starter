import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';

import * as AuthStateActions from '../reducers/auth';
import AuthScreen from '../screens/AuthScreen';

export default compose(
  connect(
    state => ({

    }),
    dispatch => ({
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
    }),
  ),
)(AuthScreen);
