import React from 'react';
import { LineChart } from 'react-native-svg-charts';
import { View } from 'react-native';
import { G, Line } from 'react-native-svg';
import colors from '../../../../styles/colors';

class CustomGridExample extends React.PureComponent {

  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const CustomGrid = ({ x, y, data, ticks }) => (
      <G>
        {
          // Horizontal grid
          ticks.map(tick => (
            <Line
              key={tick}
              x1={'0%'}
              x2={'100%'}
              y1={y(tick)}
              y2={y(tick)}
              stroke={colors.primary}
              opacity={0.2}
            />
          ))
        }
        {
          // Vertical grid
          data.map((_, index) => (
            <Line
              key={ index }
              y1={'0%'}
              y2={'100%'}
              x1={x(index)}
              x2={x(index)}
              stroke={colors.primary}
              opacity={0.2}
            />
          ))
        }
      </G>
    )

    return (
      <View style={{ height: 200, flexDirection: 'row' } }>
        <LineChart
          style={{ flex: 1 }}
          data={data}
          svg={{
            stroke: '#6270d1',
          }}
        >
          <CustomGrid belowChart />
        </LineChart>
      </View>
    )
  }
}

export default CustomGridExample
