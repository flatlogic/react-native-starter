import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import { colors, fonts } from '../../styles';

import { Button, RadioGroup, Dropdown } from '../../components';
import Card from '../../components/Card';

export default function ComponentsScreen(props) {
  const [tab1State, setTab1State] = React.useState(0);
  const [tab2State, setTab2State] = React.useState(0);
  const [tab3State, setTab3State] = React.useState(0);
  const items = ['One', 'Two', 'Three'];
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Title'}>
        <View style={styles.demoButtonGroupContainer}>
          <RadioGroup
            style={styles.demoItem}
            items={items}
            selectedIndex={tab1State}
            onChange={index => setTab1State(index)}
            underline
          />
          <Text>{items[tab1State]}</Text>
        </View>
      </Card>
      <Card title={'Icon'} style={{ marginTop: 20 }}>
        <View style={styles.demoButtonGroupContainer}>
          <RadioGroup
            style={styles.demoItem}
            items={[
              <Icon name={'staro'} size={20} />,
              <Icon name={'staro'} size={20} />,
              <Icon name={'staro'} size={20} />,
            ]}
            selectedIndex={tab2State}
            onChange={index => setTab2State(index)}
            underline
          />
          <Text>{items[tab2State]}</Text>
        </View>
      </Card>
      <Card title={'Icon Title'} style={{ marginTop: 20 }}>
        <View style={styles.demoButtonGroupContainer}>
          <RadioGroup
            style={styles.demoItem}
            items={[
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  color: 'inherit',
                }}
              >
                <Text style={{ color: 'inherit' }}>One</Text>
                <Icon name={'staro'} size={20} style={{ marginLeft: 5 }} />
              </View>,
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  color: 'inherit',
                }}
              >
                <Text>Two</Text>
                <Icon name={'staro'} size={20} style={{ marginLeft: 5 }} />
              </View>,
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  color: 'inherit',
                }}
              >
                <Text>Three</Text>
                <Icon name={'staro'} size={20} style={{ marginLeft: 5 }} />
              </View>,
            ]}
            selectedIndex={tab3State}
            onChange={index => setTab3State(index)}
            underline
          />
          <Text>{items[tab3State]}</Text>
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
    flex: 2,
  },
});
