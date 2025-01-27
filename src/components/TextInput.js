import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  TextInput,
  Image,
  Text,
} from 'react-native';

import { fonts, colors } from '../styles';

const RNSTextInput = ({
  type,
  dark,
  style,
  placeholderTextColor,
  disabled,
  iconRight,
  iconLeft,
  label,
  caption,
  ...restProps
}) => {
  const finalStyle = [
    styles.default,
    type === 'bordered' && styles.bordered,
    dark && styles.dark,
    disabled && styles.disabled,
    disabled && type === "bordered" && styles.disabledBordered,
    style && style,
  ];



  return (
    <View>
      {label && (
        <Text style={{ fontSize: 12, color: '#686868', paddingBottom: 5 }}>
          {label}
        </Text>
      )}
      <View
        style={[{ flexDirection: 'row', alignItems: 'center' }, finalStyle]}
      >
        {iconLeft && <View style={{ paddingRight: 15 }}>{iconLeft}</View>}
        <TextInput
          placeholderTextColor={
            (disabled && '#A5A6D9') ||
            placeholderTextColor ||
            (dark ? colors.primary : colors.white)
          }
          {...restProps}
          editable={!disabled}
          style={{flexDirection: 'row', flex: 1}}
        />
        {iconRight && (
          <View style={{ marginLeft: 'auto', paddingLeft: 20 }}>
            {iconRight}
          </View>
        )}
        {Platform.OS === 'ios' && (
          <View
            style={{ height: 5, backgroundColor: colors.primary }}
          />
        )}
      </View>
      {caption && (
        <Text style={{ fontSize: 12, color: '#686868', paddingTop: 5 }}>
          {caption}
        </Text>
      )}
    </View>
  );
};

const HEIGHT = 40;

const styles = StyleSheet.create({
  default: {
    height: HEIGHT,
    color: 'white',
    fontFamily: fonts.primaryRegular,
    borderBottomWidth: .7,
    borderBottomColor: colors.white,
    ...Platform.select({
      android: {
        paddingLeft: 5,
        opacity: 0.9,
      },
    }),
  },
  bordered: {
    borderWidth: .7,
    borderColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  disabled: {
    borderBottomWidth: .7,
    borderBottomColor: '#9E9FD8'
  },
  disabledBordered: {
    borderBottomWidth: .7,
    borderBottomColor: '#9E9FD8',
    borderWidth: .7,
    borderColor: '#9E9FD8',
  },
  dark: {
    color: colors.gray,
    borderColor: colors.primary,
    borderBottomColor: colors.primary
  },
  primary: {
    borderRadius: HEIGHT / 2,
    backgroundColor: 'transparent',
  },
});

export default RNSTextInput;
