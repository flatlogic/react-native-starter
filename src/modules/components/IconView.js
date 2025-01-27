import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Card from '../../components/Card';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Card title={'Icons'}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Default</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Icon name={'home'} size={24} color={'#5759CB'} style={{marginRight: 15}}/>
            <Icon name={'calendar'} size={24} color={'#5759CB'} style={{marginRight: 15}}/>
            <Icon name={'apps'} size={24} color={'#5759CB'} style={{marginRight: 15}}/>
            <Icon name={'layers'} size={24} color={'#5759CB'} style={{marginRight: 15}}/>
            <Icon name={'widgets'} size={24} color={'#5759CB'} style={{marginRight: 15}}/>
            <Icon name={'clipboard-text'} size={24} color={'#5759CB'} />
          </View>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Primary</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Icon name={'home'} size={24} color={'rgba(87, 89, 203, .7)'} style={{marginRight: 15}}/>
            <Icon name={'calendar'} size={24} color={'rgba(87, 89, 203, .7)'} style={{marginRight: 15}}/>
            <Icon name={'apps'} size={24} color={'rgba(87, 89, 203, .7)'} style={{marginRight: 15}}/>
            <Icon name={'layers'} size={24} color={'rgba(87, 89, 203, .7)'} style={{marginRight: 15}}/>
            <Icon name={'widgets'} size={24} color={'rgba(87, 89, 203, .7)'} style={{marginRight: 15}}/>
            <Icon name={'clipboard-text'} size={24} color={'rgba(87, 89, 203, .7)'} />
          </View>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Default</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Icon name={'home'} size={24} color={'#ddd'} style={{marginRight: 15}}/>
            <Icon name={'calendar'} size={24} color={'#ddd'} style={{marginRight: 15}}/>
            <Icon name={'apps'} size={24} color={'#ddd'} style={{marginRight: 15}}/>
            <Icon name={'layers'} size={24} color={'#ddd'} style={{marginRight: 15}}/>
            <Icon name={'widgets'} size={24} color={'#ddd'} style={{marginRight: 15}}/>
            <Icon name={'clipboard-text'} size={24} color={'#ddd'} />
          </View>
        </View>
      </Card>
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
