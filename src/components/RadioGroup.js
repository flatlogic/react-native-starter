import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, View, Text } from 'react-native';

import { colors } from '../styles';

export default function RNSRadioGroup({
  items,
  selectedIndex,
  onChange,
  style,
  underline,
}) {
  return (
    <View
      style={[styles.container, underline && styles.underline, style && style]}
    >
      {items &&
        items.map((item, index) => {
          let isActive = false;
          if (selectedIndex !== undefined && selectedIndex === index)
            isActive = true;

          let activeStyle = styles.itemActive;
          if (underline) activeStyle = styles.itemActiveUnderline;

          let activeTextStyle = styles.textActive;
          if (underline) activeTextStyle = styles.textActiveUnderline;

          return (
            <TouchableOpacity
              onPress={() => onChange(index)}
              key={item.id || item}
              style={[
                styles.item,
                underline && styles.itemUnderline,
                isActive && activeStyle,
              ]}
            >
              <Text
                style={[
                  styles.text,
                  underline && styles.textUnderline,
                  isActive && activeTextStyle,
                ]}
              >
                {item.value || item}
              </Text>
              {underline && isActive && (
                <View
                  style={{
                    height: 5,
                    borderBottomColor: colors.primary,
                    borderBottomWidth: 3,
                    position: 'absolute',
                  }}
                />
              )}
            </TouchableOpacity>
          );
        })}
    </View>
  );
}

RNSRadioGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  secondary: PropTypes.bool,
  rounded: PropTypes.bool,
  underline: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
  },
  underline: {
    borderWidth: 0,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  itemUnderline: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#e3e3e3',
  },
  itemActive: {
    backgroundColor: colors.primary,
  },
  itemActiveUnderline: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  text: {
    color: colors.primary,
  },
  textUnderline: {
    color: '#a6a6a6',
  },
  textActive: {
    color: colors.white,
  },
  textActiveUnderline: {
    color: colors.primary,
  },
};
