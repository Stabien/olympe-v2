<script lang="ts">
	import { type AreaChartXAxis, type AreaChartYAxis } from '$lib/types/chartTypes'
	import Chart, { type ChartProps } from 'flowbite-svelte/Chart.svelte'
	import AppToggle from '../input/AppToggle.svelte'

	export let color: string
	export let xAxis: AreaChartXAxis
	export let yAxis: AreaChartYAxis

	// const custom = ({ series, seriesIndex, dataPointIndex, w }) => {
	// 	return `
	//     <div class="rounded-md shadow-lg flex flex-col">
	//       <span class="font-bold bg-[#ABCDEF] text-white p-2">${w.globals.labels[dataPointIndex]}</span>
	//       <span class="font-bold p-2">${series[seriesIndex][dataPointIndex]}</span>
	//     </div>
	//   `
	// }

	let chart: ApexCharts | undefined
	let options: ChartProps['options']

	let areDataLabelsVisible = false

	$: console.log(areDataLabelsVisible)

	$: options = {
		chart: {
			height: 450,
			width: '100%',
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: false
			},
			toolbar: {
				show: false,
				tools: {
					zoomin: false,
					zoomout: false,
					reset: false,
					download: false,
					selection: false,
					pan: false,
					zoom: false
				}
			}
		},
		dataLabels: {
			enabled: areDataLabelsVisible
		},
		markers: {
			size: 5,
			colors: [color],
			strokeColors: '#ffffff',
			strokeWidth: 2,
			hover: {
				size: 8
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: true
			},
			marker: {
				show: true
			}
		},
		noData: {
			text: 'Aucune données pour cette période',
			align: 'center',
			verticalAlign: 'middle'
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: color,
				gradientToColors: [color]
			}
		},
		stroke: {
			width: 4
		},
		series: [
			{
				name: yAxis.name,
				data: yAxis.values,
				color: color
			}
		],
		xaxis: {
			categories: xAxis.values,
			tooltip: {
				enabled: false
			},
			tickAmount: 6,
			labels: {
				style: {
					fontSize: '10'
				}
			}
		},
		yaxis: {
			stepSize: yAxis.stepSize,
			labels: {
				padding: 8,
				style: {
					fontSize: '13'
				}
			},
			tickAmount: 8
		}
	}

	$: console.log(options)
</script>

<div>
	<AppToggle size="small" bind:checked={areDataLabelsVisible} class="w-fit text-sm font-normal"
		>Afficher les valeurs</AppToggle
	>
	<Chart bind:options bind:chart />
</div>
