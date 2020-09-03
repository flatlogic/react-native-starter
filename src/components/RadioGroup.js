import React from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import { colors } from '../styles';

export default function RNSRadioGroup({
  items,
  selectedIndex,
  onChange,
  style,
  underline,
  topUnderline,
  mainColor,
  lg,
  sm,
}) {
  let itemStyle = [styles.item];

  if (lg) {
    itemStyle = styles.itemLarge;
  } else if (sm) {
    itemStyle = styles.itemSmall;
  }

  return (
    <View
      style={[
        styles.container,
        topUnderline && styles.underline,
        underline && styles.underline,
        style && style,
        mainColor && {
          borderColor: mainColor,
        },
      ]}
    >
      {items &&
        items.map((item, index) => {
          let isActive = false;
          if (selectedIndex !== undefined && selectedIndex === index)
            isActive = true;

          let activeStyle = styles.itemActive;
          if (underline)
            activeStyle = [
              styles.itemActiveUnderline,
              mainColor && { borderBottomColor: mainColor },
            ];

          if (topUnderline)
            activeStyle = [
              styles.itemActiveTopUnderline,
              mainColor && { borderTopColor: mainColor },
            ];

          let activeTextStyle = styles.textActive;
          if (underline || topUnderline) activeTextStyle = styles.textActiveUnderline;

          return (
            <TouchableOpacity
              onPress={() => onChange(index)}
              key={item.id || item}
              style={[
                itemStyle,
                underline && styles.itemUnderline,
                isActive && activeStyle,
              ]}
            >
              <Text
                style={[
                  styles.text,
                  topUnderline && styles.textUnderline,
                  underline && styles.textUnderline,
                  isActive && activeTextStyle,
                  isActive && mainColor && { color: mainColor },
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
  itemLarge: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  itemSmall: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  itemTopUnderline: {
    borderTopWidth: 0.5,
    borderTopColor: '#e3e3e3',
  },
  itemUnderline: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#e3e3e3',
  },
  itemActive: {
    backgroundColor: colors.primary,
  },
  itemActiveTopUnderline: {
    borderTopWidth: 2,
    borderTopColor: colors.primary,
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
