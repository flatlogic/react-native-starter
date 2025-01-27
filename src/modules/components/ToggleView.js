import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import {Switch} from '../../components/Switch'
import Input from '../../components/TextInput';

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {

  const reducer = (state, action) => {
    switch(action.type) {
      case "toggleSwitch":
        return {
          ...state,
          switchValue: !state.switchValue
        }
      case "toggleSwitch2":
        return {
          ...state,
          switch2Value: !state.switch2Value
        }
      case "toggleSwitch3":
        return {
          ...state,
          switch3Value: !state.switch3Value
        }
      case "toggleSwitch4":
        return {
          ...state,
          switch4Value: !state.switch4Value
        }
      case "toggleSwitch5":
        return {
          ...state,
          switch5Value: !state.switch5Value
        }
      case "toggleSwitch6":
        return {
          ...state,
          switch6Value: !state.switch6Value
        }
      case "toggleSwitch7":
        return {
          ...state,
          switch7Value: !state.switch7Value
        }
    }
  }

  const [state, dispatch] = React.useReducer(reducer, {
    switchValue: true,
    switch2Value: false,
    switch3Value: true,
    switch4Value: false,
    switch5Value: true,
    switch6Value: false,
    switch7Value: true,
  })
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'State'}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Checked</Text>
          <Switch value={state.switchValue}
                       onValueChange={(val) => dispatch({type: 'toggleSwitch'})} />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Unchecked</Text>
          <Switch value={state.switch2Value}
                  onValueChange={(val) => dispatch({type: 'toggleSwitch2'})}/>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Disabled Checked</Text>
          <Switch value={state.switch3Value}
                  onValueChange={(val) => dispatch({type: 'toggleSwitch3'})} disabled/>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Disabled Unchecked</Text>
          <Switch value={state.switch4Value}
                  onValueChange={(val) => dispatch({type: 'toggleSwitch4'})} disabled/>
        </View>
      </Card>
      <Card title={'Title'} style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Right Text</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Switch value={state.switch5Value}
                    onValueChange={(val) => dispatch({type: 'toggleSwitch5'})}/>
          <Text style={{marginLeft: 10}}>Place your text</Text>
          </View>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Left Text</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 10}}>Place your text</Text>
            <Switch value={state.switch6Value}
                    onValueChange={(val) => dispatch({type: 'toggleSwitch6'})}/>
          </View>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Text disabled</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Switch value={state.switch7Value}
                    onValueChange={(val) => dispatch({type: 'toggleSwitch7'})}/>
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
