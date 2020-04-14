import React from 'react';
import { AreaChart, Grid } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import colors from '../../../../../styles/colors';

class GradientExample extends React.PureComponent {

  render() {
    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const Gradient = ({ index }) => (
      <Defs key={index}>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor={colors.blue} stopOpacity={0.8} />
          <Stop offset="100%" stopColor={colors.blue} stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    )

      return (
        <AreaChart
          style={{ height: 200 }}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fill: 'url(#gradient)' }}
        >
          <Grid svg={{ strokeOpacity: 0.5}} />
          <Gradient />
        </AreaChart>
    )
  }
}

export default GradientExample
