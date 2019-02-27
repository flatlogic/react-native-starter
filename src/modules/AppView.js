import React from 'react';

import Navigator from './navigation/Navigator';

export default function AppView() {
  return <Navigator onNavigationStateChange={() => {}} uriPrefix="/app" />;
}
