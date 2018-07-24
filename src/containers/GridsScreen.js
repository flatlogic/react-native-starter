import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import GridView from '../screens/GridsScreen';
import * as GridStateActions from '../reducers/grid';

export default connect(
  state => ({
    tabIndex: state.grid.tabIndex,
    tabs: state.grid.tabs,
    data: state.grid.data,
  }),
  dispatch => ({
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    gridStateActions: bindActionCreators(GridStateActions, dispatch),
  }),
)(GridView);
