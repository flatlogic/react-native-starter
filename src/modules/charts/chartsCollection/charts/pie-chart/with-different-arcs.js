import React from 'react'
import { PieChart } from 'react-native-svg-charts'

class PieChartWithDifferentArcs extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                value: 50,
                svg: { fill: '#600080' },
                arc: { outerRadius: '130%', cornerRadius: 10,  }
            },
            {
                key: 2,
                value: 50,
                svg: { fill: '#9900cc' }
            },
            {
                key: 3,
                value: 40,
                svg: { fill: '#c61aff' }
            },
            {
                key: 4,
                value: 95,
                svg: { fill: '#d966ff' }
            },
            {
                key: 5,
                value: 35,
                svg: { fill: '#ecb3ff' }
            }
        ]


        return (
            <PieChart
                style={{ height: 200 }}
                outerRadius={'70%'}
                innerRadius={10}
                data={data}
            />
        )
    }

}

export default PieChartWithDifferentArcs
