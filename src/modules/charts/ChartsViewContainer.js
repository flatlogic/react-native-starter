import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { loadChartsData } from './ChartsState';

import ChartsScreen from './ChartsView';

export default compose(
  connect(
    state => ({
      data: state.charts.data,
      isLoading: state.charts.isLoading,
    }),
    dispatch => ({
      loadChartsData: () => dispatch(loadChartsData()),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadChartsData();
    },
  }),
)(ChartsScreen);
