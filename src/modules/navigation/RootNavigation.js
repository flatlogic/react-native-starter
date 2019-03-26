import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import NavigationService from './NavigationService';
import CustomDrawer from './CustomDrawer';
import MainTabNavigator from './MainTabNavigator';

import GalleryScreen from '../gallery/GalleryViewContainer';

// To use this screens please see the full version at https://reactnativestarter.com
// import ProfileScreen from '../containers/ProfileScreen';
// import ArticleScreen from '../containers/ArticleScreen';
// import ChatScreen from '../containers/chat/ChatScreen';
// import MessagesScreen from '../containers/chat/MessagesScreen';
// import ChartsScreen from '../containers/ChartsScreen';

import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';

import { colors, fonts } from '../../styles';

const headerBackground = require('../../../assets/images/topBarBg.png');

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        title: null,
        headerBackground: (
          <Image
            style={{ flex: 1, width: '100%' }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Profile: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        title: 'Gallery',
        headerLeft: (
          <Icon
            style={{ color: '#fff', paddingLeft: 10 }}
            onPress={() => NavigationService.goBack()}
            name="arrow-bold-left"
            size={30}
          />
        ),
      },
    },
    Article: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Chat: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Messages: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Charts: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerBackground: (
        <Image
          style={{ flex: 1, width: '100%' }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: (
        <Icon
          style={{ color: '#fff', paddingLeft: 10 }}
          onPress={() => NavigationService.openDrawer()}
          name="menu"
          size={30}
        />
      ),
    }),
  },
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: stackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: (
        <Icon
          style={{ paddingLeft: 10 }}
          name="menu"
          size={30}
        />
      ),
    },
  },
}, {
  contentComponent: CustomDrawer,
  drawerWidth: 300
});

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator },
  Gallery: { screen: GalleryScreen },
});

const MainAppContainer = createAppContainer(AppSwitchNavigator);
export default MainAppContainer;
