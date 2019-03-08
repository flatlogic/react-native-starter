import { connect } from 'react-redux';
import { compose } from 'recompose';

import { loadItems } from './CalendarState';

import CalendarScreen from './CalendarView';

export default compose(
  connect(
    state => ({
      items: state.calendar.items,
    }),
    {
      loadItems,
    },
  ),
)(CalendarScreen);
