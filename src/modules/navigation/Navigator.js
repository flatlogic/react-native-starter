// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // eslint-disable-next-line no-unused-vars
// import TabNavigator from './MainTabNavigator';
// import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

// // import AuthScreen from '../containers/AuthScreen';
// //import AppNavigator from './RootNavigation';
// import ProfileScreen from '../profile/ProfileViewContainer';
// import ArticleScreen from '../article/ArticleViewContainer';
// import ChatScreen from '../chat/ChatViewContainer';
// import MessagesScreen from '../chat/MessagesViewContainer';
// import ChartsScreen from '../charts/ChartsViewContainer';
// import AuthScreen from '../auth/AuthViewContainer';

// const { width } = Dimensions.get('window');

// const headerBackground = require('../../../assets/images/topBarBg.png');

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function LogoTitle () {
//   return (
//     <Image
//       style={{
//         flex: 1,
//         width,
//       }}
//       source={headerBackground}
//       resizeMode="cover"
//     />
//   )
// }



// export default function NavigatorView() {
//   // if (authState.isLoggedIn || authState.hasSkippedLogin) {
//   //     return <AppNavigator />;
//   // }
//   // return <AuthScreen />;

//   return (
//     <Stack.Navigator>
//     <Stack.Screen name="Tabs" component={TabNavigator} />
//       <Stack.Screen name="Charts" component={ChartsScreen} options={{
//               headerLeft: props => (
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
//       }} />
//       <Stack.Screen name="Profile" component={ProfileScreen} options={{
//               headerLeft: props => (
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
//       }} />
//       <Stack.Screen name="Article" component={ArticleScreen} options={{
//               headerLeft: props => (
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
//       }} />
//       <Stack.Screen name="Messages" component={MessagesScreen} options={{
//               headerLeft: props => (
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
//       }} />
//       <Stack.Screen name="Chat" component={ChatScreen} options={{
//               headerLeft: props => (
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
//       }} />
//       <Stack.Screen name="Auth" component={AuthScreen} options={{
//               headerLeft: props => (
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
//       }} />
//     </Stack.Navigator>
//   );
// }
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigatorView from './RootNavigation';
import { Button, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={NavigatorView} />
      <Drawer.Screen name="Home1" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}