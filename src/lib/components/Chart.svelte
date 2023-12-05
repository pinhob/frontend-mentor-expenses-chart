<script>
  import data from '../../../data.json';
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import { getDayOfTheWeek } from '../../utils/handleDate';
  import {  CYAN_COLOR, SOFT_RED_COLOR, DARK_BROWN_COLOR, CYAN_COLOR_HOVER, SOFT_RED_COLOR_HOVER } from '../../utils/colors';

  let chartCanvas;
  const currentDay = getDayOfTheWeek();


  const chartConfig = {
      type: 'bar',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            data: data.map(row => row.amount),
            backgroundColor: data.map(row => row.day === currentDay ? CYAN_COLOR : SOFT_RED_COLOR),
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: DARK_BROWN_COLOR,
            displayColors: false,
            callbacks: {
              title: () => '',
              label: ({formattedValue: amount}) => `$${amount}`,
            } 
          }
        },
        elements: {
          bar: {
            borderRadius: 5,
            borderSkipped: false,
            hoverBackgroundColor:  data.map(row => row.day === currentDay ? CYAN_COLOR_HOVER : SOFT_RED_COLOR_HOVER),
          }
        },
        scales: {
          x: {
            border: {
              display: false,
            },
            grid: { display: false, drawBorder: false, },
          },
          y: {
            grid: { display: false }, 
            display: false,
          },
          
        }
      },
    };

    onMount (() => {
      const ctx = chartCanvas.getContext('2d');
      Chart.defaults.font.family = 'DM Sans, sans-serif';
      Chart.defaults.font.size = 14;
      Chart.defaults.color = 'hsl(28, 10%, 53%)';
      const chart = new Chart(ctx, chartConfig);
    });
</script>

<canvas bind:this={chartCanvas} />

<style>

</style>