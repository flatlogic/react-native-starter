import React from 'react';

// import AuthScreen from '../containers/AuthScreen';
import AppNavigator from './RootNavigation';
import NavigationService from './NavigationService';

export default function NavigatorView() {
  // if (authState.isLoggedIn || authState.hasSkippedLogin) {
  //     return <AppNavigator />;
  // }
  // return <AuthScreen />;

  return (
    <AppNavigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  )
}
