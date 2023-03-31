<script lang="ts">
  import NavigationBar from "./navigation_bar.svelte";
  $: innerWidth = 0;

  let hideMobileNav = true;

  function isMobile(h: number, w: number) {
    return w <= 1000;
  }

  function flip() {
    hideMobileNav = !hideMobileNav;
  }
</script>

<svelte:window bind:innerWidth />

{#if isMobile(innerHeight, innerWidth)}
  <button on:click={flip}><h3>{hideMobileNav ? "☰" : "🗙"}</h3></button>
  <NavigationBar hidden={hideMobileNav} isMobile={true} />
{:else}
  <NavigationBar isMobile={false} />
{/if}

<style>
  button {
    background-color: #00296b;
    width: 100%;
    border: 0 none #00296b;
    cursor: pointer;
  }

  button:hover {
    background-color: #003f88;
  }
</style>
