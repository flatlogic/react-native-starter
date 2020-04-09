import React from 'react'
import { LineChart, XAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'

class XAxisExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        return (
            <View style={{ height: 200, padding: 20 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={ data }
                    gridMin={ 0 }
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                    <Grid/>
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={ data }
                    formatLabel={ (value, index) => index }
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View>
        )
    }

}

export default XAxisExample
