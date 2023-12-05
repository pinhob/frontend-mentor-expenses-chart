<div class="wrapper">
  <div class="balance-data">
    <h2>My balance</h2>
    <p>$921.48</p>
  </div>
  <img src="public/logo.svg" alt="logo" />
</div>

<style>
  div.wrapper {
    background-color: var(--soft-red);
    border-radius: 16px;
    padding: 16px 28px;
    color: white;
    display: flex;
    width:  min(546px, 100%);
    justify-content: space-between;
    align-items: center;
  }

  div.balance-data {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .balance-data h2 {
    font-size: 1rem;
    font-weight: 400;
  }

  .balance-data p {
    font-size: 2rem;
    font-weight: 700;
  }
</style>