import React from 'react';
import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Input from './TextInput';
import { colors } from '../styles';

export default function RNSAutocomplete({
  items = [],
  color = colors.primary,
  onSelect = () => {},
  style,
  borderColor,
  selectedIndex,
  placeholder = 'Place your text',
}) {
  return (
    <SelectDropdown
      data={items}
      defaultValueByIndex={selectedIndex}
      dropdownStyle={{ shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, shadowOpacity: 1 }}
      renderItem={text => (
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ color }}>{text}</Text>
        </View>
      )}
      onSelect={(item, index) => onSelect(index, item)}
      search
      searchPlaceHolder="Search"
      renderButton={item => (
        <View>
          <Input dark type="bordered" style={[{ width: 200 }, style, borderColor && { borderColor }]} placeholder={placeholder} value={item || ''} pointerEvents="none" editable={false} />
        </View>
      )}
    />
  );
}
