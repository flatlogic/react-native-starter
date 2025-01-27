import React from 'react';
import { LineChart, Path, Grid } from 'react-native-svg-charts';
import colors from '../../../../../styles/colors';

class LineChartExample extends React.PureComponent {

  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const Shadow = ({ line }) => (
      <Path
        key="shadow"
        y={2}
        d={line}
        fill="none"
        strokeWidth={4}
        stroke={colors.green}
        opacity={0.2}
      />
    )

    return (
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: colors.primary }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid svg={{ strokeOpacity: 0.5}} />
        <Shadow />
      </LineChart>
    )
  }
}

export default LineChartExample;
