import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Card from '../../components/Card';
import Button from '../../components/Button';
import { colors, fonts } from '../../styles';

import { Badge } from 'react-native-paper';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Size'}>
        <View style={styles.demoBadgesContainer}>
          <Text style={styles.componentSectionTitle}>Large</Text>
          <View style={styles.componentBadgesContainer}>
          <Badge size={32} style={{width: 70, backgroundColor: '#5759CB', marginRight: 5}}>Large</Badge>
            <Badge size={32} style={{width: 70, backgroundColor: colors.secondary, marginRight: 5}}>Large</Badge>
            <Badge size={32} style={{backgroundColor: colors.green, width: 70, color: '#fff'}}>Small</Badge>
          </View>
        </View>
        <View style={styles.demoBadgesContainer}>
          <Text style={styles.componentSectionTitle}>Medium</Text>
          <View style={[styles.componentBadgesContainer, {justifyContent: 'flex-start'}]}>
            <Badge size={29} style={{width: 90, backgroundColor: '#5759CB', marginRight: 10}}>Large</Badge>
            <Badge size={29} style={{width: 90, backgroundColor: colors.secondary, marginRight: 5}}>Large</Badge>
          </View>
        </View>
        <View style={styles.demoBadgesContainer}>
          <Text style={styles.componentSectionTitle}>Small</Text>
          <View style={styles.componentBadgesContainer}>
            <Badge size={21} style={{width: 70, backgroundColor: '#5759CB', marginRight: 5}}>Large</Badge>
            <Badge size={21} style={{width: 70, backgroundColor: colors.secondary, marginRight: 5}}>Large</Badge>
            <Badge size={21} style={{backgroundColor: colors.green, width: 70,  color: '#fff'}}>Small</Badge>
          </View>
        </View>
      </Card>
      <Card title={'Shape'} style={{marginTop: 20}}>
        <View style={styles.demoBadgesContainer}>
          <Text style={styles.componentSectionTitle}>Round</Text>
          <View style={styles.componentBadgesContainer}>
            <Badge size={32} style={{width: 70, backgroundColor: '#5759CB', marginRight: 5}}>Round</Badge>
            <Badge size={32} style={{width: 70, backgroundColor: colors.secondary, marginRight: 5}}>Round</Badge>
            <Badge size={32} style={{backgroundColor: colors.green, width: 70, color: colors.white}}>Round</Badge>
          </View>
        </View>
        <View style={styles.demoBadgesContainer}>
          <Text style={styles.componentSectionTitle}>Rounded</Text>
          <View style={[styles.componentBadgesContainer, {justifyContent: 'flex-start'}]}>
            <Badge size={26} style={{width: 90, backgroundColor: '#5759CB', marginRight: 10, borderRadius: 5}}>Rounded</Badge>
            <Badge size={26} style={{width: 90, backgroundColor: colors.secondary, marginRight: 5, borderRadius: 5}}>Rounded</Badge>
          </View>
        </View>
        <View style={styles.demoBadgesContainer}>
          <Text style={styles.componentSectionTitle}>Square</Text>
          <View style={styles.componentBadgesContainer}>
            <Badge size={21} style={{width: 70, backgroundColor: '#5759CB', marginRight: 5, borderRadius: 0}}>Square</Badge>
            <Badge size={21} style={{width: 70, backgroundColor: colors.secondary, marginRight: 5, borderRadius: 0}}>Square</Badge>
            <Badge size={21} style={{backgroundColor: colors.green, width: 70, borderRadius: 0, color: colors.white}}>Square</Badge>
          </View>
        </View>
      </Card>
      <Card title={'Text'} style={{marginTop: 20}}>
        <View style={styles.demoBadgesContainer}>
          <Text style={{fontSize: 40}}>Example heading</Text><Badge size={21} style={{marginBottom: 20, backgroundColor: '#5759CB', width: 48}}>New</Badge>
        </View>
        <View style={styles.demoBadgesContainer}>
          <Text style={{fontSize: 36}}>Example heading</Text>
          <Badge size={21} style={{marginBottom: 20, backgroundColor: colors.secondary, width: 48}}>New</Badge>
        </View>
        <View style={styles.demoBadgesContainer}>
          <Text style={{fontSize: 32}}>Example heading</Text>
          <Badge size={21} style={{marginBottom: 20, backgroundColor: colors.blue, color: colors.white, width: 48}}>New</Badge>
        </View>
        <View style={styles.demoBadgesContainer}>
          <Text style={{fontSize: 28}}>Example heading</Text>
          <Badge size={21} style={{marginBottom: 20, backgroundColor: colors.green, color: colors.white, width: 48}}>New</Badge>
        </View>
        <View style={styles.demoBadgesContainer}>
          <Text style={{fontSize: 24}}>Example heading</Text>
          <Badge size={21} style={{marginBottom: 20, backgroundColor: colors.yellow, color: colors.white, width: 48}}>New</Badge>
        </View>
        <View style={styles.demoBadgesContainer}>
          <Text style={{fontSize: 20}}>Example heading</Text>
          <Badge size={21} style={{marginBottom: 20, backgroundColor: colors.gray, color: colors.white, width: 48}}>New</Badge>
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
    fontSize: 18,
    paddingBottom: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
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
  demoBadgesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 15,
  },
  componentBadgesContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    flex: 1,
  },
});
