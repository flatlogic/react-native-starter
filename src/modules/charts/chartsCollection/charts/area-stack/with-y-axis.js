import React from 'react'
import { StackedAreaChart, YAxis, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { View } from 'react-native'

class AreaStackWithAxisExample extends React.PureComponent {

    render() {

        const data = [
            {
                month: new Date(2015, 0, 1),
                apples: 3840,
                bananas: 1920,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 1, 1),
                apples: 1600,
                bananas: 1440,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 2, 1),
                apples: 640,
                bananas: 960,
                cherries: 3640,
                dates: 400,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 3320,
                bananas: 480,
                cherries: 640,
                dates: 400,
            },
        ]

        const colors = [ 'rgb(138, 0, 230, 0.8)', 'rgb(173, 51, 255, 0.8)', 'rgb(194, 102, 255, 0.8)', 'rgb(214, 153, 255, 0.8)' ]
        const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]

        return (
            <View style={ { flexDirection: 'row', height: 200 } }>
                <StackedAreaChart
                    style={ { flex: 1 } }
                    contentInset={ { top: 10, bottom: 10 } }
                    data={ data }
                    keys={ keys }
                    colors={ colors }
                    curve={ shape.curveNatural }
                >
                    <Grid/>
                </StackedAreaChart>
                <YAxis
                    style={ { position: 'absolute', top: 0, bottom: 0 }}
                    data={ StackedAreaChart.extractDataPoints(data, keys) }
                    contentInset={ { top: 10, bottom: 10 } }
                    svg={ {
                        fontSize: 8,
                        fill: 'white',
                        stroke: 'black',
                        strokeWidth: 0.1,
                        alignmentBaseline: 'baseline',
                        baselineShift: '3',
                    } }
                />
            </View>
        )
    }
}

export default AreaStackWithAxisExample
