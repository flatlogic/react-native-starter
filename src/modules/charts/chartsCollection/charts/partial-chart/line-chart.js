import React from 'react'
import { ClipPath, Defs, Rect } from 'react-native-svg'
import { LineChart, Path } from 'react-native-svg-charts'

class PartialLineChartExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const indexToClipFrom = 10

        const Clips = ({ x, width }) => (
            <Defs key={ 'clips' }>
                <ClipPath id="clip-path-1">
                    <Rect x={ '0' } y={ '0' } width={ x(indexToClipFrom) } height={ '100%' }/>
                </ClipPath>
                <ClipPath id={ 'clip-path-2' }>
                    <Rect x={ x(indexToClipFrom) } y={ '0' } width={ width - x(indexToClipFrom) } height={ '100%' }/>
                </ClipPath>
            </Defs>
        )

        // Line extras:
        const DashedLine = ({ line }) => (
            <Path
                key={ 'line-1' }
                d={ line }
                stroke={ 'rgb(134, 65, 244)' }
                strokeWidth={ 2 }
                fill={ 'none' }
                strokeDasharray={ [ 4, 4 ] }
                clipPath={ 'url(#clip-path-2)' }
            />
        )

        const Shadow = ({ line }) => (
            <Path
                y={ 3 }
                key={ 'shadow-1' }
                d={ line }
                stroke={ 'rgba(134, 65, 244, 0.2)' }
                strokeWidth={ 5 }
                fill={ 'none' }
            />
        )

        return (
            <LineChart
                style={{ height: 200 }}
                data={ data }
                contentInset={{ top: 20, bottom: 20 }}
                svg={{
                    stroke: 'rgb(134, 65, 244)',
                    strokeWidth: 2,
                    clipPath: 'url(#clip-path-1)',
                }}
            >
                <Clips/>
                <Shadow/>
                <DashedLine/>
            </LineChart>
        )
    }
}

export default PartialLineChartExample
