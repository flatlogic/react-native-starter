import React from 'react';
import { View } from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import colors from '../../../../../styles/colors';

class HorizontaBarChartWithYAxis extends React.PureComponent {

  render() {

    const data = [
      {
        value: 50,
        label: 'One',
        svg: {
          fill: colors.primary,
        },
      },
      {
        value: 10,
        label: 'Two',
        svg: {
          fill: colors.blue,
        },
      },
      {
        value: 40,
        label: 'Three',
        svg: {
          fill: colors.yellow,
        },
      },
      {
        value: 95,
        label: 'Four',
        svg: {
          fill: colors.introText,
        },
      },
      {
        value: 85,
        label: 'Five',
      },
    ]

    return (
      <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
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
          data={data}
          horizontal
          yAccessor={({ item }) => item.value}
          svg={{ fill: colors.blue }}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          gridMin={0}
        >
          <Grid direction={Grid.Direction.VERTICAL} />
        </BarChart>
      </View>
  )
  }
}

export default HorizontaBarChartWithYAxis;
