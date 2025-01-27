import React from 'react';
import { StackedAreaChart, YAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { View } from 'react-native';
import colors from '../../../../../styles/colors';

class AreaStackWithAxisExample extends React.PureComponent {

  render() {

    const data = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
      },
    ]

    const colorsArr = [ colors.introText, colors.yellow, colors.primary, colors.blue ]
    const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]

    return (
      <View style={{ flexDirection: 'row', height: 200 }}>
        <StackedAreaChart
          style={{ flex: 1 }}
          contentInset={{ top: 10, bottom: 10 }}
          data={data}
          keys={keys}
          colors={colorsArr}
          curve={shape.curveNatural}
        >
          <Grid svg={{ strokeOpacity: 0.5}} />
        </StackedAreaChart>
        <YAxis
          style={{ position: 'absolute', top: 0, bottom: 0 }}
          data={StackedAreaChart.extractDataPoints(data, keys)}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            fontSize: 8,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 0.1,
            alignmentBaseline: 'baseline',
            baselineShift: '3',
          }}
        />
      </View>
    )
  }
}

export default AreaStackWithAxisExample
