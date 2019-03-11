import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  VictoryPie,
  VictoryChart,
  VictoryCandlestick,
  VictoryLine,
  VictoryBoxPlot,
} from 'victory-native';
import { colors, fonts } from '../../styles';

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
      <View style={styles.background}>
        <View style={styles.chartView}>
          <Text style={styles.chartLabelText}>Pie Chart</Text>
          <VictoryPie
            width={290}
            height={290}
            data={pie}
            colorScale={[
              '#19e7f7',
              '#9af2f9',
              '#52a6e9',
              '#829bf8',
              '#6271d1',
              '#f6b24e',
            ]}
            innerRadius={45}
            labelRadius={65}
            padAngle={1}
            style={{ labels: { fill: colors.white, fontSize: 18 } }}
          />
        </View>
        <View style={styles.chartView}>
          <Text style={styles.chartLabelText}>Candlestick Chart</Text>
          <VictoryChart width={290} height={290}>
            <VictoryCandlestick
              candleColors={{ positive: '#19e7f7', negative: '#f6b24e' }}
              data={candleData}
            />
          </VictoryChart>
        </View>
        <View style={[styles.chartView, { marginBottom: 20 }]}>
          <Text style={styles.chartLabelText}>Voronoi Container</Text>
          <VictoryChart width={290} height={290}>
            <VictoryLine
              data={line}
              style={{ data: { stroke: colors.primaryGradientStart } }}
            />
          </VictoryChart>
        </View>

        <View style={[styles.chartView, { marginBottom: 20 }]}>
          <Text style={styles.chartLabelText}>Box Plot</Text>
          <VictoryChart domainPadding={50}>
            <VictoryBoxPlot
              minLabels
              maxLabels
              boxWidth={10}
              data={[
                { x: 'red', y: [5, 10, 9, 2] },
                { x: 'blue', y: [1, 15, 6, 8] },
                { x: 'green', y: [3, 5, 6, 9] },
                { x: 'yellow', y: [5, 20, 8, 12] },
                { x: 'white', y: [2, 11, 12, 13] },
              ]}
            />
          </VictoryChart>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 5,
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
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: colors.white,
    padding: 10,
  },
  chartLabelText: {
    color: '#686868',
    fontFamily: fonts.primaryBold,
    fontSize: 18,
  },
});
