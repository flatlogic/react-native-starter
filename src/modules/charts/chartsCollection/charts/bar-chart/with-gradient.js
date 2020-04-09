import React from 'react'
import { LinearGradient, Stop, Defs } from 'react-native-svg'
import { BarChart, Grid } from 'react-native-svg-charts'

class GradientBarExample extends React.PureComponent {

    render() {

        const data    = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )

        return (
            <BarChart
                style={ { height: 200 } }
                data={ data }
                contentInset={ { top: 20, bottom: 20 } }
                svg={ {
                    strokeWidth: 2,
                    fill: 'url(#gradient)',
                } }
            >
                <Grid/>
                <Gradient/>
            </BarChart>
        )
    }

}

export default GradientBarExample
