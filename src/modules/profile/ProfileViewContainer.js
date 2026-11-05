// @flow
import { compose } from 'redux';
import { connect } from 'react-redux';

import ProfileView from './ProfileView';

export default compose(connect())(ProfileView);
