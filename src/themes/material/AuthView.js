import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Keyboard,
  Platform,
  LayoutAnimation,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { TextInput, Button } from '../../components';

const FORM_STATES = {
  LOGIN: 0,
  REGISTER: 1,
};

export default class AuthScreen extends React.Component {
  state = {
    anim: new Animated.Value(0),

    // Current visible form
    formState: FORM_STATES.LOGIN,
    isKeyboardVisible: false,
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      Platform.select({ android: 'keyboardDidShow', ios: 'keyboardWillShow' }),
      this._keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      Platform.select({ android: 'keyboardDidHide', ios: 'keyboardWillHide' }),
      this._keyboardDidHide.bind(this),
    );
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: true });
  }

  _keyboardDidHide() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: false });
  }

  fadeIn(delay, from = 0) {
    const { anim } = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          translateY: anim.interpolate({
            inputRange: [delay, Math.min(delay + 500, 3000)],
            outputRange: [from, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }

  render() {
    const isRegister = this.state.formState === FORM_STATES.REGISTER;

    return (
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={[styles.section, { paddingTop: 30 }]}>
            <Animated.Image
              resizeMode="contain"
              style={[
                styles.logo,
                this.state.isKeyboardVisible && { height: 90 },
                this.fadeIn(0),
              ]}
              source={require('../../../assets/images/white-logo.png')}
            />
          </View>

          <Animated.View
            style={[styles.section, styles.middle, this.fadeIn(700, -20)]}
          >
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
            />

            {this.state.formState === FORM_STATES.REGISTER && (
              <TextInput
                placeholder="Email"
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
            )}

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.textInput}
            />

            <Animated.View
              style={[styles.section, styles.bottom, this.fadeIn(700, -20)]}
            >
              <Button
                bgColor={colors.primary}
                textColor="white"
                secondary
                style={{ alignSelf: 'stretch', marginBottom: 10 }}
                caption={
                  this.state.formState === FORM_STATES.LOGIN
                    ? 'Login'
                    : 'Register'
                }
                onPress={() => this.props.navigation.goBack()}
              />

              {!this.state.isKeyboardVisible && (
                <View style={styles.socialLoginContainer}>
                  <Button
                    style={styles.socialButton}
                    bgColor={colors.primaryLight}
                    icon={require('../../../assets/images/google-plus.png')}
                    iconColor={colors.primary}
                    onPress={() => this.props.navigation.goBack()}
                  />
                  <Button
                    style={[styles.socialButton, styles.socialButtonCenter]}
                    bgColor={colors.primaryLight}
                    icon={require('../../../assets/images/twitter.png')}
                    iconColor={colors.primary}
                    onPress={() => this.props.navigation.goBack()}
                  />
                  <Button
                    style={styles.socialButton}
                    bgColor={colors.primaryLight}
                    icon={require('../../../assets/images/facebook.png')}
                    iconColor={colors.primary}
                    onPress={() => this.props.navigation.goBack()}
                  />
                </View>
              )}

              {!this.state.isKeyboardVisible && (
                <TouchableOpacity
                  onPress={() => {
                    LayoutAnimation.spring();
                    this.setState({
                      formState: isRegister
                        ? FORM_STATES.LOGIN
                        : FORM_STATES.REGISTER,
                    });
                  }}
                  style={{ paddingTop: 30, flexDirection: 'row' }}
                >
                  <Text
                    style={{
                      color: colors.primary,
                      fontFamily: fonts.primaryRegular,
                    }}
                  >
                    {isRegister
                      ? 'Already have an account?'
                      : "Don't have an account?"}
                  </Text>
                  <Text
                    style={{
                      color: colors.primary,
                      fontFamily: fonts.primaryBold,
                      marginLeft: 5,
                    }}
                  >
                    {isRegister ? 'Login' : 'Register'}
                  </Text>
                </TouchableOpacity>
              )}
            </Animated.View>
          </Animated.View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
  backgroundImage: {
    flex: 1,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom: Platform.OS === 'android' ? 30 : 0,
  },
  last: {
    justifyContent: 'flex-end',
  },
  textInput: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  logo: {
    height: 150,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
  },
  socialButtonCenter: {
    marginLeft: 10,
    marginRight: 10,
  },
});
