import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from "react-native-svg";

class ColorBarExample extends React.PureComponent {

    render() {

        const data = [
            {
                value: 50,
            },
            {
                value: 10,
                svg: {
                    fill: 'rgba(134, 65, 244, 0.5)',
                },
            },
            {
                value: 40,
                svg: {
                    stroke: 'purple',
                    strokeWidth: 2,
                    fill: 'white',
                    strokeDasharray: [ 4, 2 ],
                },
            },
            {
                value: 95,
                svg: {
                    fill: 'url(#gradient)',
                },
            },
            {
                value: 85,
                svg: {
                    fill: 'green',
                },
            },
        ]

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )

        return (
            <BarChart
                style={{ height: 200 }}
                data={data}
                gridMin={0}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                yAccessor={({ item }) => item.value}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
                <Gradient/>
            </BarChart>
        )
    }

}

export default ColorBarExample
