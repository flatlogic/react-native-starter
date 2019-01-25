import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';

import AuthScreen from '../containers/AuthScreen';
import AppNavigator from './RootNavigation';

export default function NavigatorView({ dispatch, navigatorState, authState }) {
    if (authState.isLoggedIn || authState.hasSkippedLogin) {
        return <AppNavigator />;
    }
    return <AuthScreen />;
}

NavigatorView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigatorState: PropTypes.shape({}).isRequired,
};
