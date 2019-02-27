import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet, TextInput } from 'react-native';

import { fonts, colors } from '../styles';

class RNSTextInput extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'bordered']),
    style: PropTypes.number,
    placeholderTextColor: PropTypes.string,
  };

  static defaultProps = {
    type: 'primary',
  };

  render() {
    const finalStyle = [
      styles.default,
      this.props.type === 'bordered' && styles.bordered,
      this.props.dark && styles.dark,
      this.props.style && this.props.style,
    ];

    return (
      <View style={{ alignSelf: 'stretch', flexDirection: 'column' }}>
        <TextInput
          placeholderTextColor={this.props.placeholderTextColor || colors.white}
          underlineColorAndroid="white"
          {...this.props}
          style={finalStyle}
        />
        {Platform.OS === 'ios' && (
          <View style={{ height: 0.5, backgroundColor: 'white' }} />
        )}
      </View>
    );
  }
}

const HEIGHT = 40;

const styles = StyleSheet.create({
  default: {
    height: HEIGHT,
    color: 'white',
    fontFamily: fonts.primaryRegular,
    ...Platform.select({
      android: {
        paddingLeft: 5,
        opacity: 0.9,
      },
    }),
  },
  bordered: {
    borderWidth: 0.5,
    borderColor: colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  dark: {
    color: colors.gray,
  },
  primary: {
    borderRadius: HEIGHT / 2,
    backgroundColor: 'transparent',
  },
});

export default RNSTextInput;
