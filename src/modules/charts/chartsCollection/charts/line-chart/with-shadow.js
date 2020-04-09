import React from 'react'
import { LineChart, Path, Grid } from 'react-native-svg-charts'

class LineChartExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const Shadow = ({ line }) => (
            <Path
                key={'shadow'}
                y={2}
                d={line}
                fill={'none'}
                strokeWidth={4}
                stroke={'rgba(134, 65, 244, 0.2)'}
            />
        )

        return (
            <LineChart
                style={ { height: 200 } }
                data={ data }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={ { top: 20, bottom: 20 } }
            >
                <Grid/>
                <Shadow/>
            </LineChart>
        )
    }

}

export default LineChartExample
