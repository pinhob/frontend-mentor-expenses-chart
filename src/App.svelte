<script>
  import Balance from "./lib/components/Balance.svelte";
  import Spending from "./lib/components/Spending.svelte";

</script>

<main>
  <Balance />
  <Spending />

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/pinhob">Bruno Pinho</a>.
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    height: 100vh;
  }

  .attribution { 
    position: absolute;
    bottom: 0;
    font-size: 11px;
    text-align: center;
  }

  .attribution a { 
    color: hsl(228, 45%, 44%);
  }
</style>
