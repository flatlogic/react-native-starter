import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import colors from '../../../../../styles/colors';

class PieChartExample extends React.PureComponent {

  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const colorsArr = ['#FF125A', '#4857BE', '#6270D1', '#829BF8', '#53A6EA', '#6ECEA3', '#99F2F8', '#1BE6F7', '#F6B24F', '#FFDE89']
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
