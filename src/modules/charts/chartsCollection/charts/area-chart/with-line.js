import React from 'react';
import { Path } from 'react-native-svg';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import colors from '../../../../../styles/colors';


class AreaChartExample extends React.PureComponent {
  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const Line = ({ line }) => (
      <Path
        key="line"
        d={line}
        stroke={colors.primary}
        fill="none"
      />
    )

    return (
      <AreaChart
        style={{ height: 200 }}
        data={data}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: '#99F2F8', fillOpacity: 0.5 }}
      >
        <Grid svg={{ strokeOpacity: 0.5}} />
        <Line />
      </AreaChart>
    )
  }
}

export default AreaChartExample
