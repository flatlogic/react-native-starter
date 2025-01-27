import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button as ButtonNative } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';

import IconImg from '../../../assets/images/icons/arrow-back.png'

import { Button, RadioGroup, Dropdown } from '../../components';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Action Buttons</Text>

        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            action
            bgColor="#958FDA"
            onPress={() => {}}
          >
            <Text>
              <Icon name="chevron-thin-right" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#4F44C1"
            onPress={() => {}}
          >
            <Text>
              <Icon name="controller-paus" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#3CD4A0"
            onPress={() => {}}
          >
            <Text>
              <Icon name="magnifying-glass" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#EF1F78"
            onPress={() => {}}
          >
            <Text>
              <Icon name="paper-plane" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#52B1F4"
            onPress={() => {}}
          >
            <Text>
              <Icon name="flash" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#19D4E6"
            onPress={() => {}}
          >
            <Text>
              <Icon name="reply-all" size={20} color="white" />
            </Text>
          </Button>
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
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
    flex: 1,
    marginHorizontal: 8,
  },
  demoItem: {
    marginVertical: 15,
  },
});
