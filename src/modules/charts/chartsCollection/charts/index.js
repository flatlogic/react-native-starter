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

import ChartWrapper from './wrapper';

class Charts extends React.PureComponent {
  render() {
    return (
      <View>
        <ChartWrapper title="Line Chart">
          <AreaChart />
        </ChartWrapper>
        <ChartWrapper title="Line Chart opacity">
          <AreaChartWithGradient />
        </ChartWrapper>
        <ChartWrapper title="Line Chart \w shadow">
          <LineChart />
        </ChartWrapper>
        <ChartWrapper title="Line Chart gradient">
          <LineChartWithGradient />
        </ChartWrapper>
        <ChartWrapper title="Multiple Bar Chart">
          <MultipleBarChart />
        </ChartWrapper>
        <ChartWrapper title="Bar Stack">
          <BarStack />
        </ChartWrapper>
        <ChartWrapper title="Bar Chart">
          <XAxisScaleBandExample />
        </ChartWrapper>
        <ChartWrapper title="Bar Chart Gradient">
          <BarChartWithGradient />
        </ChartWrapper>
        <ChartWrapper title="Bar Chart Customized">
          <BarChartWithDifferentBars />
        </ChartWrapper>
        <ChartWrapper title="Bar Chart Horizontal">
          <BarChartHorizontal />
        </ChartWrapper>
        <ChartWrapper title="Bar Chart \w Labels">
          <BarChartHorizontalWithYAxis />
        </ChartWrapper>
        <ChartWrapper title="Bar Chart \w Labels">
          <BarChartHorizontalWithLabels />
        </ChartWrapper>
        <ChartWrapper title="Bar Chart \w Labels">
          <BarChartVerticalWithLabels />
        </ChartWrapper>
        <ChartWrapper title="Pie Chart">
          <PieChart />
        </ChartWrapper>
        <ChartWrapper title="Pie Chart \w Labels">
          <PieChartWithLabels />
        </ChartWrapper>
        <ChartWrapper title="Pie Chart \w Arcs">
          <PieChartWithDifferentArcs />
        </ChartWrapper>
        <ChartWrapper title="Pie Chart \w Labels">
          <PieChartWithCenteredLabels />
        </ChartWrapper>
        {/* <PieChartWithImageLabels /> */}
        <ChartWrapper title="Pie Chart \w Slices">
          <PieChartWithDynamicSlices />
        </ChartWrapper>
        <ChartWrapper title="Progress Circle">
          <ProgressCircle  />
        </ChartWrapper>
        <ChartWrapper title="Progress Gauge">
          <ProgressGauge  />
        </ChartWrapper>
        <ChartWrapper title="Layered Charts">
          <LayeredCharts  />
        </ChartWrapper>
        <ChartWrapper title="Decorators">
          <Decorators />
        </ChartWrapper>
        <ChartWrapper title="Extra">
          <Extras />
        </ChartWrapper>
        <ChartWrapper title="X Axis Scale">
          <XAxisScaleLinearExample />
        </ChartWrapper>
        <ChartWrapper title="Y Axis Values">
          <YAxisExample />
        </ChartWrapper>
        <ChartWrapper title="X/Y Axis Values">
          <AxesExample />
        </ChartWrapper>
        <ChartWrapper title="Area Stack">
          <AreaStackWithAxisExample />
        </ChartWrapper>
        <ChartWrapper title="Grid Min Max">
          <GridMinMax />
        </ChartWrapper>
        <ChartWrapper title="Custom Grid">
          <CustomGrid />
        </ChartWrapper>
        <ChartWrapper title="Partial Area Chart">
          <PartialAreaChart />
        </ChartWrapper>
        <ChartWrapper title="Partial Line Chart">
          <PartialLineChart />
        </ChartWrapper>
      </View>
    )
  }
}

export default Charts;