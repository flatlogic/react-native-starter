import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import { Colors, Fonts } from '../constants';

const borderRadius = 40;

export default function RNSButton(props) {
  const caption = props.caption && props.caption.toUpperCase();
  let icon;
  if (props.icon) {
    icon = <Image resizeMode="contain" source={props.icon} style={styles.icon} />;
  }

  let content;

  if (props.bordered) {
    const borderedStyle = [
      styles.button,
      props.small && styles.buttonSmall,
      styles.border,
      props.primary && {
        borderColor: Colors.primary,
      },
      props.secondary && {
        borderColor: Colors.secondary,
      },
      props.bgColor && {
        borderColor: props.bgColor,
      },
      props.rounded && styles.rounded,
    ];
    const textStyle = [
      styles.caption,
      props.small && styles.captionSmall,
      styles.secondaryCaption,
      icon && styles.captionWithIcon,
      props.primary && {
        color: Colors.primary,
      },
      props.secondary && {
        color: Colors.secondary,
      },
      props.bgColor && {
        color: props.bgColor,
      },
      props.textColor && {
        color: props.textColor,
      },
    ];

    content = (
      <View style={borderedStyle}>
        { icon && (
          <View>
            {icon}
          </View>
        )}
        { props.loading && (
          <ActivityIndicator color="white" />
        )}
        { !props.loading && props.caption && (
          <Text style={textStyle}>
            {caption}
          </Text>
        )}
        { props.children && props.children }
      </View>
    );
  } else {
    const isPrimary = props.primary || (!props.primary && !props.secondary);
    let gradientArray = props.bgGradientStart && props.bgGradientEnd ? [
      props.bgGradientStart, props.bgGradientEnd,
    ] : undefined;

    if (!gradientArray) {
      gradientArray = isPrimary ? [Colors.primaryGradientStart, Colors.primaryGradientEnd] :
        [Colors.secondaryGradientStart, Colors.secondaryGradientEnd];
    }

    if (props.bgColor) {
      gradientArray = [props.bgColor, props.bgColor];
    }

    content = (
      <LinearGradient
        start={[0.5, 1]}
        end={[1, 1]}
        colors={gradientArray}
        style={[
          styles.button,
          props.small && styles.buttonSmall,
          styles.primaryButton,
          props.rounded && { borderRadius },
          props.action && styles.action,
        ]}
      >
        { icon && (
          <View>
            {icon}
          </View>
        )}
        { props.loading && (
          <ActivityIndicator color="white" />
        )}
        { !props.loading && props.caption && (
          <Text
            style={[
              styles.caption,
              props.small && styles.captionSmall,
              icon && styles.captionWithIcon,
              styles.primaryCaption,
            ]}
          >
            {caption}
          </Text>
        )}
        { !props.loading && props.children && props.children }
      </LinearGradient>
    );
  }

  return (
    <TouchableOpacity
      accessibilityTraits="button"
      onPress={props.onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        props.small && styles.containerSmall,
        props.large && styles.containerLarge,
        props.style,
      ]}
    >
      {content}
    </TouchableOpacity>
  );
}

RNSButton.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  icon: PropTypes.number,
  caption: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.shape({}),
  ]),
  children: PropTypes.element,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  bgGradientStart: PropTypes.string,
  bgGradientEnd: PropTypes.string,
  action: PropTypes.bool,
  loading: PropTypes.bool,
};

const HEIGHT = 40;
const HEIGHT_SMALL = 30;
const HEIGHT_LARGE = 50;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    // borderWidth: 1 / PixelRatio.get(),
  },
  containerSmall: {
    height: HEIGHT_SMALL,
  },
  containerLarge: {
    height: HEIGHT_LARGE,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  buttonSmall: {
    paddingHorizontal: 20,
  },
  border: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  primaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  rounded: {
    borderRadius: HEIGHT_LARGE / 2,
  },
  icon: {
    maxHeight: HEIGHT - 20,
    maxWidth: HEIGHT - 20,
  },
  caption: {
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: Fonts.primaryBold,
  },
  captionSmall: {
    fontSize: 12,
    fontWeight: '500',
  },
  captionWithIcon: {
    marginLeft: 12,
  },
  primaryCaption: {
    color: 'white',
  },
  secondaryCaption: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  action: {
    borderRadius: 20,
    height: HEIGHT,
    width: HEIGHT,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
