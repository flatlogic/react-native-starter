import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { colors, fonts } from '../../styles';

import { Button, RadioGroup, Dropdown } from '../../components';
import Card from '../../components/Card'

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={"Example"}>
        <View style={styles.demoButtonGroupContainer}>
          <Text style={styles.componentSectionTitle}>Default</Text>
          <RadioGroup
          style={styles.demoItem}
          items={['One', 'Two', 'Three']}
          selectedIndex={props.radioGroupsState[0]}
          onChange={index =>
            props.setRadioGroupsState({ ...props.radioGroupsState, 0: index })
          }
        />
        </View>
      </Card>

      <Card title={"Size"} style={{marginTop: 20}}>
        <View style={styles.demoButtonGroupContainer}>
          <Text style={styles.componentSectionTitle}>Large</Text>
          <RadioGroup
            style={{flex: 2}}
            items={['One', 'Two', 'Three']}
            selectedIndex={props.radioGroupsState[0]}
            onChange={index =>
              props.setRadioGroupsState({ ...props.radioGroupsState, 0: index })
            }
            lg
          />
        </View>
        <View style={styles.demoButtonGroupContainer}>
          <Text style={styles.componentSectionTitle}>Medium</Text>
          <RadioGroup
            style={{flex: 2}}
            items={['One', 'Two', 'Three']}
            selectedIndex={props.radioGroupsState[0]}
            onChange={index =>
              props.setRadioGroupsState({ ...props.radioGroupsState, 0: index })
            }
          />
        </View>
        <View style={styles.demoButtonGroupContainer}>
          <Text style={styles.componentSectionTitle}>Small</Text>
          <RadioGroup
            style={{flex: 2}}
            items={['One', 'Two', 'Three']}
            selectedIndex={props.radioGroupsState[0]}
            onChange={index =>
              props.setRadioGroupsState({ ...props.radioGroupsState, 0: index })
            }
            sm
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
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoButtonGroupContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  demoItem: {
    marginVertical: 15,
    flex: 2,
  },
});
