import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import colors from '../../../../../styles/colors';

class PieChartExample extends React.PureComponent {

  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const colorsArr = [ colors.blue, colors.green, colors.gray, colors.primary, colors.darkGray, colors.primaryLight, colors.secondaryGradientStart, colors.primaryGradientEnd, colors.primaryGradientStart ]
    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
          value,
          svg: {
            fill: colorsArr[index],
            onPress: () => console.log('press', index),
          },
          key: `pie-${index}`,
        }))

    return (
      <PieChart
        style={{ height: 200 }}
        data={pieData}
      />
    )
  }
}

export default PieChartExample
