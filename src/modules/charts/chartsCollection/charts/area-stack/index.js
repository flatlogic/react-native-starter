import React from 'react';
import { StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import colors from '../../../../../styles/colors';

class AreaStackChartExample extends React.PureComponent {
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

    const colorsArr = [ colors.blue, colors.green, colors.gray, colors.primary ]
    const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]

    return (
      <StackedAreaChart
        style={{ height: 200, paddingVertical: 16 }}
        data={data}
        keys={keys}
        colors={colorsArr}
        curve={shape.curveNatural}
      />
    )
  }
}

export default AreaStackChartExample
