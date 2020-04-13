// import React from 'react';
// import { Image, TouchableOpacity, Dimensions } from 'react-native';
// import { createAppContainer, createStackNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';

// import GalleryScreen from '../gallery/GalleryViewContainer';

// import ProfileScreen from '../profile/ProfileViewContainer';
// import ArticleScreen from '../article/ArticleViewContainer';
// import ChatScreen from '../chat/ChatViewContainer';
// import MessagesScreen from '../chat/MessagesViewContainer';
// import ChartsScreen from '../charts/ChartsViewContainer';
// import AuthScreen from '../auth/AuthViewContainer';

// import { colors, fonts } from '../../styles';

// const { width } = Dimensions.get('window');

// const headerBackground = require('../../../assets/images/topBarBg.png');

// const stackNavigator = createStackNavigator(
//   {
//     Main: {
//       screen: MainTabNavigator,
//       navigationOptions: () => ({
//         title: 'React Native Starter',
//         headerLeft: null,
//         headerBackground: (
//           <Image
//             style={{
//               flex: 1,
//               width,
//             }}
//             source={headerBackground}
//             resizeMode="cover"
//           />
//         ),
//       }),
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         title: 'Profile',
//       },
//     },
//     Gallery: {
//       screen: GalleryScreen,
//       navigationOptions: {
//         title: 'Gallery',
//       },
//     },
//     Article: {
//       screen: ArticleScreen,
//       navigationOptions: {
//         title: 'Article',
//       },
//     },
//     Chat: {
//       screen: ChatScreen,
//       navigationOptions: {
//         title: 'Chat',
//       },
//     },
//     Messages: {
//       screen: MessagesScreen,
//       navigationOptions: {
//         title: 'Messages',
//       },
//     },
//     Charts: {
//       screen: ChartsScreen,
//       navigationOptions: {
//         title: 'Charts',
//       },
//     },
//     Auth: {
//       screen: AuthScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },
//   },
//   {
//     defaultNavigationOptions: () => ({
//       titleStyle: {
//         fontFamily: fonts.primaryLight,
//       },
//       headerStyle: {
//         backgroundColor: colors.primary,
//         borderBottomWidth: 0,
//       },
//       headerBackground: (
//         <Image
//           style={{ flex: 1 }}
//           source={headerBackground}
//           resizeMode="cover"
//         />
//       ),
//       headerTitleStyle: {
//         color: colors.white,
//         fontFamily: fonts.primaryRegular,
//       },
//       headerTintColor: '#222222',
//       headerLeft: props => (
//         <TouchableOpacity
//           onPress={props.onPress}
//           style={{
//             paddingLeft: 25,
//           }}
//         >
//           <Image
//             source={require('../../../assets/images/icons/arrow-back.png')}
//             resizeMode="contain"
//             style={{
//               height: 20,
//             }}
//           />
//         </TouchableOpacity>
//       ),
//     }),
//   },
// );

// export default createAppContainer(stackNavigator);


import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// eslint-disable-next-line no-unused-vars
import TabNavigator from './MainTabNavigator';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

// import AuthScreen from '../containers/AuthScreen';
//import AppNavigator from './RootNavigation';
import ProfileScreen from '../profile/ProfileViewContainer';
import ArticleScreen from '../article/ArticleViewContainer';
import ChatScreen from '../chat/ChatViewContainer';
import MessagesScreen from '../chat/MessagesViewContainer';
import ChartsScreen from '../charts/ChartsViewContainer';
import AuthScreen from '../auth/AuthViewContainer';

const { width } = Dimensions.get('window');

const headerBackground = require('../../../assets/images/topBarBg.png');

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function LogoTitle () {
  return (
    <Image
      style={{
        flex: 1,
        width,
      }}
      source={headerBackground}
      resizeMode="cover"
    />
  )
}



export default function NavigatorView() {
  // if (authState.isLoggedIn || authState.hasSkippedLogin) {
  //     return <AppNavigator />;
  // }
  // return <AuthScreen />;

  return (
    <Stack.Navigator>
    <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Charts" component={ChartsScreen} options={{
              headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
      }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{
              headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
      }} />
      <Stack.Screen name="Article" component={ArticleScreen} options={{
              headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
      }} />
      <Stack.Screen name="Messages" component={MessagesScreen} options={{
              headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
      }} />
      <Stack.Screen name="Chat" component={ChatScreen} options={{
              headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
      }} />
      <Stack.Screen name="Auth" component={AuthScreen} options={{
              headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
      }} />
    </Stack.Navigator>
  );
}
