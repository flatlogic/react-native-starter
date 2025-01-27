import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Input from '../../components/TextInput'
import Card from '../../components/Card'
import Autocomplete from '../../components/Autocomplete'
import { colors, fonts } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';


export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={"Default"}>
        <View style={styles.demoAutocompleteContainer}>
          <Text style={styles.componentSectionTitle}>Default</Text>
          <Autocomplete />
        </View>
        <View style={styles.demoAutocompleteContainer}>
          <Text style={styles.componentSectionTitle}>Disabled</Text>
          <Input dark type={'bordered'} style={{width: 200}} disabled placeholder={"Place your text"}/>
        </View>
      </Card>
      <Card style={{marginTop: 20}} title={"Styling"}>
        <View style={styles.demoAutocompleteContainer}>
          <Text style={styles.componentSectionTitle}>Icon</Text>
          <Input dark type={'bordered'} style={{width: 200}} placeholder={"Place your text"} iconRight={<Icon name={'staro'} size={18} color={colors.primary} />}/>
        </View>
        <View style={styles.demoAutocompleteContainer}>
          <Text style={styles.componentSectionTitle}>Label</Text>
          <Input dark type={'bordered'} placeholder={"Place your text"} style={{width: 200}} label={"Movies"}/>
        </View>
      </Card>
      <Card style={{marginTop: 20}} title={"Settings"}>
        <View style={styles.demoAutocompleteContainer}>
          <Text style={styles.componentSectionTitle}>Render Item</Text>
          <Input dark type={'bordered'} placeholder={"Place your text"} style={{width: 200}}/>
        </View>
        <View style={styles.demoAutocompleteContainer}>
          <Text style={styles.componentSectionTitle}>Placeholder Data</Text>
          <Input dark type={'bordered'} placeholder={"123 for no result"} style={{width: 200}}/>
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
  demoAutocompleteContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
  },
});
