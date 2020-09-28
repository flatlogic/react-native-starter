import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { colors, fonts } from '../../styles';

import { Button, RadioGroup, Dropdown } from '../../components';
import Card from '../../components/Card'

export default function ComponentsScreen(props) {
  const [state1, setState1] = React.useState(0);
  const [state2, setState2] = React.useState(0);
  const [state3, setState3] = React.useState(0)
  const [state4, setState4] = React.useState(0)
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
          selectedIndex={state1}
          onChange={index =>
            setState1(index)
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
            selectedIndex={state2}
            onChange={index =>
              setState2(index)
            }
            lg
          />
        </View>
        <View style={styles.demoButtonGroupContainer}>
          <Text style={styles.componentSectionTitle}>Medium</Text>
          <RadioGroup
            style={{flex: 2}}
            items={['One', 'Two', 'Three']}
            selectedIndex={state3}
            onChange={index =>
              setState3(index)
            }
          />
        </View>
        <View style={styles.demoButtonGroupContainer}>
          <Text style={styles.componentSectionTitle}>Small</Text>
          <RadioGroup
            style={{flex: 2}}
            items={['One', 'Two', 'Three']}
            selectedIndex={state4}
            onChange={index =>
              setState4(index)
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
