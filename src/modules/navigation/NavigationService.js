/* NavigationService for ReactNavigation v3
/ For use in navigating in nested components without passing navigation prop
/ See: https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
*/

import { NavigationActions, DrawerActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function goToSubScreen(mainRoute, subRoute) {
  const navigateAction = NavigationActions.navigate({
    routeName: mainRoute,
    params: {},
    action: NavigationActions.navigate({ routeName: subRoute }),
  });
  _navigator.dispatch(navigateAction);
}

function resetMainNavigator() {
  const navigateAction = NavigationActions.navigate({
    routeName: 'Main',
    params: {},
    action: NavigationActions.navigate({ routeName: 'Home' }),
  });
  _navigator.dispatch(navigateAction);
  _navigator.dispatch(DrawerActions.closeDrawer());

}

function openDrawer(){
  _navigator.dispatch(DrawerActions.openDrawer());
}

function goBack() {
  _navigator.dispatch(
    NavigationActions.back()
  );
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  openDrawer,
  goBack,
  resetMainNavigator,
  goToSubScreen,
};
