import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Card from '../../components/Card';

const menuImg = require('../../../assets/images/drawer/menu.png')
const menuBackImg = require('../../../assets/images/icons/arrow-back.png')

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
        <Text style={[styles.title, { marginBottom: 10 }]}>
          Default
        </Text>
        <View style={{backgroundColor: colors.white}}>
          <View style={{height: 88, backgroundColor: '#3C38B1', paddingHorizontal: 20, justifyContent: 'center'}}>
            <Image source={menuImg}/>
          </View>
          <View style={{margin: 20, backgroundColor: '#F1F1F7', height: 127}}/>
          <View style={{marginHorizontal: 20, backgroundColor: '#F1F1F7', height: 127}}/>
          <View style={{margin: 20, backgroundColor: '#F1F1F7', height: 127}}/>
        </View>
      <Text style={[styles.title, { marginBottom: 10, marginTop: 20 }]}>
        Layout With Sidebar
      </Text>
      <View style={{backgroundColor: colors.white}}>
        <View style={{position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: '#3C38B1', width: '90%', zIndex: 99, paddingHorizontal: 20, alignItems: 'flex-end'}}>
          <Image source={menuBackImg} style={{marginTop: 40}}/>
        </View>
        <View style={{height: 88, backgroundColor: '#7070B2'}}/>
        <View style={{margin: 20, backgroundColor: '#F1F1F7', height: 127}}/>
        <View style={{marginHorizontal: 20, backgroundColor: '#F1F1F7', height: 127}}/>
        <View style={{margin: 20, backgroundColor: '#F1F1F7', height: 127}}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
  },
  headerTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
  },
  headerImg: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  footerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    flex: 1,
  },
  demoInputContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
  },
});
