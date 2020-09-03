import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Card from '../../components/Card';

import topNavArrow from '../../../assets/images/icons/arrow-back-blue.png';
import topNavContextMenu from '../../../assets/images/icons/context-menu-blue.png';

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Title'}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.topNavTitle}>Top Navigation</Text>
        </View>
      </Card>
      <Card title={'Subtitle'} style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.topNavTitle}>Top Navigation</Text>
            <Text style={styles.topNavSubtitle}>Page 1</Text>
          </View>
        </View>
      </Card>
      <Card title={'Left Controls'} style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={topNavArrow} height={20} style={{position: "absolute", left: 0}}/>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.topNavTitle}>Title</Text>
          </View>
        </View>
      </Card>
      <Card title={'Right Controls'} style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.topNavTitle}>Title</Text>
          </View>
            <Image
              source={topNavContextMenu}
              style={{ height: 20, position: "absolute", right: 0 }}
            />
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
  topNavTitle: {
    fontSize: 18,
    color: '#5759CB',
  },
  topNavSubtitle: {
    fontSize: 12,
    color: 'rgba(87, 89, 203, .6)',
  },
});
