import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { fonts } from '../../../../styles';

const ChartWrapper = (props) => (
  <View style={styles.chartView}>
    <Text style={styles.chartLabelText}>{props.title}</Text>
    {props.children}
  </View>  
);

const styles = StyleSheet.create({
  chartView: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    padding: 20,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  chartLabelText: {
    color: '#686868',
    fontFamily: fonts.primaryBold,
    fontSize: 18,
    padding: 0,
    marginBottom: 10,
  },
});

export default ChartWrapper;
