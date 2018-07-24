import { NavigationActions } from 'react-navigation';
import includes from 'lodash/includes';

import AppNavigator from '../../navigation/RootNavigation';

export default function NavigatorReducer(state, action) {
  // Initial state
  if (!state) {
    return AppNavigator.router.getStateForAction(action, state);
  }

  // Is this a navigation action that we should act upon?
  if (includes(NavigationActions, action.type)) {
    return AppNavigator.router.getStateForAction(action, state);
  }

  return state;
}
