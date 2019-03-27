import React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-navigation';
import { Drawer } from 'react-native-paper';
import { colors } from '../../styles';
import NavigationService from './NavigationService';


/* eslint-disable-next-line */
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <ImageBackground source={require('../../../assets/images/topBarBg.png')} style={styles.imageBackground}>
        <Text style={styles.headerText}>React Native Starter</Text>
      </ImageBackground>
      <View style={styles.screenContainer}>
        <Drawer.Item
          label="Home"
          icon="home"
          style={styles.screenTextStyle}
          onPress={() => { NavigationService.resetMainNavigator() }}
        />
        <Drawer.Item
          label="Gallery"
          icon="perm-media"
          style={styles.screenTextStyle}
          onPress={() => { NavigationService.goToSubScreen('Dashboard','Gallery') }}
        />
        <Drawer.Item
          label="Calendar"
          icon="today"
          style={styles.screenTextStyle}
          onPress={() => { NavigationService.goToSubScreen('Dashboard','Calendar') }}
        />
        <Drawer.Item
          label="Grids"
          icon="view-module"
          style={styles.screenTextStyle}
          onPress={() => { NavigationService.goToSubScreen('Dashboard','Grids') }}
        />
        <Drawer.Item
          label="Pages"
          icon="description"
          style={styles.screenTextStyle}
          onPress={() => { NavigationService.goToSubScreen('Dashboard','Pages') }}
        />
        <Drawer.Item
          label="Components"
          icon="settings"
          style={styles.screenTextStyle}
          onPress={() => { NavigationService.goToSubScreen('Dashboard','Components') }}
        />
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default CustomDrawerContentComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: 300,
    justifyContent: 'center',
    height: 75,
    alignItems: 'center',
  },
    headerContainer: {
    height: 150,
  },
  headerText: {
    color: colors.white,
    fontSize: 25,
  },
  screenContainer: {
    paddingTop: 20
  },
  screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  screenTextStyle:{
    fontSize: 20,
    marginLeft: 20
  },
});
