import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { colors, fonts } from '../../styles';

const chartIcon = require('../../../assets/images/pages/chart.png');
const calendarIcon = require('../../../assets/images/pages/calendar.png');
const chatIcon = require('../../../assets/images/pages/chat.png');
const galleryIcon = require('../../../assets/images/pages/gallery.png');
const profileIcon = require('../../../assets/images/pages/profile.png');

export default function PagesScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Charts' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={chartIcon}
            tintColor={colors.primary}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Charts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={galleryIcon}
            tintColor={colors.primary}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Profile' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={profileIcon}
            tintColor={colors.primary}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Chat' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={chatIcon}
            tintColor={colors.primary}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Calendar' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={calendarIcon}
            tintColor={colors.primary}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Auth' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={profileIcon}
            tintColor={colors.primary}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
    tintColor: colors.primary,
  },
});
