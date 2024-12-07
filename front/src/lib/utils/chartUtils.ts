import { ChartPeriodValues, type AreaChartData } from '$lib/types/chartTypes'
import { getMillisecondsFromDays } from './date'

export const getAreaChartEvolution = (yAxisValues: number[]) => {
	if (yAxisValues.length === 0) {
		return 0
	}

	return Math.round((yAxisValues[yAxisValues.length - 1] - yAxisValues[0]) * 10) / 10
}

export const getAreaChartYAxisStepSize = (yAxisValues: number[]) => {
	if (yAxisValues.length === 0) {
		return 0
	}

	const min = Math.min(...yAxisValues)
	const max = Math.max(...yAxisValues)

	return Math.round(((max - min) / 8) * 10) / 10
}

export const getAreaChartSortedData = (data: AreaChartData[], period: ChartPeriodValues) => {
	const periodData = getPeriodData(data, period)

	return periodData.sort((a, b) => a.date.getSeconds() - b.date.getSeconds())
}

export const getPeriodData = (data: AreaChartData[], period: ChartPeriodValues) => {
	const filterByPeriod = {
		[ChartPeriodValues.lastWeek]: getMillisecondsFromDays(7),
		[ChartPeriodValues.lastMounth]: getMillisecondsFromDays(30),
		[ChartPeriodValues.lastSixMounths]: getMillisecondsFromDays(182),
		[ChartPeriodValues.lastYear]: getMillisecondsFromDays(365),
		[ChartPeriodValues.all]: Date.now()
	}

	return data.filter((item) => Date.now() - item.date.getTime() <= filterByPeriod[period])
}
