/**
 * @flow
 * @providesModule RNSSegmentedControl
 */

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

// $FlowFixMe
const RNSSegmentedControl = ({
  type,
  values,
  selectedIndex,
  selectionColor,
  onChange,
  style,
}) => {
  const segments = values.map((value, index) => (
    <Segment
      type={type}
      key={value}
      value={value}
      isSelected={index === selectedIndex}
      selectionColor={selectionColor}
      onPress={() => onChange(index)}
    />
  ));
  return <View style={[styles.container, style]}>{segments}</View>;
};

function Segment({ isSelected, onPress, selectionColor, value, type }) {
  let selectedButtonStyle;
  if (isSelected) {
    selectedButtonStyle = { borderColor: selectionColor };
  }
  let deselectedLabelStyle;
  if (!isSelected && Platform.OS === 'android') {
    deselectedLabelStyle = styles.deselectedLabel;
  }
  const title = value && value.toUpperCase();

  const accessibilityTraits = ['button'];
  if (isSelected) {
    accessibilityTraits.push('selected');
  }

  return (
    <TouchableOpacity
      accessibilityTraits={accessibilityTraits}
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.button,
        type === 'default' && styles.default,
        type === 'underline' && styles.underline,
        selectedButtonStyle,
      ]}
    >
      <Text style={[styles.label, deselectedLabelStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const HEIGHT = 32;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        paddingBottom: 6,
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  },
  button: {
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  default: {
    ...Platform.select({
      ios: {
        height: HEIGHT,
        paddingHorizontal: 20,
        borderRadius: HEIGHT / 2,
        borderWidth: 1,
      },
      android: {
        paddingBottom: 6,
        paddingHorizontal: 10,
        borderBottomWidth: 3,
        marginRight: 10,
      },
    }),
  },
  underline: {
    paddingBottom: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    marginRight: 10,
  },
  label: {
    letterSpacing: 1,
    fontSize: 12,
    color: 'white',
    opacity: 0.82,
  },
  deselectedLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default RNSSegmentedControl;
