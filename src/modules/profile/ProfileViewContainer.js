// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import ProfileView from './ProfileView';

export default compose(connect())(ProfileView);
