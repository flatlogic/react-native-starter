import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import { colors, fonts } from '../styles';

const borderRadius = 40;

export default function RNSButton(props) {
  const caption = props.caption && props.caption.toUpperCase();
  let icon;
  if (props.icon) {
    icon = (
      <Image
        resizeMode="contain"
        source={props.icon}
        style={[styles.icon, props.iconColor && { tintColor: props.iconColor }]}
      />
    );
  }

  let content;

  if (props.bordered) {
    const borderedStyle = [
      props.style,
      styles.container,
      props.small && styles.containerSmall,
      props.large && styles.containerLarge,
      styles.button,
      props.small && styles.buttonSmall,
      styles.border,
      props.primary && {
        borderColor: colors.primary,
      },
      props.secondary && {
        borderColor: colors.secondary,
      },
      props.bgColor && {
        borderColor: props.bgColor,
      },
      props.disabled && {
        borderColor: colors.grey,
      },
      props.rounded && styles.rounded,
    ];
    const textStyle = [
      styles.caption,
      props.small && styles.captionSmall,
      styles.secondaryCaption,
      icon && styles.captionWithIcon,
      props.primary && {
        color: colors.primary,
      },
      props.secondary && {
        color: colors.secondary,
      },
      props.bgColor && {
        color: props.bgColor,
      },
      props.textColor && {
        color: props.textColor,
      },
      props.disabled && {
        color: colors.grey
      }
    ];

    content = (
      <View style={borderedStyle}>
        {icon && <View>{icon}</View>}
        {props.loading && <ActivityIndicator color="white" />}
        {!props.loading && props.caption && (
          <Text style={textStyle}>{caption}</Text>
        )}
        {props.children && props.children}
      </View>
    );
  } else {
    const isPrimary = props.primary || (!props.primary && !props.secondary);
    let gradientArray =
      props.bgGradientStart && props.bgGradientEnd
        ? [props.bgGradientStart, props.bgGradientEnd]
        : undefined;

    if (!gradientArray) {
      gradientArray = isPrimary
        ? [colors.primaryGradientStart, colors.primaryGradientEnd]
        : [colors.secondaryGradientStart, colors.secondaryGradientEnd];
    }

    if (props.bgColor) {
      gradientArray = [props.bgColor, props.bgColor];
    }

    if (props.disabled) {
      gradientArray = ["#BBB", "#BBB"]
    }

    content = (
      <LinearGradient
        start={{ x: 0.5, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={gradientArray}
        style={[
          styles.container,
          props.style,
          styles.button,
          props.small && styles.containerSmall,
          props.large && styles.containerLarge,
          props.small && styles.buttonSmall,
          styles.primaryButton,
          props.rounded && { borderRadius },
          props.action && styles.action,
        ]}
      >
        {icon && <View>{icon}</View>}
        {props.loading && <ActivityIndicator color="white" />}
        {!props.loading && props.caption && (
          <Text
            style={[
              styles.caption,
              props.small && styles.captionSmall,
              icon && styles.captionWithIcon,
              styles.primaryCaption,
              props.primary && {
                color: colors.primaryButtonText,
              },
              props.secondary && {
                color: colors.secondaryButtonText,
              },
              props.bgColor && {
                color: props.bgColor,
              },
              props.textColor && {
                color: props.textColor,
              },
            ]}
          >
            {caption}
          </Text>
        )}
        {!props.loading && props.children && props.children}
      </LinearGradient>
    );
  }

  return (
    <TouchableOpacity
      accessibilityTraits="button"
      onPress={props.onPress}
      activeOpacity={props.disabled ? 1 : 0.8}
      style={[
        styles.container,
        props.small && styles.containerSmall,
        props.large && styles.containerLarge,
        props.style,
      ]}
      {...props}
    >
      {content}
    </TouchableOpacity>
  );
}

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
    fontFamily: fonts.primaryBold,
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
