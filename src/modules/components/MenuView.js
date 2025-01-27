import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import Avatar from '../../components/Avatar';
import Card from '../../components/Card';
import { colors, fonts } from '../../styles';
import { backgroundColor } from 'react-native-calendars/src/style';

export default function ComponentsScreen(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'first':
        return {
          first: true
        };
      case 'second':
        return {
          second: true
        }
      case 'third':
        return {
          third: true
        }
      case 'four':
        return {
          four: true
        }
      case 'fifth':
        return {
          fifth: true
        }
      case 'six':
        return {
          six: true
        }
      case 'seven':
        return {
          seven: true
        }
      case 'eight':
        return {
          eight: true
        }
      case 'nine':
        return {
          nine: true
        }
    }
  };
  const [state, dispatch] = React.useReducer(reducer, {first: false, second: false, third: false, four: false, fifth: false, six: false, seven: false, eight: false, nine: false});
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={"Default"}>
        <View style={styles.demoAvatarContainer}>
          <View style={styles.componentAvatarContainer}>
            <TouchableWithoutFeedback onPress={() => dispatch({type: 'first'})}>
              <Text
                style={{
                  padding: 15,
                  backgroundColor: state.first ? colors.bluish : '#fff'
                  , color: colors.primary
                }}
              >
                Item1
              </Text>
            </TouchableWithoutFeedback>
            <Divider style={{backgroundColor: colors.blue}}/>
            <TouchableWithoutFeedback style={styles.item} onPress={() => dispatch({type: 'second'})}>
              <Text style={{ padding: 15, backgroundColor: state.second ? colors.bluish : '#fff', color: colors.primary }}>Item1</Text>
            </TouchableWithoutFeedback>
            <Divider style={{backgroundColor: colors.blue}}/>
            <TouchableWithoutFeedback style={styles.item} onPress={() => dispatch({type: 'third'})}>
              <Text style={{ padding: 15, backgroundColor: state.third ? colors.bluish : '#fff', color: colors.primary }}>Item1</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Card>
      <Card style={{marginTop: 20}} title={"Icon"}>
        <View style={styles.demoAvatarContainer}>
          <View style={styles.componentAvatarContainer}>
            <TouchableWithoutFeedback onPress={() => dispatch({type: 'four'})}>
              <View
                style={{
                  padding: 15,
                  backgroundColor: state.four ? colors.bluish : '#fff',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row'
                }}
              >
                {state.four ? (
                  <Icon name={"star"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                ) : <Icon name={"staro"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                }
                <Text style={{color: colors.primary,}}>Item1</Text>
              </View>
            </TouchableWithoutFeedback>
            <Divider style={{backgroundColor: colors.blue}}/>
            <TouchableWithoutFeedback style={styles.item} onPress={() => dispatch({type: 'fifth'})}>
              <View
                style={{
                  padding: 15,
                  backgroundColor: state.fifth ? colors.bluish : '#fff',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row'
                }}
              >
                {state.fifth ? (
                  <Icon name={"star"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                ) : <Icon name={"staro"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                }
                <Text style={{color: colors.primary,}}>Item1</Text>
              </View>
            </TouchableWithoutFeedback>
            <Divider style={{backgroundColor: colors.blue}}/>
            <TouchableWithoutFeedback style={styles.item} onPress={() => dispatch({type: 'six'})}>
              <View
                style={{
                  padding: 15,
                  backgroundColor: state.six ? colors.bluish : '#fff',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row'
                }}
              >
                {state.six ? (
                  <Icon name={"star"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                ) : <Icon name={"staro"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                }
                <Text style={{color: colors.primary,}}>Item1</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Card>
      <Card style={{marginTop: 20}} title={"Disabled"}>
        <View style={styles.demoAvatarContainer}>
          <View style={styles.componentAvatarContainer}>
            <TouchableWithoutFeedback onPress={() => dispatch({type: 'seven'})}>
              <View
                style={{
                  padding: 15,
                  backgroundColor: state.seven ? colors.bluish : '#fff',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row'
                }}
              >
                {state.seven ? (
                  <Icon name={"star"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                ) : <Icon name={"staro"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                }
                <Text style={{color: colors.primary,}}>Item1</Text>
              </View>
            </TouchableWithoutFeedback>
            <Divider style={{backgroundColor: colors.blue}}/>
            <TouchableWithoutFeedback style={styles.item}>
              <View
                style={{
                  padding: 15,
                  backgroundColor: state.eight ? colors.bluish : '#fff',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row'
                }}
              >
                {state.eight ? (
                  <Icon name={"star"} size={20} style={{marginRight: 15}} color={"#ABACE5"}/>
                ) : <Icon name={"staro"} size={20} style={{marginRight: 15}} color={'#ABACE5'}/>
                }
                <Text style={{color: "#ABACE5",}}>Item1</Text>
              </View>
            </TouchableWithoutFeedback>
            <Divider style={{backgroundColor: colors.blue}}/>
            <TouchableWithoutFeedback style={styles.item} onPress={() => dispatch({type: 'nine'})}>
              <View
                style={{
                  padding: 15,
                  backgroundColor: state.nine ? colors.bluish : '#fff',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row'
                }}
              >
                {state.nine ? (
                  <Icon name={"star"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                ) : <Icon name={"staro"} size={20} style={{marginRight: 15}} color={colors.primary}/>
                }
                <Text style={{color: colors.primary,}}>Item1</Text>
              </View>
            </TouchableWithoutFeedback>
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
  demoAvatarContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 15,
  },
  componentAvatarContainer: {
    flex: 2,
    justifyContent: 'space-between',
  },
  item: {
    marginVertical: 15,
  },
});
