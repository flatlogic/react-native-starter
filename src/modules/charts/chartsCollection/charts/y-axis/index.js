import React from 'react';
import { Grid, LineChart, YAxis } from 'react-native-svg-charts';
import { View } from 'react-native';
import colors from '../../../../../styles/colors';

class YAxisExample extends React.PureComponent {

  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const contentInset = { top: 20, bottom: 20 }

    return (
      <View style={ { height: 200, flexDirection: 'row' } }>
        <YAxis
          data={data}
          contentInset={ contentInset }
          svg={{
            fill: colors.black,
            fontSize: 10,
          }}
          formatLabel={ value => `${value}ºC` }
        />
        <LineChart
          style={ { flex: 1, marginLeft: 16 } }
          data={data}
          svg={{ stroke: '#52a6e9' }}
          contentInset={ contentInset }
        >
          <Grid svg={{ strokeOpacity: 0.5}} />
        </LineChart>
      </View>
    )
  }
}

export default YAxisExample
