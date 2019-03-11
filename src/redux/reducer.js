import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from '../modules/gallery/GalleryState';
import app from '../modules/AppState';
import calendar from '../modules/calendar/CalendarState';
import charts from '../modules/charts/ChartsState';
import chat from '../modules/chat/ChatState';

export default combineReducers({
  // ## Generator Reducers
  gallery,
  app,
  calendar,
  charts,
  chat,
});
