import React from 'react';
import { AreaChart, Grid } from 'react-native-svg-charts';
import { Circle, Path } from 'react-native-svg';
import colors from '../../../../styles/colors';

class DecoratorExample extends React.PureComponent {

    render() {

      const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

      const Decorator = ({ x, y, data }) => {
        return data.map((value, index) => (
          <Circle
            key={index}
            cx={x(index)}
            cy={y(value)}
            r={ 6 }
            stroke="#53a6ea"
            fill="white" 
          />
        ))
      }

    const Line = ({ line }) => (
      <Path
        d={ line }
        stroke={colors.blue}
        fill="none"
      />
    )

    return (
      <AreaChart
        style={{ height: 200 }}
        data={ data }
        svg={{ fill: colors.introText, fillOpacity: 0.3 }}
        opacity={0.2}
        contentInset={{ top: 20, bottom: 30 }}
      >
        <Grid svg={{ strokeOpacity: 0.5}} />
        <Line />
        <Decorator />
      </AreaChart>
    )
  }
}

export default DecoratorExample
