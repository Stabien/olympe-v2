<script lang="ts">
	import { Chart } from 'flowbite-svelte';
	import type { ChartProps } from 'flowbite-svelte/Chart.svelte';
	import AppCard from '../base/AppCard.svelte';

	let options: ChartProps['options'] = {
		chart: {
			height: '400px',
			width: '600px',
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#EF562F',
				gradientToColors: ['#EF562F']
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 6
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0
			}
		},
		series: [
			{
				name: 'New users',
				data: [6500, 6418, 6456, 6526, 6356, 6456],
				color: '#EF562F'
			}
		],
		xaxis: {
			categories: [
				'01 February',
				'02 February',
				'03 February',
				'04 February',
				'05 February',
				'06 February',
				'07 February'
			],
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		}
	};
</script>

<AppCard size="lg">
	<Chart {options} />
</AppCard>
