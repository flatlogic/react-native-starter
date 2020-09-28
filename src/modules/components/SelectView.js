import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import Dropdown from '../../components/Dropdown'

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  const [select1, setSelect1] = React.useState(-1);
  const [select2, setSelect2] = React.useState(2);
  const [select3, setSelect3] = React.useState(-1);
  const [select4, setSelect4] = React.useState(1);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Default'}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Default</Text>
          <Dropdown
            placeholder="Select Option"
            items={[
              'Option 1',
              'Option 2',
              'Option 3',
              'Option 4',
              'Option 5',
              'Option 6',
              'Option 7',
              'Option 8',
            ]}
            onSelect={index =>
              setSelect1(parseInt(index, 10))
            }
            selectedIndex={select1}
            style={{flex: 1}}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Disabled</Text>
          <Dropdown
            placeholder="Select Option"
            items={[
              'Option 1',
              'Option 2',
              'Option 3',
              'Option 4',
              'Option 5',
              'Option 6',
              'Option 7',
              'Option 8',
            ]}
            onSelect={index =>
              props.setSelectedSizeIndex1(parseInt(index, 10))
            }
            selectedIndex={props.selectedSizeIndex1}
            style={{flex: 1}}
            disabled
          />
        </View>
          <View style={styles.demoInputContainer}>
            <Text style={styles.componentSectionTitle}>Initial Value</Text>
            <Dropdown
              placeholder="Option 1"
              items={[
                'Option 1',
                'Option 2',
                'Option 3',
                'Option 4',
                'Option 5',
                'Option 6',
                'Option 7',
                'Option 8',
              ]}
              onSelect={index =>
                setSelect2(parseInt(index, 10))
              }
              selectedIndex={select2}
              style={{flex: 1}}
              defaultIndex={1}
            />
          </View>
      </Card>
      <Card title={'Multiselect'} style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Multiselect</Text>
          <Dropdown
            placeholder="Select Option"
            items={[
              'Option 1',
              'Option 2',
              'Option 3',
              'Option 4',
              'Option 5',
              'Option 6',
              'Option 7',
              'Option 8',
            ]}
            onSelect={index =>
              setSelect3(parseInt(index, 10))
            }
            selectedIndex={select3}
            style={{flex: 1}}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Inital Value</Text>
          <Dropdown
            placeholder="Select Option"
            items={[
              'Option 1',
              'Option 2',
              'Option 3',
              'Option 4',
              'Option 5',
              'Option 6',
              'Option 7',
              'Option 8',
            ]}
            onSelect={index =>
              setSelect4(parseInt(index, 10))
            }
            selectedIndex={select4}
            style={{flex: 1}}
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
  demoInputContainer: {
    flex: 1,
    marginVertical: 15,
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    paddingBottom: 10
  },
});
