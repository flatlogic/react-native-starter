import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';

import { Button, RadioGroup, Dropdown } from '../../components';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Radio Group</Text>

        <RadioGroup
          style={styles.demoItem}
          items={['One', 'Two', 'Three']}
          selectedIndex={props.radioGroupsState[0]}
          onChange={index =>
            props.setRadioGroupsState({ ...props.radioGroupsState, 0: index })
          }
        />

        <View
          style={{
            height: 1,
            alignSelf: 'stretch',
            backgroundColor: colors.bluish,
          }}
        />

        <Text style={styles.componentSectionTitle}>Tab Group</Text>

        <RadioGroup
          underline
          style={styles.demoItem}
          items={['One', 'Two', 'Three', 'Four']}
          selectedIndex={props.radioGroupsState[1]}
          onChange={index =>
            props.setRadioGroupsState({ ...props.radioGroupsState, 1: index })
          }
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
  },
  demoItem: {
    marginVertical: 15,
  },
});
