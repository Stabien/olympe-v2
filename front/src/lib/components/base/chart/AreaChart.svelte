<script lang="ts">
	import AppCard from '../AppCard.svelte'
	import AreaChartHead from './AreaChartHead.svelte'
	import { ChartPeriodValues, type AreaChartData } from '$lib/types/chartTypes'
	import AreaChartBody from './AreaChartBody.svelte'
	import { formatDate } from '$lib/utils/date'
	import {
		getAreaChartEvolution,
		getAreaChartSortedData,
		getAreaChartYAxisStepSize
	} from '$lib/utils/chartUtils'

	export let color: string
	export let yAxisName: string
	export let data: AreaChartData[]
	export let title: string

	let period: ChartPeriodValues = ChartPeriodValues.all

	$: sortedData = getAreaChartSortedData(data, period)

	$: xAxisValues = sortedData.map((item) => formatDate(item.date))
	$: yAxisValues = sortedData.map((item) => item.value)

	$: xAxis = {
		values: xAxisValues
	}

	$: yAxis = {
		values: yAxisValues,
		stepSize: getAreaChartYAxisStepSize(yAxisValues),
		name: yAxisName
	}

	$: evolution = getAreaChartEvolution(yAxisValues)
</script>

<AppCard size="lg" class="max-w-full">
	<AreaChartHead {title} {evolution} bind:value={period} />
	<AreaChartBody {xAxis} {yAxis} {color} />
</AppCard>
