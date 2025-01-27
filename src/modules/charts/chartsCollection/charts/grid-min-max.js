import React from 'react'
import { AreaChart, Path } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import colors from '../../../../styles/colors';

class GridMinMaxExample extends React.PureComponent {

  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const Line = ({ line }) => (
      <Path
        key={ 'line ' }
        d={ line }
        stroke={ colors.primary }
        fill={ 'none' }
      />
    )

    return (
      <AreaChart
        style={{ height: 200 }}
        data={ data }
        svg={{ fill: colors.introText, fillOpacity: 0.2 }}
        curve={ shape.curveNatural }
        gridMax={ 500 }
        gridMin={ -500 }
      >
        <Line />
      </AreaChart>
    )
  }
}

export default GridMinMaxExample
