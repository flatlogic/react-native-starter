import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import colors from '../../../../../styles/colors';

class PieChartWithCenteredLabels extends React.PureComponent {

  render() {

    const data = [
      {
        key: 1,
        amount: 50,
        svg: { fill: colors.blue },
      },
      {
        key: 2,
        amount: 50,
        svg: { fill: colors.primary }
      },
      {
        key: 3,
        amount: 40,
        svg: { fill: colors.yellow }
      },
      {
        key: 4,
        amount: 95,
        svg: { fill: colors.green }
      },
      {
        key: 5,
        amount: 35,
        svg: { fill: colors.blue }
      }
    ]

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <Text
            key={index}
            x={pieCentroid[ 0 ]}
            y={pieCentroid[ 1 ]}
            fill="white"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={24}
            stroke="black"
            strokeWidth={0.2}
          >
            {data.amount}
          </Text>
        )
      })
    }

    return (
      <PieChart
        style={{ height: 200 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        spacing={0}
        outerRadius="95%"
      >
        <Labels />
      </PieChart>
    )
  }
}

export default PieChartWithCenteredLabels
