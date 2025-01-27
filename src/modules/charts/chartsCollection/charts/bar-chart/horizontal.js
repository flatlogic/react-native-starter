import React from 'react';
import { View } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';
import colors from '../../../../../styles/colors';

class BarChartExample extends React.PureComponent {

  render() {

    const data = [ 50, 10, 40, 95, 85 ]

    return (
      <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
        <BarChart
          style={{ flex: 1, marginLeft: 8 }}
          data={data}
          horizontal
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

export default BarChartExample;
