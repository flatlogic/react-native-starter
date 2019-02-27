import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import { loadItems } from './CalendarState';

import CalendarScreen from './CalendarView';

export default compose(
  connect(
    state => ({
      items: state.calendar.items,
    }),
    dispatch => ({
      loadItems: items => dispatch(loadItems(items)),
    }),
  ),
)(CalendarScreen);
