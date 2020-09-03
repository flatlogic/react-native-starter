import { connect } from 'react-redux';
import { compose } from 'recompose';

import { loadItems } from './RangeCalendarState';

import CalendarScreen from './RangeCalendarView';

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
