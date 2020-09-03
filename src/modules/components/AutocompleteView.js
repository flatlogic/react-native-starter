import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Input from '../../components/TextInput'
import Card from '../../components/Card'
import { colors, fonts } from '../../styles';
import ModalDropdown from 'react-native-modal-dropdown';
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
          <Input dark type={'bordered'} style={{width: 200}} placeholder={"Place your text"}/>
          {/*<ModalDropdown*/}
          {/*  options={[*/}
          {/*    "Star Wars",*/}
          {/*    "Back to the Future",*/}
          {/*    "The Matrix",*/}
          {/*    "Inception",*/}
          {/*    "Interstellar"*/}
          {/*  ]}*/}
          {/*  onDropdownWillShow={openModal}*/}
          {/*  onDropdownWillHide={closeModal}*/}
          {/*  dropdownStyle={{*/}
          {/*    shadowColor: '#000000',*/}
          {/*    shadowOffset: {*/}
          {/*      width: 0,*/}
          {/*      height: 3,*/}
          {/*    },*/}
          {/*    shadowRadius: 5,*/}
          {/*    shadowOpacity: 1.0,*/}
          {/*  }}*/}
          {/*  adjustFrame={params => {*/}
          {/*    // eslint-disable-next-line no-param-reassign*/}
          {/*    params.left = 0;*/}
          {/*    // eslint-disable-next-line no-param-reassign*/}
          {/*    params.right = 0;*/}
          {/*    return params;*/}
          {/*  }}*/}
          {/*  renderRow={text => (*/}
          {/*    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>*/}
          {/*      <Text style={{ color }}>{text}</Text>*/}
          {/*    </View>*/}
          {/*  )}*/}
          {/*  onSelect={onSelect}*/}
          {/*>*/}
          {/*  <View style={[styles.container, style && style, { borderColor }]}>*/}
          {/*    <Text style={{ color }}>*/}
          {/*      {selectedIndex > -1 && items[selectedIndex]*/}
          {/*        ? items[selectedIndex]*/}
          {/*        : placeholder}*/}
          {/*    </Text>*/}
          {/*  </View>*/}
          {/*</ModalDropdown>*/}
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
