import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  LayoutAnimation,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { Fonts, Colors } from '../constants';
import { TextInput, Button } from '../components';

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
    this.keyboardDidShowListener = Keyboard.addListener(Platform.select({ android: 'keyboardDidShow', ios: 'keyboardWillShow' }), this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener(Platform.select({ android: 'keyboardDidHide', ios: 'keyboardWillHide' }), this._keyboardDidHide.bind(this));
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
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }

  render() {
    const TopComponent = Platform.select({ ios: KeyboardAvoidingView, android: View });
    const isRegister = this.state.formState === FORM_STATES.REGISTER;

    return (
      <View style={[styles.container, { paddingBottom: this.state.isKeyboardVisible ? 220 : 0 }]}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >

          <View style={[styles.section, { paddingTop: 30 }]}>
            <Animated.Image
              resizeMode="contain"
              style={[styles.logo, this.state.isKeyboardVisible && { height: 90 }, this.fadeIn(0)]}
              source={require('../../assets/images/white-logo.png')}
            />
          </View>

          <Animated.View style={[styles.section, styles.middle, this.fadeIn(700, -20)]}>
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
            />

            { this.state.formState === FORM_STATES.REGISTER &&
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          }

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.textInput}
            />

            <Animated.View style={[styles.section, styles.bottom, this.fadeIn(700, -20)]}>
              <Button
                secondary
                rounded
                style={{ alignSelf: 'stretch', marginBottom: 10 }}
                caption={this.state.formState === FORM_STATES.LOGIN ? 'Login' : 'Register'}
                onPress={() => this.props.authStateActions.skipLogin()}
              />

              { !this.state.isKeyboardVisible && (
              <View style={styles.socialLoginContainer}>
                <Button
                  style={styles.socialButton}
                  bordered
                  rounded
                  icon={require('../../assets/images/google-plus.png')}
                  onPress={() => this.props.authStateActions.skipLogin()}
                />
                <Button
                  style={[styles.socialButton, styles.socialButtonCenter]}
                  bordered
                  rounded
                  icon={require('../../assets/images/twitter.png')}
                  onPress={() => this.props.authStateActions.skipLogin()}
                />
                <Button
                  style={styles.socialButton}
                  bordered
                  rounded
                  icon={require('../../assets/images/facebook.png')}
                  onPress={() => this.props.authStateActions.skipLogin()}
                />
              </View>
            )}

              { !this.state.isKeyboardVisible && (
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.spring();
                  this.setState({ formState: isRegister ? FORM_STATES.LOGIN : FORM_STATES.REGISTER });
                }}
                style={{ paddingTop: 30, flexDirection: 'row' }}
              >
                <Text style={{ color: Colors.white, fontFamily: Fonts.primaryRegular }}>{isRegister ? 'Already have an account?' : 'Don\'t have an account?' }</Text>
                <Text style={{ color: Colors.white, fontFamily: Fonts.primaryBold, marginLeft: 5 }}>{isRegister ? 'Login' : 'Register' }</Text>
              </TouchableOpacity>
            )}
            </Animated.View>
          </Animated.View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 30,
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
