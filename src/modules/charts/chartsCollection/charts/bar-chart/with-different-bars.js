import React from 'react';
import { BarChart, Grid } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from "react-native-svg";
import colors from '../../../../../styles/colors';

class ColorBarExample extends React.PureComponent {

  render() {

    const data = [
      {
        value: 50,
        svg: {
          fill: colors.primary,
        },
      },
      {
        value: 10,
        svg: {
          fill: colors.yellow,
        },
      },
      {
        value: 40,
        svg: {
          stroke: colors.blue,
          strokeWidth: 2,
          fill: 'white',
          strokeDasharray: [ 4, 2 ],
        },
      },
      {
        value: 95,
        svg: {
          fill: 'url(#gradient)',
        },
      },
      {
        value: 85,
        svg: {
          fill: colors.primary,
        },
      },
    ]

    const Gradient = () => (
      <Defs key="gradient">
        <LinearGradient id="gradient" x1="0" y="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor={colors.blue} />
          <Stop offset="100%" stopColor={colors.introText} />
        </LinearGradient>
      </Defs>
    )

    return (
      <BarChart
        style={{ height: 200 }}
        data={data}
        gridMin={0}
        svg={{ fill: colors.blue }}
        yAccessor={({ item }) => item.value}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid svg={{ strokeOpacity: 0.5}} />
        <Gradient />
      </BarChart>
    )
  }
}

export default ColorBarExample;
