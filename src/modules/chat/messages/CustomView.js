import React from 'react';
import MapView from 'react-native-maps';
import {
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const SAMPLE_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export default class CustomView extends React.Component {
  render() {
    if (this.props.currentMessage.location) {
      return (
        <TouchableOpacity
          style={[styles.container, this.props.containerStyle]}
          onPress={() => {
            const url = Platform.select({
              ios: `http://maps.apple.com/?ll=${
                this.props.currentMessage.location.latitude
              },${this.props.currentMessage.location.longitude}`,
              android: `http://maps.google.com/?q=${
                this.props.currentMessage.location.latitude
              },${this.props.currentMessage.location.longitude}`,
            });
            Linking.canOpenURL(url)
              // eslint-disable-next-line consistent-return
              .then(supported => {
                if (supported) {
                  return Linking.openURL(url);
                }
              })
              .catch(err => {
                console.error('An error occurred', err);
              });
          }}
        >
          <MapView liteMode style={styles.map} initialRegion={SAMPLE_REGION} />
        </TouchableOpacity>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {},
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
  map: {
    height: 200,
    margin: 10,
  },
});

CustomView.defaultProps = {
  currentMessage: {},
  containerStyle: {},
  mapViewStyle: {},
};
