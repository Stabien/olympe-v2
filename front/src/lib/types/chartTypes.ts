export enum ChartPeriodValues {
	lastWeek = 'LAST_WEEK',
	lastMounth = 'LAST_MOUNTH',
	lastSixMounths = 'LAST_SIX_MOUNTHS',
	lastYear = 'LAST_YEAR',
	all = 'ALL'
}

export interface AreaChartData {
	date: Date
	value: number
}

export interface AreaChartXAxis {
	values: string[]
}

export interface AreaChartYAxis {
	name: string
	values: number[]
	stepSize: number
}
