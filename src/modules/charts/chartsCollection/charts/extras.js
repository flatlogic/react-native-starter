import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Circle, G, Line, Rect, Text } from 'react-native-svg'
import colors from '../../../../styles/colors';

class ExtrasExample extends React.PureComponent {

  render() {

      const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

      /**
       * Both below functions should preferably be their own React Components
       */

      const HorizontalLine = (({ y }) => (
        <Line
          key="zero-axis"
          x1="0%"
          x2="100%"
          y1={ y(50) }
          y2={ y(50) }
          stroke={colors.gray}
          strokeDasharray={ [ 4, 8 ] }
          strokeWidth={ 2 }
        />
      ))

    const Tooltip = ({ x, y }) => (
      <G
        x={x(5) - (75 / 2)}
        key="tooltip"
        onPress={ () => console.log('tooltip clicked') }
      >
        <G y={50}>
          <Rect
            height={40}
            width={75}
            stroke={colors.gray}
            fill="white"
            ry={10}
            rx={10}
          />
          <Text
            x={75 / 2}
            dy={20}
            alignmentBaseline="middle"
            textAnchor="middle"
            stroke={colors.primary}
          >
            {`${data[5]}ºC`}
          </Text>
        </G>
        <G x={75 / 2}>
          <Line
            y1={50 + 40}
            y2={y(data[ 5 ])}
            stroke={colors.gray}
            strokeWidth={2}
          />
          <Circle
            cy={y(data[ 5 ])}
            r={6}
            stroke={colors.blue}
            strokeWidth={2}
            fill="white"
          />
        </G>
      </G>
    )

    return (
      <LineChart
        style={{ height: 200 }}
        data={ data }
        svg={{
          stroke: colors.primary,
          strokeWidth: 2,
        }}
        contentInset={{ top: 20, bottom: 20 }}
        curve={ shape.curveLinear }
      >
        <Grid svg={{ strokeOpacity: 0.5}} />
        <HorizontalLine />
        <Tooltip />
      </LineChart>
    )
  }
}

export default ExtrasExample
