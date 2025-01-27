import React from 'react';
import { View } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import colors from '../../../../../styles/colors';

class BarChartHorizontalWithLabels extends React.PureComponent {

  render() {

    const data = [ 50, 10, 40, 95, 85 ];

    const CUT_OFF = 50;
    const Labels = ({  x, y, bandwidth, data }) => (
      data.map((value, index) => (
        <Text
          key={index}
          x={ value > CUT_OFF ? x(0) + 10 : x(value) + 10 }
          y={ y(index) + (bandwidth / 2) }
          fontSize={ 14 }
          fill={ value > CUT_OFF ? 'white' : 'black' }
          alignmentBaseline={ 'middle' }
        >
          {value}
        </Text>
      ))
    )

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
          <Labels />
        </BarChart>
      </View>
    )
  }
}

export default BarChartHorizontalWithLabels;
