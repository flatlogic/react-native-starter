import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Platform } from 'react-native';

import Card from '../../components/Card';
import Button from '../../components/Button';
import { colors, fonts } from '../../styles';
import LinearGradient from "react-native-linear-gradient";

const headerImg = require('../../../assets/images/avatar.png');

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Text style={styles.title}>Default List</Text>
      <Card>
        <View style={{ flexDirection: 'row', flex: 1 }}>
        <Image source={{ uri: "https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg" }} style={styles.itemThreeImage} />
        <View style={styles.itemThreeContent}>
          <Text style={styles.itemThreeBrand}>Citizen</Text>
          <View>
            <Text style={styles.itemThreeTitle}>CITIZEN ECO-DRIVE</Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              CITIZEN ECO-DRIVE
            </Text>
          </View>
          <View style={styles.itemThreeMetaContainer}>
            <View
              style={[
                styles.badge,
              ]}
            >
              <Text
                style={{ fontSize: 10, color: colors.white, fontWeight: '500' }}
                styleName="bright"
              >
                New
              </Text>
            </View>
            <Text style={styles.itemThreePrice}>$129.9</Text>
          </View>
        </View>
        </View>
        <View style={{height: 1, backgroundColor: '#E6E6E6', marginVertical: 20}}/>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Image source={{ uri: "https://reactnativestarter.com/demo/images/pexels-photo-26549.jpg" }} style={styles.itemThreeImage} />
          <View style={styles.itemThreeContent}>
            <Text style={styles.itemThreeBrand}>Weeknight</Text>
            <View>
              <Text style={styles.itemThreeTitle}>NEXT-LEVEL WEAR</Text>
              <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                30% OFF CHILL CASUAL
              </Text>
            </View>
            <View style={styles.itemThreeMetaContainer}>
              <View
                style={[
                  styles.badge,
                  {backgroundColor: '#FF1358'}
                ]}
              >
                <Text
                  style={{ fontSize: 10, color: colors.white, fontWeight: '500' }}
                  styleName="bright"
                >
                  New
                </Text>
              </View>
              <Text style={styles.itemThreePrice}>$29.99</Text>
            </View>
          </View>
        </View>
      </Card>
      <Text style={[styles.title, {marginTop: 20}]}>Custom List</Text>
        <View style={styles.itemTwoContent}>
          <Image style={styles.itemTwoImage} source={{ uri: "https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg" }} />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
            style={styles.itemTwoOverlay}
          />
          <Text style={styles.itemTwoTitle}>Citizen</Text>
          <Text style={styles.itemTwoSubTitle}>CITIZEN ECO-DRIVE</Text>
          <Text style={styles.itemTwoPrice}>$129.9</Text>
        </View>
      <View style={[styles.itemTwoContent, {marginTop: 10}]}>
        <Image style={styles.itemTwoImage} source={{ uri: "https://reactnativestarter.com/demo/images/pexels-photo-26549.jpg" }} />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
          style={styles.itemTwoOverlay}
        />
        <Text style={styles.itemTwoTitle}>Weeknight</Text>
        <Text style={styles.itemTwoSubTitle}>NEXT-LEVEL WEAR</Text>
        <Text style={styles.itemTwoPrice}>$29.99</Text>
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
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: "#3CD4A0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
  },
});
