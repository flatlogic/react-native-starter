// @flow
import { compose } from 'redux';
import { connect } from 'react-redux';

import AuthView from './AuthView';

export default compose(connect())(AuthView);
