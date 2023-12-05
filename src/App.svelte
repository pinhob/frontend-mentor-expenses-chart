<script>
  import Balance from "./lib/components/Balance.svelte";
  import Spending from "./lib/components/Spending.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700&display=swap" rel="stylesheet">
</svelte:head>

<main class="wrapper">
  <Balance />
  <Spending />

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/pinhob">Bruno Pinho</a>.
  </div>
</main>

<style>
  main.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    height: 100vh;
    padding: 0 16px;
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
