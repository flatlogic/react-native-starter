import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { colors, fonts } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
import Input from '../components/TextInput'

export default function RNSAutocomplete({
  items,
  color,
  onSelect,
  style,
  borderColor,
  selectedIndex,
  placeholder,
}) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const openModal = () => setDropdownOpen(true);

  const closeModal = () => setDropdownOpen(false);

  return (
    <ModalDropdown
      options={items}
      onDropdownWillShow={openModal}
      onDropdownWillHide={closeModal}
      dropdownStyle={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
      }}
      adjustFrame={params => {
        // eslint-disable-next-line no-param-reassign
        params.left = 0;
        // eslint-disable-next-line no-param-reassign
        params.right = 0;
        return params;
      }}
      renderRow={text => (
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ color }}>{text}</Text>
        </View>
      )}
      onSelect={onSelect}
    >
      <Input ref={(btn) => console.log(btn.measure)}dark type={'bordered'} style={{width: 200}} placeholder={"Place your text"}/>
    </ModalDropdown>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.primaryRegular,
    color: '#686868',
  },
  headerDescription: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
