<script>
  import Chart from "./Chart.svelte";
</script>

<div class="wrapper">
  <h1>Spending - Last 7 days</h1>

  <Chart />
  <div class="divider"></div>

  <div class="spending-data">
    <div class="total-month">
      <h2>Total this month</h2>
      <p>$478.33</p>
    </div>
    <div class="last-month">
      <p>+2.4%</p>
      <h2>from last month</h2>
    </div>
  </div>
</div>

<style>
  div.wrapper {
    background-color: hsl(0, 100%, 100%);
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 16px;
    width:  min(546px, 100%);
  }

  div.spending-data {
    display: flex;
    justify-content: space-between;
    align-items: last baseline;
    line-height: normal;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .total-month p {
    font-size: 3rem;
    font-weight: 700;
  }

  .last-month {
    text-align: end;
  }

  .last-month p {
    text-align: end;
    font-weight: 700;
  }

  h2 {
    font-size: var(--body-font-size);
    font-weight: 400;
    color: var(--medium-brown);
  }

  div.divider {
    border: 1px solid hsl(33, 100%, 98%);
    margin: 1rem 0;
  }
</style>