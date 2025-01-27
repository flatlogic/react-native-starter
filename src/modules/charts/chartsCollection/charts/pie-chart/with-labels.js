import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Circle, G, Line } from 'react-native-svg';
import colors from '../../../../../styles/colors';

class PieChartWithLabelExample extends React.PureComponent {

  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91 ]

    const colorsArr = [ '#4857BE', '#6270D1', '#829BF8', '#53A6EA', '#6ECEA3', '#99F2F8', '#1BE6F7', '#F6B24F', '#FFDE89']

    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => ({
          value,
          svg: { fill: colorsArr[index] },
          key: `pie-${index}`,
      }))

    const Labels = ({ slices }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <G key={index}>
            <Line
              x1={labelCentroid[ 0 ]}
              y1={labelCentroid[ 1 ]}
              x2={pieCentroid[ 0 ]}
              y2={pieCentroid[ 1 ]}
              stroke={data.svg.fill}
            />
            <Circle
              cx={labelCentroid[ 0 ]}
              cy={labelCentroid[ 1 ]}
              r={15}
              fill={data.svg.fill}
            />
          </G>
        )
      })
    }

    return (
      <PieChart
        style={{ height: 200 }}
        data={pieData}
        innerRadius={20}
        outerRadius={55}
        labelRadius={80}
      >
        <Labels />
      </PieChart>
    )
  }
}

export default PieChartWithLabelExample
