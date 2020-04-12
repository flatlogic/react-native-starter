import React from 'react'
import { View } from 'react-native';

import ShowcaseCard from './decorators/showcase-container'

import AreaChart from './area-chart/with-line'
import AreaChartWithGradient from './area-chart/with-gradient'


import LineChart from './line-chart/with-shadow'
import LineChartWithGradient from './line-chart/with-gradient'

// BarCharts
import MultipleBarChart from './bar-chart/with-multiple-data-sets'
import BarChartWithGradient from './bar-chart/with-gradient'
import BarChartWithDifferentBars from './bar-chart/with-different-bars'
import BarChartHorizontal from './bar-chart/horizontal'
import BarChartHorizontalWithYAxis from './bar-chart/horizontal-with-axis'
import BarChartHorizontalWithLabels from './bar-chart/horizontal-with-labels'
import BarChartVerticalWithLabels from './bar-chart/vertical-with-labels'
import BarStack from './bar-stack';

import PieChart from './pie-chart'
import PieChartWithLabels from './pie-chart/with-labels'
import PieChartWithDifferentArcs from './pie-chart/with-different-arcs'
import PieChartWithCenteredLabels from './pie-chart/with-centered-labels';
import PieChartWithImageLabels from './pie-chart/with-image-labels';
import PieChartWithDynamicSlices from './pie-chart/with-dynamic-slices';

import ProgressCircle from './progress-circle'
import ProgressGauge from './progress-gauge'

import LayeredCharts from './layered-charts'
import Decorators from './decorator'
import Extras from './extras'

import XAxisScaleBandExample from './x-axis/scale-band'
import XAxisScaleLinearExample from './x-axis/scale-linear'

import YAxisExample from './y-axis'
import AxesExample from './both-axes'
import AreaStackWithAxisExample from './area-stack/with-y-axis'

import GridMinMax from './grid-min-max'
import CustomGrid from './custom-grid'
import PartialAreaChart from './partial-chart/area-chart'
import PartialLineChart from './partial-chart/line-chart'

class Charts extends React.PureComponent {
  render() {
    return (
      <View>
        <AreaChart />
        <BarStack />
        <AreaChartWithGradient />
        <LineChart />
        <LineChartWithGradient />
        <MultipleBarChart />
        <BarChartWithGradient />
        <BarChartWithDifferentBars />
        <BarChartHorizontal />
        <BarChartHorizontalWithYAxis />
        <BarChartHorizontalWithLabels />
        <BarChartVerticalWithLabels />
        <PieChart />
        <PieChartWithLabels />
        <PieChartWithDifferentArcs />
        <PieChartWithCenteredLabels />
        <PieChartWithImageLabels />
        <PieChartWithDynamicSlices />
        <ProgressCircle  />
        <ProgressGauge  />
        <LayeredCharts  />
        <Decorators />
        <Extras />
        <XAxisScaleBandExample />
        <XAxisScaleLinearExample /> 
        <YAxisExample />
        <AxesExample />
        <AreaStackWithAxisExample />
        <GridMinMax />
        <CustomGrid />
        <PartialAreaChart />
        <PartialLineChart />
      </View>
    )
  }
}

export default Charts;