import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button as ButtonNative,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';

import IconImg from '../../../assets/images/icons/arrow-back.png';

import { Button } from '../../components';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Default Buttons</Text>
        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            primary
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            secondary
            caption="Button"
            onPress={() => {}}
          />
        </View>
        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            primary
            rounded
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            secondary
            rounded
            caption="Button"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Bordered Buttons</Text>
        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            primary
            bordered
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            secondary
            bordered
            caption="Button"
            onPress={() => {}}
          />
        </View>
        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            primary
            bordered
            rounded
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            secondary
            bordered
            rounded
            caption="Button"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Disabled Buttons</Text>
        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            disabled
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            disabled
            bordered
            caption="Button"
            onPress={() => {}}
          />
        </View>
        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            disabled
            rounded
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            disabled
            rounded
            bordered
            caption="Button"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Icon Buttons</Text>
        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            icon={IconImg}
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            secondary
            icon={IconImg}
            caption="Button"
            onPress={() => {}}
          />
        </View>
        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            icon={IconImg}
            rounded
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            icon={IconImg}
            secondary
            rounded
            caption="Button"
            onPress={() => {}}
          />
        </View>
        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            disabled
            rounded
            icon={IconImg}
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            disabled
            rounded
            icon={IconImg}
            caption="Button"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Size</Text>
        <Button
          style={styles.demoButton}
          caption="Button"
          large
          onPress={() => {}}
        />
        <Button style={styles.demoButton} caption="Button" onPress={() => {}} />
        <Button
          style={styles.demoButton}
          small
          caption="Button"
          onPress={() => {}}
        />
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
