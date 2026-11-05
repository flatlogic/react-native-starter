import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadChartsData } from './ChartsState';
import ChartsScreen from './ChartsView';

function ChartsViewContainer(props) {
  useEffect(() => {
    props.loadChartsData();
  }, [props.loadChartsData]);
  return <ChartsScreen {...props} />;
}

export default connect(
  state => ({ data: state.charts.data, isLoading: state.charts.isLoading }),
  { loadChartsData },
)(ChartsViewContainer);
