import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import colors from '../../../../../styles/colors';

class PieChartWithDifferentArcs extends React.PureComponent {

  render() {

    const data = [
      {
        key: 1,
        value: 50,
        svg: { fill: colors.blue },
        arc: { outerRadius: '130%', cornerRadius: 10,  }
      },
      {
        key: 2,
        value: 50,
        svg: { fill: colors.primary }
      },
      {
        key: 3,
        value: 40,
        svg: { fill: colors.yellow }
      },
      {
        key: 4,
        value: 95,
        svg: { fill: colors.green }
      },
      {
        key: 5,
        value: 35,
        svg: { fill: colors.introText }
      }
    ]


    return (
      <PieChart
        style={{ height: 200 }}
        outerRadius="70%"
        innerRadius={10}
        data={data}
      />
    )
  }
}

export default PieChartWithDifferentArcs
