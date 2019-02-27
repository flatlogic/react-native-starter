import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

import { colors, fonts } from '../styles';

function applyGeneralStyles(props) {
  return [
    props.style && props.style,
    props.bold && styles.bold,
    props.light && styles.light,
    props.white && styles.white,
    props.underline && styles.underline,
    props.hCenter && { textAlign: 'center' },
    props.lineThrough && styles.lineThrough,
    props.color && { color: props.color },
    props.size && { fontSize: props.size },
  ];
}

export function Text(props) {
  const finalStyle = [styles.default, ...applyGeneralStyles(props)];

  return <RNText {...props} style={finalStyle} />;
}

export function Title(props) {
  const finalStyle = [
    styles.default,
    styles.title,
    ...applyGeneralStyles(props),
  ];

  return <RNText {...props} style={finalStyle} />;
}

export function Caption(props) {
  const finalStyle = [
    styles.default,
    styles.caption,
    ...applyGeneralStyles(props),
  ];

  return <RNText {...props} style={finalStyle} />;
}

const styles = StyleSheet.create({
  default: {
    fontFamily: fonts.primaryRegular,
  },
  bold: {
    fontFamily: fonts.primaryBold,
  },
  light: {
    fontFamily: fonts.primaryLight,
  },
  title: {
    fontSize: 18,
  },
  caption: {
    fontSize: 13,
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.gray,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  white: {
    color: colors.white,
  },
});
