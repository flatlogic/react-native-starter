import { connect } from 'react-redux';
import NavigatorView from '../navigation/Navigation';

export default connect(
  state => ({
    authState: state.auth,
    navigatorState: state.navigation,
  }),
)(NavigatorView);
