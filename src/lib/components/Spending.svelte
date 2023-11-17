<div class="wrapper">
  <h1>Spending - Last 7 days</h1>

  <p>
    mon
    tue
    wed
    thu
    fri
    sat
    sun
  </p>

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
    padding: 18px;
  }

  div.spending-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .total-month p {
    font-size: 2.25rem;
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