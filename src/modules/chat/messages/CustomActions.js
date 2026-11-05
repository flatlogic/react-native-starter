/* eslint-disable react/sort-comp */
import React from 'react';
import { Modal, StatusBar, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

// import CameraRollPicker from 'react-native-camera-roll-picker';

export default class CustomActions extends React.Component {
  constructor(props) {
    super(props);
    this._images = [];
    this.state = {
      modalVisible: false,
    };
    this.onActionsPress = this.onActionsPress.bind(this);
    this.selectImages = this.selectImages.bind(this);
  }

  setImages(images) {
    this._images = images;
  }

  getImages() {
    return this._images;
  }

  setModalVisible(visible = false) {
    this.setState({ modalVisible: visible });
  }

  // eslint-disable-next-line class-methods-use-this
  onActionsPress() {
    // const options = ['Choose From Library', 'Send Location', 'Cancel'];
    // const cancelButtonIndex = options.length - 1;
    // this.context.actionSheet().showActionSheetWithOptions(
    //   {
    //     options,
    //     cancelButtonIndex,
    //   },
    //   buttonIndex => {
    //     switch (buttonIndex) {
    //       case 0:
    //         this.setModalVisible(true);
    //         break;
    //       case 1:
    //         // eslint-disable-next-line no-undef
    //         navigator.geolocation.getCurrentPosition(
    //           position => {
    //             this.props.onSend({
    //               location: {
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //               },
    //             });
    //           },
    //           error => Alert.alert(error.message),
    //           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    //         );
    //         break;
    //       default:
    //     }
    //   },
    // );
  }

  selectImages(images) {
    this.setImages(images);
  }

  renderNavBar() {
    return (
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#FFF' }}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.navBar}>
          <TouchableOpacity accessibilityRole="button" onPress={() => this.setModalVisible(false)}>
            <Text style={styles.navText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={[styles.navText, { fontWeight: '600' }]}>Camera Roll</Text>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => {
              this.setModalVisible(false);
              const images = this.getImages().map(image => ({ image: image.uri }));
              this.props.onSend(images);
              this.setImages([]);
            }}
          >
            <Text style={styles.navText}>Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  renderIcon() {
    if (this.props.icon) {
      return this.props.icon();
    }
    return (
      <View style={[styles.wrapper, this.props.wrapperStyle]}>
        <Text style={[styles.iconText, this.props.iconTextStyle]}>+</Text>
      </View>
    );
  }

  // <CameraRollPicker
  //           maximum={10}
  //           imagesPerRow={4}
  //           callback={this.selectImages}
  //           selected={[]}
  //         />

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={this.onActionsPress}
      >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          {this.renderNavBar()}
        </Modal>
        {this.renderIcon()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  navBar: { height: 44, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  navText: { color: '#000', fontSize: 17 },
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

CustomActions.defaultProps = {
  onSend: () => {},
  options: {},
  icon: null,
  containerStyle: {},
  wrapperStyle: {},
  iconTextStyle: {},
};
