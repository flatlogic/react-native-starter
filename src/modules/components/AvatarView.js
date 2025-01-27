import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button as ButtonNative,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Avatar from '../../components/Avatar';
import { colors, fonts } from '../../styles';

import user1Img from '../../../assets/images/users/user1.png';
import user2Img from '../../../assets/images/users/user2.png';
import user3Img from '../../../assets/images/users/user3.png';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Size</Text>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Large</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar src={user1Img} lg />
            <Avatar src={user2Img} lg />
            <Avatar src={user3Img} lg />
          </View>
        </View>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Medium</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar src={user1Img} style={{marginLeft: 4}}/>
            <Avatar src={user2Img} />
            <Avatar src={user3Img} style={{marginRight: 4}}/>
          </View>
        </View>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Small</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar src={user1Img} sm style={{marginLeft: 8}}/>
            <Avatar src={user2Img} sm />
            <Avatar src={user3Img} sm style={{marginRight: 8}}/>
          </View>
        </View>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Shape</Text>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Round</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar src={user1Img} lg />
            <Avatar src={user2Img} lg />
            <Avatar src={user3Img} lg />
          </View>
        </View>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Rounded</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar src={user1Img} rounded lg/>
            <Avatar src={user2Img} rounded lg/>
            <Avatar src={user3Img} rounded lg/>
          </View>
        </View>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Square</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar src={user1Img} square lg />
            <Avatar src={user2Img} square lg />
            <Avatar src={user3Img} square lg />
          </View>
        </View>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Letter Avatars</Text>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Primary</Text>
          <View style={styles.componentAvatarContainer}>
          <Avatar primary lg>P</Avatar>
            <Avatar primary bordered lg>P</Avatar>
            <Avatar primary bordered lg square>P</Avatar>
          </View>
        </View>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Secondary</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar secondary lg>S</Avatar>
            <Avatar secondary bordered lg>S</Avatar>
            <Avatar secondary bordered lg square>S</Avatar>
          </View>
        </View>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Default</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar  lg>D</Avatar>
            <Avatar bordered lg>D</Avatar>
            <Avatar bordered lg square>D</Avatar>
          </View>
        </View>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Letter Avatars Size</Text>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Large</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar primary lg>L</Avatar>
            <Avatar primary bordered lg>L</Avatar>
            <Avatar primary bordered lg square>L</Avatar>
          </View>
        </View>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Medium</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar secondary style={{marginLeft: 4}}>M</Avatar>
            <Avatar bordered secondary>M</Avatar>
            <Avatar bordered square secondary style={{marginRight: 4}}>M</Avatar>
          </View>
        </View>
        <View style={styles.demoAvatarContainer}>
          <Text style={styles.componentSectionTitle}>Small</Text>
          <View style={styles.componentAvatarContainer}>
            <Avatar sm style={{marginLeft: 8}}>S</Avatar>
            <Avatar bordered sm>S</Avatar>
            <Avatar bordered sm square style={{marginRight: 8}}>S</Avatar>
          </View>
        </View>
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
  componentsSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
    marginBottom: 20,
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    flex: 1,
  },
  demoAvatarContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 15,
  },
  componentAvatarContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
  },
});
