import React from 'react';
import { StackedBarChart } from 'react-native-svg-charts';
import colors from '../../../../../styles/colors';

class StackedBarChartExample extends React.PureComponent {

  render() {
    const data = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400,
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

    const colorsArr = [ colors.yellow, colors.introText, colors.blue, colors.primary ]
    const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]

    return (
      <StackedBarChart
        style={{ height: 200 }}
        keys={keys}
        colors={colorsArr}
        data={data}
        showGrid={false}
        contentInset={{ top: 30, bottom: 30 }}
        {...this.props}
      />
    )
  }
}

export default StackedBarChartExample
