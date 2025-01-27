import React, { Fragment, Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const RNSCheckbox = ({ ...prevProps }) => {
  return <Checkbox {...prevProps} />;
};

export default RNSCheckbox;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fontStyle: {
    fontSize: 50,
  },
});
