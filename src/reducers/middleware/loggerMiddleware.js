import { createLogger } from 'redux-logger';

// log actions in development mode
export default createLogger({
  collapsed: true,

  // only log in development mode
  // eslint-disable-next-line no-undef
  predicate: () => __DEV__,

  stateTransformer: state => state,

  // transform immutable action payloads to plain objects
  // eslint-disable-next-line no-confusing-arrow
  actionTransformer: action =>
    action && action.payload && action.payload
      ? { ...action, payload: action.payload }
      : action,
});
