/* eslint-disable react/sort-comp */
/* eslint-disable no-param-reassign */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

import CustomActions from './CustomActions';
import CustomView from './CustomView';

export default class MessagesScreen extends React.Component {
  static navigationOptions = {
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            paddingRight: 10,
          }}
        >
          <Image
            source={require('../../../../assets/images/phone.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 20,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            paddingRight: 25,
          }}
        >
          <Image
            source={require('../../../../assets/images/camera.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
      userParams: props.navigation.state.params,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    const messages = require('./data/messages.js').map(message => {
      if (message.user.id !== 1) {
        message.user.avatar = this.state.userParams.userAvatar;
        message.user.name = this.state.userParams.userName;
      }
      return message;
    });
    this.setState(() => ({
      messages,
    }));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState(() => ({
      isLoadingEarlier: true,
    }));

    setTimeout(() => {
      if (this._isMounted === true) {
        const messages = require('./data/old_messages.js').map(message => {
          if (message.user.id !== 1) {
            message.user.avatar = this.state.userParams.userAvatar;
            message.user.name = this.state.userParams.userName;
          }
          return message;
        });

        this.setState(previousState => ({
          messages: GiftedChat.prepend(previousState.messages, messages),
          loadEarlier: false,
          isLoadingEarlier: false,
        }));
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if (messages[0].image || messages[0].location || !this._isAlright) {
        this.setState(() => ({
          // eslint-disable-next-line react/no-access-state-in-setstate
          typingText: `${this.state.userParams.userName} is typing...`,
        }));
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else if (!this._isAlright) {
            this._isAlright = true;
            this.onReceive('Use our starter kit then!');
          }
        }
      }

      this.setState(() => ({
        typingText: null,
      }));
    }, 1000);
  }

  onReceive(text) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, {
        _id: Math.round(Math.random() * 1000000),
        text,
        createdAt: new Date(),
        user: {
          _id: 2,
          // eslint-disable-next-line react/no-access-state-in-setstate
          name: this.state.userParams.userName,
          // eslint-disable-next-line react/no-access-state-in-setstate
          avatar: this.state.userParams.userAvatar,
        },
      }),
    }));
  }

  // eslint-disable-next-line class-methods-use-this
  renderCustomActions(props) {
    return <CustomActions {...props} />;
  }

  // eslint-disable-next-line class-methods-use-this
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          },
        }}
      />
    );
  }

  // eslint-disable-next-line class-methods-use-this
  renderCustomView(props) {
    return <CustomView {...props} />;
  }

  renderFooter() {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{this.state.typingText}</Text>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          loadEarlier={this.state.loadEarlier}
          onLoadEarlier={this.onLoadEarlier}
          isLoadingEarlier={this.state.isLoadingEarlier}
          user={{
            _id: 1, // sent messages should have same user._id
          }}
          renderActions={this.renderCustomActions}
          renderBubble={this.renderBubble}
          renderCustomView={this.renderCustomView}
          renderFooter={this.renderFooter}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
