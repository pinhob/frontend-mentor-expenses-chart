<script>
  import data from '../../../data.json';
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  import { getDayOfTheWeek } from '../../utils/handleDate';

  let chartCanvas;
  const currentDay = getDayOfTheWeek();

  const chartConfig = {
      type: 'bar',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            data: data.map(row => row.amount),
            backgroundColor: data.map(row => row.day === currentDay ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'),
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'hsl(25, 47%, 15%)',
            displayColors: false,
            callbacks: {
              title: () => '',
              label: ({formattedValue: amount}) => `$${amount}`,
            } 
          }
        },
        elements: {
          bar: {
            // backgroundColor: 'hsl(10, 79%, 65%)',
            borderRadius: 2,
            hoverBackgroundColor:  data.map(row => row.day === currentDay ? 'hsla(186, 34%, 60%, 0.8)' : 'hsla(10, 79%, 65%, 0.8)'),
          }
        },
        scales: {
          x: {
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
      const chart = new Chart(ctx, chartConfig);

      console.log(chart.data);
    });
</script>

<canvas bind:this={chartCanvas} />

<style>

</style>