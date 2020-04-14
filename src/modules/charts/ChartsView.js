import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {
  VictoryPie,
  VictoryChart,
  VictoryCandlestick,
  VictoryLine,
  VictoryBoxPlot,
} from 'victory-native';
import {
  LineChart,
  BarChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { colors, fonts } from '../../styles';
import Charts from './chartsCollection/charts/index'

const candleData = [
  { x: 1, open: 9, close: 30, high: 56, low: 7 },
  { x: 2, open: 80, close: 40, high: 120, low: 10 },
  { x: 3, open: 50, close: 80, high: 90, low: 20 },
  { x: 4, open: 70, close: 22, high: 70, low: 5 },
  { x: 5, open: 20, close: 35, high: 50, low: 10 },
  { x: 6, open: 35, close: 30, high: 40, low: 3 },
  { x: 7, open: 30, close: 90, high: 95, low: 30 },
  { x: 8, open: 80, close: 81, high: 83, low: 75 },
];

const screenWidth = Dimensions.get("window").width - 40;

const defaultConfig = {
  backgroundColor: "#6270d1",
  backgroundGradientFrom: "#6270d1",
  backgroundGradientTo: "#6270d1",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: "6",
  },
  propsForBackgroundLines: {
    stroke: '#829bf8',
  },
  barPercentage: 0.5
}

export default function ChartsScreen(props) {
  if (!props.data && props.isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  const { pie, line } = props.data;
  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Charts Demo</Text>
      </View>
      <View style={styles.subtitleView}>
        <Text style={styles.subtitleViewText}>React native svg charts</Text>
      </View>
      <View style={styles.background}>
        <Charts />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f8',
  },
  subtitleView: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#ccc',
    marginBottom: 10,
    marginTop: 0,
  },
  subtitleViewPackage: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#ccc',
    marginBottom: 10,
    marginTop: 10,
  },
  subtitleViewText: {
    color: colors.gray,
  },
  titleView: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: colors.primaryGradientStart,
    fontSize: 18,
    fontFamily: fonts.primaryBold,
  },
  background: {
    backgroundColor: '#f1f1f8',
    flex: 1,
    paddingHorizontal: 20,
  },
  chartView: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
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
    padding: 10,
  },
});
