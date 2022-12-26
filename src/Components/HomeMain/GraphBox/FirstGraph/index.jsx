import React from 'react'
import { FirstGraphContainer } from './FirstGraph'
import Chart from 'react-apexcharts'

const chartOptions = {
  series: [44, 55, 13, 43],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    markers: {
      colors: ['#F44336', '#E91E63', '#9C27B0']
   },
    labels: ['YouTube', 'Instagram', 'LinkedIn', 'TikTok'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'top'
        }
      }
    }]
  },
}


const FirstGraph = () => {

  return (
    <FirstGraphContainer>
    <Chart
      options={chartOptions}
      series={chartOptions.series}
      type='pie'
      width={380}
    />
    </FirstGraphContainer>
  )
}

export default FirstGraph