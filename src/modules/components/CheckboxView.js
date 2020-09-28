import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import { Checkbox } from 'react-native-paper';

import { colors, fonts } from '../../styles';
import { Switch } from '../../components/Switch';

export default function ComponentsScreen(props) {
  const [checked, setChecked] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(true);
  const [checked4, setChecked4] = React.useState(true);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(true);
  const [checked8, setChecked8] = React.useState(true);
  const [checked9, setChecked9] = React.useState(false);
  const [checked10, setChecked10] = React.useState(false);
  const [checked11, setChecked11] = React.useState(true);
  const [checked12, setChecked12] = React.useState(false);
  const [checked13, setChecked13] = React.useState(true);


  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Style'}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Shape</Text>
          <View style={{flexDirection: 'row'}}>
            <Checkbox.Android status={checked ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked(!checked);
                              }}
                              theme={{ roundness: 8 }}
                              label={"required"}
                              color={colors.secondary}
                              rounded
            />
            <Checkbox.Android status={checked2 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked2(!checked2);
                              }}
                              color={colors.primary}
            />
          </View>
        </View>
      </Card>
      <Card title={'State'} style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Checked</Text>
          <View style={{flexDirection: 'row'}}>
            <Checkbox.Android status={checked3 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked3(!checked3);
                              }}
                              theme={{ roundness: 8 }}
                              color={colors.secondary}
            />
            <Checkbox.Android status={checked4 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked4(!checked4);
                              }}
                              color={colors.primary}
            />
          </View>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Unchecked</Text>
          <View style={{flexDirection: 'row'}}>
            <Checkbox.Android status={checked5 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked5(!checked5);
                              }}
                              theme={{ roundness: 8 }}
                              color={colors.secondary}
            />
            <Checkbox.Android status={checked6 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked6(!checked6);
                              }}
                              color={colors.primary}
            />
          </View>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Disabled Checked</Text>
          <View style={{flexDirection: 'row'}}>
            <Checkbox.Android status={checked7 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked7(!checked7);
                              }}
                              theme={{ roundness: 8 }}
                              color={colors.secondary}
                              disabled
            />
            <Checkbox.Android status={checked8 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked8(!checked8);
                              }}
                              color={colors.primary}
                              disabled
            />
          </View>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Disabled Unchecked</Text>
          <View style={{flexDirection: 'row'}}>
            <Checkbox.Android status={checked9 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked9(!checked9);
                              }}
                              theme={{ roundness: 8 }}
                              color={colors.secondary}
                              disabled
            />
            <Checkbox.Android status={checked10 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked10(!checked10);
                              }}
                              color={colors.primary}
                              disabled
            />
          </View>
        </View>
      </Card>
      <Card title={'Title'} style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Right Text</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox.Android status={checked11 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked11(!checked11);
                              }}
                              color={colors.primary}
            />
            <Text style={{marginLeft: 10}}>Place your text</Text>
          </View>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Left Text</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 10}}>Place your text</Text>
            <Checkbox.Android status={checked12 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked12(!checked12);
                              }}
                              color={colors.primary}
            />
          </View>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Text disabled</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox.Android status={checked13 ? 'checked' : 'unchecked'}
                              onPress={() => {
                                setChecked13(!checked13);
                              }}
                              color={colors.secondary}
                              disabled
            />
            <Text style={{color: colors.grey, marginLeft: 10}}>Place your text</Text>
          </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
  },
});
