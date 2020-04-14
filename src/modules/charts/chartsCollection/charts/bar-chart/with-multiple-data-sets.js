import React from 'react';
import { BarChart, Grid } from 'react-native-svg-charts';
import colors from '../../../../../styles/colors';

class GroupedBarChartExample extends React.PureComponent {

  render() {

    const data1 = [ 14, -1, 100, -95, -94, -24, -8, 85, -91, 35, -53, 53, -78, 66, 96, 33, -26, -32, 73, 8 ]
        .map((value) => ({ value }))
    const data2 = [ 24, 28, 93, 77, -42, -62, 52, -87, 21, 53, -78, -62, -72, -6, 89, -70, -94, 10, 86, 84 ]
        .map((value) => ({ value }))

    const barData = [
      {
        data: data1,
        svg: {
          fill: colors.blue,
        },
      },
      {
        data: data2,
      },
    ]

    return (
      <BarChart
        style={{ height: 200 }}
        data={barData}
        yAccessor={({ item }) => item.value}
        svg={{
          fill: colors.yellow,
        }}
        contentInset={{ top: 30, bottom: 30 }}
        {...this.props}
      >
        <Grid svg={{ strokeOpacity: 0.5}} />
      </BarChart>
    )
  }
}

export default GroupedBarChartExample;
