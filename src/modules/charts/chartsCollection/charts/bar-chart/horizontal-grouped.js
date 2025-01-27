import React from 'react'
import { View } from 'react-native'
import { YAxis, BarChart, Grid } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import * as scale from 'd3-scale'
import colors from '../../../../../styles/colors';

class BarChartExample extends React.PureComponent {

  render() {

    const data = [
      {
        value: 50,
        label: 'Default',
      },
      {
        value: 10,
        label: 'PurpleOpacity',
        svg: {
            fill: 'rgba(134, 65, 244, 0.5)',
        },
      },
      {
        value: 40,
        label: 'PurpleDash',
        svg: {
            stroke: colors.secondary,
            strokeWidth: 2,
            fill: 'white',
            strokeDasharray: [ 4, 2 ],
        },
      },
      {
        value: 95,
        label: 'Gradient',
        svg: {
            fill: 'url(#gradient)',
        },
      },
      {
        value: 85,
        label: 'Green',
        svg: {
            fill: colors.yellow,
        },
      },
    ]

    const Gradient = () => (
      <Defs key="gradient">
        <LinearGradient id="gradient" x1="0" y="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor={colors.blue}/>
          <Stop offset="100%" stopColor={colors.secondary}/>
        </LinearGradient>
      </Defs>
    )

    return (
      <View style={{ flexDirection: 'row', height: 500, paddingVertical: 16 }}>
        <YAxis
          data={data}
          yAccessor={({ index }) => index}
          scale={scale.scaleBand}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          formatLabel={(_, index) => data[ index ].label}
        />
        <BarChart
          style={{ flex: 1, marginLeft: 8 }}
          data={[
            {
              data,
              svg: { fill: 'orange' },
            },
            {
              data: [ ...data ].reverse(),
              svg: { fill: 'red' },
            },
            { data },
          ]}
          yAccessor={({ item }) => item.value}
          svg={{
            fill: 'blue',
          }}
          horizontal
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          gridMin={0}
        >
          <Grid direction={Grid.Direction.VERTICAL} />
          <Gradient />
        </BarChart>
      </View> 
    )
  }
}

export default BarChartExample
