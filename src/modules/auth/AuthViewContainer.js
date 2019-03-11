// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import AuthView from './AuthView';

export default compose(connect())(AuthView);
