import { Framework } from 'vuetify'
import { ChartData, ChartTooltipItem } from 'chart.js'

export function chartColors(vuetify: Framework): { fontColor: string; gridColor: string } {
  return vuetify.theme.dark
    ? { fontColor: 'rgba(255, 255, 255, 0.8)', gridColor: 'rgba(255, 255, 255, 0.2)' }
    : { fontColor: 'rgba(0, 0, 0, 0.8)', gridColor: 'rgba(0, 0, 0, 0.2)' }
}

const fallbackText = 'N/A'

export function barChartTooltipLabel(item: ChartTooltipItem): string {
  return item.value ?? fallbackText
}

export function lineChartTooltipTitle(item: ChartTooltipItem[], data: ChartData): string {
  if (item[0].datasetIndex === undefined || data.datasets === undefined) {
    return fallbackText
  }
  return data.datasets[item[0].datasetIndex].label ?? fallbackText
}

export function lineChartTooltipLabel(item: ChartTooltipItem): string {
  return item.value ?? fallbackText
}

export function pieChartTooltipTitle(item: ChartTooltipItem[], data: ChartData): string {
  if (item[0].index === undefined || data.labels === undefined) {
    return fallbackText
  }
  return data.labels[item[0].index]?.toString() ?? fallbackText
}

export function pieChartTooltipLabel(item: ChartTooltipItem, data: ChartData): string {
  if (item.index === undefined || data.datasets === undefined) {
    return fallbackText
  }
  const dataset = data.datasets[0]
  if (dataset.data === undefined) {
    return fallbackText
  }
  return dataset.data[item.index]?.toString() ?? fallbackText
}
