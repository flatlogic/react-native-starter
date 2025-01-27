import React from 'react';
import { LineChart, Grid } from 'react-native-svg-charts';
import colors from '../../../../../styles/colors';

class LineChartExample extends React.PureComponent {

  render() {

    const data1 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    const data2 = [ -87, 66, -69, 92, -40, -61, 16, 62, 20, -93, -54, 47, -89, -44, 18 ]
    const data = [
      {
        data: data1,
        svg: { stroke: colors.darkGray },
      },
      {
        data: data2,
        svg: { stroke: colors.primaryGradientStart },
      },
    ]

    return (
      <LineChart
        style={{ height: 200 }}
        data={ data }
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid svg={{ strokeOpacity: 0.5}} />
      </LineChart>
    )
  }
}

export default LineChartExample
