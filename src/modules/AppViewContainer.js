import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import AppView from './AppView';

export default function AppViewContainer(props) {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return <AppView {...props} />;
}
