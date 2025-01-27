import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import { Button } from '../../components';
import { fonts, colors } from '../../styles';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../../assets/images/avatar.png')}
        style={[styles.section, styles.header]}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.title}>Jane SIMPSON</Text>
          <View>
            <Text style={styles.position}>UI/UX Designer</Text>
            <Text style={styles.company}>React Native Starter</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            secondary
            rounded
            small
            caption="Contact"
            onPress={() => {}}
          />

          <Button
            rounded
            bordered
            small
            style={{ marginLeft: 20 }}
            caption="Follow"
            onPress={() => {}}
          />
        </View>
      </ImageBackground>
      <View style={styles.section}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.profileGradientStart, colors.profileGradientEnd]}
          style={styles.quickFacts}
        >
          <View style={styles.quickInfoItem}>
            <Text style={styles.quickInfoText}>112</Text>
            <Text style={styles.quickInfoText}>Projects</Text>
          </View>

          <View style={styles.quickInfoItem}>
            <Text style={styles.quickInfoText}>1.3k</Text>
            <Text style={styles.quickInfoText}>Followers</Text>
          </View>

          <View style={styles.quickInfoItem}>
            <Text style={styles.quickInfoText}>816</Text>
            <Text style={styles.quickInfoText}>Following</Text>
          </View>
        </LinearGradient>

        <View style={{ flex: 1 }}>
          <View style={styles.infoRow}>
            <Icon
              style={styles.infoIcon}
              name="map-marker"
              size={20}
              color="#c3c3c3"
            />
            <Text>Paris, France</Text>
          </View>
          <View style={styles.hr} />

          <View style={styles.infoRow}>
            <Icon
              style={styles.infoIcon}
              name="instagram"
              size={20}
              color="#c3c3c3"
            />
            <Text>rns</Text>
          </View>
          <View style={styles.hr} />

          <View style={styles.infoRow}>
            <Icon
              style={styles.infoIcon}
              name="youtube"
              size={20}
              color="#c3c3c3"
            />
            <Text>React Native Starter</Text>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <ImageBackground
            style={styles.bottomImage}
            source={require('../../../assets/images/photos.jpeg')}
          >
            <Text style={styles.quickInfoText}>+150</Text>
            <Text style={styles.quickInfoText} styleName="bright">
              Photos
            </Text>
          </ImageBackground>
          <ImageBackground
            style={styles.bottomImage}
            source={require('../../../assets/images/social.jpeg')}
          >
            <Text style={styles.quickInfoText}>SOCIAL</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.bottomImage}
            source={require('../../../assets/images/projects.jpg')}
          >
            <Text style={styles.quickInfoText}>PROJECTS</Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    padding: 20,
  },
  section: {
    flex: 3,
    position: 'relative',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 25,
    letterSpacing: 0.04,
    marginBottom: 10,
  },
  lightText: {
    color: colors.white,
  },
  quickFacts: {
    height: 60,
    flexDirection: 'row',
  },
  quickFact: {
    flex: 1,
  },
  infoSection: {
    flex: 1,
  },
  infoRow: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  hr: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    marginLeft: 20,
  },
  infoIcon: {
    marginRight: 20,
  },
  bottomRow: {
    height: 80,
    flexDirection: 'row',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  position: {
    color: colors.white,
    fontFamily: fonts.primaryLight,
    fontSize: 16,
    marginBottom: 3,
  },
  company: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 16,
  },
  quickInfoItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  quickInfoText: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
  },
  bottomImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
