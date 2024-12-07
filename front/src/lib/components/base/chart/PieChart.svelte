<script lang="ts">
	import { Chart } from 'flowbite-svelte'
	import type { ChartProps } from 'flowbite-svelte/Chart.svelte'

	const options: ChartProps['options'] = {
		series: [52.8, 26.8, 20.4],
		colors: ['#1C64F2', '#16BDCA', '#9061F9'],
		chart: {
			height: 420,
			width: '100%',
			type: 'pie'
		},
		stroke: {
			colors: ['white']
		},
		plotOptions: {
			pie: {
				dataLabels: {
					offset: -25
				}
			}
		},
		labels: ['Direct', 'Organic search', 'Referrals'],
		dataLabels: {
			enabled: true,
			style: {
				fontFamily: 'Inter, sans-serif'
			}
		},
		legend: {
			position: 'bottom',
			fontFamily: 'Inter, sans-serif'
		},
		yaxis: {
			labels: {
				formatter: function (value: number, opts: any): string | string[] {
					return value + '%'
				}
			}
		},
		xaxis: {
			labels: {
				formatter: function (value: string) {
					return value + '%'
				}
			},
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		}
	}
</script>

<Chart {options} class="py-6" />
