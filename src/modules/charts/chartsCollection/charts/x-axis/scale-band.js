import React from 'react';
import { BarChart, XAxis } from 'react-native-svg-charts';
import { View } from 'react-native';
import * as scale from 'd3-scale';
import colors from '../../../../../styles/colors';

class XAxisExample extends React.PureComponent {

  render() {

    const data = [ 14, 80, 100, 55 ]

    return (
      <View style={{ height: 200, padding: 20 }}>
        <BarChart
          style={{ flex: 1 }}
          data={data}
          gridMin={0}
          svg={{ fill: colors.primary }}
        />
        <XAxis
          style={{ marginTop: 10 }}
          data={data}
          scale={scale.scaleBand}
          formatLabel={(value, index) => index}
          labelStyle={{ color: 'black' }}
        />
      </View>
    )
  }
}

export default XAxisExample
